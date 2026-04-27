'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

interface ScrollVideoEffectProps {
  frameCount: number;
  framePathPrefix: string; // e.g. '/sprinkler-frames/frame_'
  framePadLength?: number; // e.g. 4 for 0001
  extension?: string; // e.g. '.jpg'
  heightClass?: string; // e.g. 'h-[300vh]'
}

export default function ScrollVideoEffect({
  frameCount,
  framePathPrefix,
  framePadLength = 4,
  extension = '.jpg',
  heightClass = 'h-[300vh]',
}: ScrollVideoEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(0);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(framePadLength, '0');
      img.src = `${framePathPrefix}${paddedIndex}${extension}`;
      img.onload = () => {
        loadedCount++;
        setLoaded(loadedCount);
        // Draw the first frame once it's loaded
        if (i === 1 && canvasRef.current) {
          const ctx = canvasRef.current.getContext('2d');
          if (ctx) {
            ctx.drawImage(img, 0, 0, canvasRef.current.width, canvasRef.current.height);
          }
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, [frameCount, framePathPrefix, framePadLength, extension]);

  // Framer motion scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Calculate current frame index based on scroll progress
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  useEffect(() => {
    if (images.length === 0) return;

    // Handle resize
    const handleResize = () => {
      if (canvasRef.current && containerRef.current) {
        // Adjust canvas resolution to match window size for better quality
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Redraw current frame
        drawFrame(Math.round(frameIndex.get()));
      }
    };

    const drawFrame = (index: number) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      const img = images[index];

      if (canvas && ctx && img && img.complete) {
        // Calculate dimensions to maintain aspect ratio and cover the screen
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;
        
        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let offsetX = 0;
        let offsetY = 0;

        if (canvasRatio > imgRatio) {
          drawHeight = canvas.width / imgRatio;
          offsetY = (canvas.height - drawHeight) / 2;
        } else {
          drawWidth = canvas.height * imgRatio;
          offsetX = (canvas.width - drawWidth) / 2;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial setup

    // Subscribe to scroll updates
    const unsubscribe = frameIndex.on('change', (latest) => {
      drawFrame(Math.round(latest));
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      unsubscribe();
    };
  }, [images, frameIndex]);

  // Loading progress
  const progressPercent = Math.round((loaded / frameCount) * 100);

  return (
    <div ref={containerRef} className={`relative w-full ${heightClass} bg-black`}>
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        {loaded < frameCount && (
          <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
            <div className="text-white text-xl font-mono">
              Loading Animation... {progressPercent}%
            </div>
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover"
        />
        
        {/* Example text overlay that fades in towards the end of the video */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{
            opacity: useTransform(scrollYProgress, [0.7, 0.9], [0, 1]),
            y: useTransform(scrollYProgress, [0.7, 1], [50, 0])
          }}
        >
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
              Precision Engineering
            </h2>
            <p className="text-xl text-white/90 drop-shadow-md">
              Every component designed to perfection.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
