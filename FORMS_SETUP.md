# Contact Form Setup Options

## Option 1: Formspree (Recommended - Easiest)

1. Go to [Formspree.io](https://formspree.io/)
2. Sign up for a free account
3. Create a new form
4. Copy your form endpoint (looks like `https://formspree.io/f/your-form-id`)
5. Replace the endpoint in the contact form code

## Option 2: Netlify Forms (If hosting on Netlify)

Add `data-netlify="true"` to your form and Netlify will handle it automatically.

## Option 3: Simple Email Link (Fallback)

We can change the form to just open the user's email client with pre-filled content.

## Current Issue
The Formspree endpoint `https://formspree.io/f/xgqwpjnd` is not working. We need to either:
1. Create a new Formspree form, or
2. Use a different solution

Let me implement Option 3 as a quick fix that will definitely work.
