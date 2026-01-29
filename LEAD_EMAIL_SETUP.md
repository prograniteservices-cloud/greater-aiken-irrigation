# Lead Capture & Email Notification Setup

## Summary of Changes

### 1. Fixed Edge Function (`supabase/functions/send-lead-email/index.ts`)
- Changed from expecting secrets in request payload to using `Deno.env.get()`
- Added better error handling and logging
- Updated response messages for clarity

### 2. Created Database Setup (`supabase/setup-leads-table.sql`)
- Created `leads` table with proper schema
- Added Row Level Security (RLS) policies
- Optional database trigger to call edge function (requires http extension)
- Comprehensive SQL script with comments

### 3. Updated Quote Form (`components/sections/Quote.tsx`)
- Modified to call edge function after successful lead insertion
- Provides reliable email notification flow

### 4. Added Test Script (`supabase/test-leads-setup.sql`)
- SQL commands to test the entire setup
- Verification queries

## Setup Instructions

### Step 1: Run Database Setup
1. Open Supabase Dashboard
2. Go to SQL Editor
3. Open and run `supabase/setup-leads-table.sql`

### Step 2: Configure Edge Function Secrets
1. Go to Supabase Dashboard > Edge Functions
2. Select `send-lead-email` function
3. Click on "Secrets" tab
4. Add the following secrets:
   - `GMAIL_USER`: Your Gmail address
   - `GMAIL_APP_PASSWORD`: Your Gmail app password (create one at https://myaccount.google.com/apppasswords)
   - `RECIPIENT_EMAIL`: GreaterAikenIrrigation@gmail.com

### Step 3: Verify Environment Variables
Ensure your `.env.local` file contains:
```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### Step 4: Test the Setup
1. Open Supabase Dashboard > SQL Editor
2. Run `supabase/test-leads-setup.sql`
3. Verify:
   - Lead appears in `leads` table
   - Email arrives at GreaterAikenIrrigation@gmail.com
   - Check Edge Functions logs for any errors

## Architecture

### Flow (Frontend-triggered - Recommended)
```
User fills form → Quote.tsx inserts lead → Calls edge function → Email sent
```

### Flow (Database-triggered - Alternative)
```
User fills form → Quote.tsx inserts lead → Trigger fires → Calls edge function → Email sent
```

**Note:** Frontend-triggered approach is more reliable as it doesn't require additional extensions.

## Troubleshooting

### Email Not Sending
1. Check Supabase Edge Functions logs
2. Verify Gmail app password is correct
3. Ensure "Less Secure Apps" is enabled OR use App Password
4. Check RECIPIENT_EMAIL is correct

### Lead Not Saving
1. Check browser console for errors
2. Verify RLS policies allow inserts
3. Check Supabase logs

### Trigger Not Firing
1. Ensure http extension is enabled
2. Check trigger exists: `SELECT * FROM pg_trigger WHERE tgname = 'send_lead_email_trigger'`
3. Check function exists: `SELECT * FROM pg_proc WHERE proname = 'handle_new_lead'`

## Files Modified/Created

### Modified:
- `supabase/functions/send-lead-email/index.ts`
- `components/sections/Quote.tsx`

### Created:
- `supabase/setup-leads-table.sql`
- `supabase/test-leads-setup.sql`
- `LEAD_EMAIL_SETUP.md` (this file)

## Security Notes

1. **Never commit secrets** to version control
2. Use App Passwords, not regular Gmail passwords
3. The edge function runs with anon key permissions (restricted)
4. RLS policies ensure only authenticated users can read leads
5. Emails contain lead information - ensure recipient email is secure
