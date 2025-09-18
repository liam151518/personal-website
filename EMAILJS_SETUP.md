# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your email provider
5. Copy your Service ID (starts with "service_")

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template:

```
Subject: New Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Company: {{company}}

Message:
{{message}}

---
This message was sent from your personal website contact form.
```

4. Save the template and copy the Template ID (starts with "template_")

## Step 4: Get Public Key
1. Go to "Account" in your EmailJS dashboard
2. Copy your Public Key (starts with a string of letters/numbers)

## Step 5: Update Your Code
Replace these values in `src/components/ui/premium-contact.tsx`:

```javascript
const serviceId = 'service_YOUR_SERVICE_ID_HERE';
const templateId = 'template_YOUR_TEMPLATE_ID_HERE';
const publicKey = 'YOUR_PUBLIC_KEY_HERE';
```

## Step 6: Test
1. Save your changes
2. Go to your website
3. Fill out the contact form
4. Check your email for the message!

## Alternative: Simple Form-to-Email Services

If you prefer not to use EmailJS, here are other options:

### 1. Formspree (Easiest)
- Go to [Formspree.io](https://formspree.io/)
- Create account and get form endpoint
- Change form action to your Formspree endpoint

### 2. Netlify Forms (If hosting on Netlify)
- Add `data-netlify="true"` to your form
- Netlify will automatically handle form submissions

### 3. Getform
- Similar to Formspree
- Simple form handling service

## Current Status
✅ EmailJS package installed
✅ Contact form updated with EmailJS integration
✅ Error handling added
❌ EmailJS account setup needed
❌ Service ID, Template ID, and Public Key needed

Once you complete the EmailJS setup, your contact form will send messages directly to your email!
