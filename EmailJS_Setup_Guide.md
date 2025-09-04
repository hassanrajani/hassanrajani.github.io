# EmailJS Setup Guide for Contact Form

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up with your email: mohammadhasanhasnain@gmail.com
3. Verify your email

## Step 2: Create Email Service
1. Go to "Email Services" in dashboard
2. Click "Add New Service"
3. Choose "Gmail" 
4. Connect your Gmail account: mohammadhasanhasnain@gmail.com
5. Copy the Service ID (replace 'service_hassan123' in code)

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio website
```

4. Copy Template ID (replace 'template_hassan123' in code)

## Step 4: Get Public Key
1. Go to "Account" > "General"
2. Copy Public Key (replace 'hassan_public_key_123' in code)

## Step 5: Update Code
Replace these values in Contact/index.js:
- service_hassan123 → Your Service ID
- template_hassan123 → Your Template ID  
- hassan_public_key_123 → Your Public Key

## Step 6: Test
1. Fill out contact form on your website
2. Check mohammadhasanhasnain@gmail.com for emails
3. Check spam folder if not in inbox

## Troubleshooting
- Verify Gmail account is connected
- Check EmailJS dashboard for failed sends
- Ensure template variables match form field names
- Check browser console for errors