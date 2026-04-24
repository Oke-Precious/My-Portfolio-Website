# Oke Precious Portfolio - Contact Form Setup

## What I've Done

I've created a complete backend system for your contact form with email functionality. Here's what's been set up:

### Files Created:
- **server.js** - Node.js/Express backend server
- **package.json** - Project dependencies
- **.env** - Environment configuration (keep private!)
- **.gitignore** - Prevents committing sensitive files

### Updated:
- **index.html** - Connected form to backend API

---

## Setup Steps (Follow These!)

### Step 1: Get Gmail App Password
1. Go to https://myaccount.google.com/
2. Click "Security" in the left menu
3. Enable "2-Step Verification" if not already enabled
4. Scroll down and find "App passwords"
5. Select "Mail" and "Windows Computer"
6. Google will generate a 16-character password (with spaces)
7. **Copy this password**

### Step 2: Update .env File
1. Open `.env` file in your project folder
2. Replace `your_app_password_here` with the password from Step 1
   ```
   EMAIL_USER=okeprecido@gmail.com
   EMAIL_PASS=xxxx xxxx xxxx xxxx
   ```
3. Save the file

### Step 3: Install Dependencies
Open terminal in your project folder and run:
```bash
npm install
```

### Step 4: Start the Server
Run this command in terminal:
```bash
npm start
```

You should see:
```
Server is running on port 5000
```

### Step 5: Test It
1. Open your portfolio in browser: http://localhost:5000
2. Fill out the contact form
3. Click "Send Message"
4. Check your Gmail inbox for the message
5. The visitor will also receive a confirmation email

---

## How It Works

1. **User fills form** → Sends to `/api/send-email` endpoint
2. **Backend receives data** → Validates all fields
3. **Sends two emails:**
   - Email to you (okeprecido@gmail.com) with all details
   - Confirmation email to the visitor
4. **Shows success/error message** to the user

---

## Deployment

When ready to deploy your portfolio:

### Option 1: Netlify + Serverless Function
- Deploy frontend on Netlify
- Convert `server.js` to a Netlify Function
- Update API endpoint in HTML

### Option 2: Heroku / Railway / Render
- Deploy both frontend + backend together
- Set environment variables in hosting platform
- Update API endpoint to production URL

### Option 3: VPS / Self-hosted
- Use PM2 to keep server running
- Set up Nginx reverse proxy
- Use SSL certificate

---

## Troubleshooting

**"Cannot find module 'express'"**
→ Run: `npm install`

**"ECONNREFUSED - connection refused"**
→ Make sure server is running with `npm start`

**"Email not sending"**
→ Check .env file has correct Gmail app password
→ Make sure 2-Step Verification is enabled on Gmail

**"CORS errors"**
→ Backend already allows your localhost

---

## Security Notes

⚠️ **Never commit .env file** - it contains your email password!
- .gitignore already protects it
- When deploying, use platform's environment variables instead

---

Need help? Just let me know!
