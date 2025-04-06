# Beis Knesses of New Milford (bknm.org)

A static website for Beis Knesses of New Milford, built with Astro and React.

## Setup

1. **Clone the repository**:

   ```bash
   git clone <repo-url>
   cd bknm-org
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run locally**:

   ```bash
   npm run dev
   ```

   Open http://localhost:4321 in your browser.

4. **Build for production**:

   ```bash
   npm run build
   ```

5. **Preview the build**:
   ```bash
   npm run preview
   ```

## Deployment

1. Push to a GitHub repository.
2. Deploy on Vercel:
   ```bash
   vercel --prod
   ```

## Notes

- Replace the Stripe Checkout URL in `src/pages/donate.astro` with your real URL.
- Update the Fillout form iframe URL in `src/pages/donate.astro` with your form ID.

---

## Instructions to Create the Astro App

1. **Initialize the Astro Project**:

   ```bash
   npm create astro@latest bknm-org
   ```

   - Choose the "Empty" template.
   - Select "Yes" for TypeScript (optional, but recommended).
   - Install dependencies when prompted.

2. **Add Integrations**:

   ```bash
   npx astro add react tailwind
   ```

3. **Create the File Structure**:

   - Set up the directories and files as shown above (public/, src/, etc.).
   - Copy the code for each file into its respective location.

4. **Add the JSON File**:

   - Create `public/data/content.json` with the content provided.

5. **Run Locally**:

   ```bash
   npm run dev
   ```

   Open http://localhost:4321 to see the site.

   - Verify the homepage fetches zmanim via Hebcal and displays the timetable from content.json.

6. **Deploy**:
   - Push to GitHub.
   - Deploy on Vercel:
     ```bash
     vercel --prod
     ```
