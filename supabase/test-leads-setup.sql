-- ============================================
-- Test Script for Lead Capture & Email Notifications
-- ============================================
-- Run this in Supabase SQL Editor to test the setup
-- ============================================

-- Test 1: Insert a test lead
-- This will trigger the email notification (if trigger is enabled)
INSERT INTO public.leads (name, email, phone_number, brief_description)
VALUES (
    'Test User',
    'test@example.com',
    '555-1234',
    'Test description for email notification'
);

-- Test 2: Verify the lead was inserted
SELECT * FROM public.leads WHERE email = 'test@example.com' ORDER BY created_at DESC LIMIT 1;

-- Test 3: Check for any errors in recent logs
-- (This query helps verify the trigger executed)
SELECT * FROM pg_stat_statements WHERE query ILIKE '%send-lead-email%' LIMIT 10;

-- Test 4: Clean up test data (optional)
-- DELETE FROM public.leads WHERE email = 'test@example.com';

-- ============================================
-- Expected Results:
-- ============================================
-- 1. A new row should appear in the leads table
-- 2. The edge function should be triggered (if trigger is enabled)
-- 3. An email should be sent to GreaterAikenIrrigation@gmail.com
-- 4. Check Supabase Dashboard > Edge Functions > Logs for execution details
-- ============================================
