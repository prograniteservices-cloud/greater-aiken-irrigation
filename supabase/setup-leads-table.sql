-- ============================================
-- Supabase Setup for Lead Capture & Email Notifications
-- ============================================
-- Run this entire script in Supabase SQL Editor
-- ============================================

-- 1. Create leads table (if not exists)
-- ============================================
CREATE TABLE IF NOT EXISTS public.leads (
    id BIGSERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone_number TEXT,
    brief_description TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_leads_updated_at BEFORE UPDATE ON public.leads
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (for the quote form)
CREATE POLICY "Allow anonymous insert leads" ON public.leads
    FOR INSERT WITH CHECK (true);

-- Allow authenticated users to read leads
CREATE POLICY "Allow authenticated read leads" ON public.leads
    FOR SELECT USING (auth.role() = 'authenticated');

-- 2. Alternative: Create webhook trigger using http extension
-- ============================================
-- Note: The most reliable approach is to call the edge function from the frontend
-- after successful insert. However, if you want a database-side solution,
-- enable the 'http' extension first, then uncomment the function below:

-- First, enable the http extension in Supabase Dashboard:
-- Database > Extensions > enable http (by supabase)

/*
CREATE OR REPLACE FUNCTION public.handle_new_lead()
RETURNS TRIGGER AS $$
DECLARE
    edge_function_url TEXT;
    project_ref TEXT;
    result JSONB;
BEGIN
    -- Get project reference from current database URL
    -- This automatically detects your Supabase project
    SELECT current_database() INTO project_ref;
    
    -- Construct edge function URL
    edge_function_url := 'https://' || project_ref || '.supabase.co/functions/v1/send-lead-email';
    
    -- Call edge function using http extension
    -- Note: The edge function uses Deno.env for credentials
    BEGIN
        SELECT content INTO result
        FROM http(
            (
                edge_function_url
            ),
            (
                json_build_object(
                    'record', ROW_TO_JSON(NEW)
                )
            ),
            (
                json_build_object(
                    'Authorization', 'Bearer ' || current_setting('app.settings.service_role_key', true)
                )
            ),
            (
                json_build_object(
                    'Content-Type', 'application/json'
                )
            )
        );
        
        RAISE NOTICE 'Email notification sent for lead: %', NEW.name;
    EXCEPTION WHEN OTHERS THEN
        -- Log error but don't fail the insert
        RAISE WARNING 'Failed to send email notification for lead %: %', NEW.name, SQLERRM;
    END;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to fire after insert
DROP TRIGGER IF EXISTS send_lead_email_trigger ON public.leads;

CREATE TRIGGER send_lead_email_trigger
    AFTER INSERT ON public.leads
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_new_lead();
*/

-- ============================================
-- IMPORTANT: After running this script, you need to:
-- ============================================
--
-- STEP 1: Set environment variables for your edge function
-- Go to Supabase Dashboard > Edge Functions > select send-lead-email > Secrets
-- Add these secrets:
--    - GMAIL_USER: Your Gmail address (e.g., travis@example.com)
--    - GMAIL_APP_PASSWORD: Your Gmail app password (not your regular password)
--    - RECIPIENT_EMAIL: GreaterAikenIrrigation@gmail.com
--
-- STEP 2: Choose your email notification approach:
--
--    Option A: Frontend-triggered (RECOMMENDED - most reliable)
--    - Update the Quote component to call edge function after successful insert
--    - See the updated Quote.tsx file for implementation
--
--    Option B: Database-triggered (requires http extension)
--    - Enable the 'http' extension in Supabase Dashboard > Database > Extensions
--    - Uncomment the trigger function above
--    - The trigger will automatically call the edge function on insert
--
-- STEP 3: Test the setup:
--    INSERT INTO public.leads (name, email, phone_number, brief_description)
--    VALUES ('Test User', 'test@example.com', '555-1234', 'Test description');
--
-- STEP 4: Verify in Supabase Dashboard:
--    - Check that the lead was inserted
--    - Check Edge Functions logs to see if email was sent
--    - Check your inbox for the test email
--
-- ============================================
