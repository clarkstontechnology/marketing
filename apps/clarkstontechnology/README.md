# Clarkston Technology Group

IT Services and IT Consulting company delivering high value software solutions for your business needs.

## 🏢 Company Information

- **Founded**: 2004
- **Location**: Atlanta, GA
- **Industry**: IT Services and IT Consulting
- **LinkedIn**: [Clarkston Technology Group](https://www.linkedin.com/company/clarkston-technology-group)
- **Tagline**: "We deliver high value software solutions for your business needs"

## 🚀 Overview

This is the marketing website for Clarkston Technology Group, LLC. The site showcases our services including:
- Fractional CTO services
- Engineering leadership
- Software development consulting
- Technology strategy and advisory

## 🛠 Technical Details

This app is part of the [Marketing Platform Monorepo](../../README.md).

### Tech Stack
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Shared components from `@marketing/ui`
- **Testing**: Playwright E2E tests

### Key Files
- `src/config/site.ts` - Site configuration (name, links, services)
- `src/app/page.tsx` - Homepage
- `src/app/contact/page.tsx` - Contact form
- `src/app/layout.tsx` - Root layout with metadata

## 🚀 Development

### Prerequisites
See the [main README](../../README.md#prerequisites) for general requirements.

### Running Locally

```bash
# From the monorepo root
npm run dev

# Or just this app
cd apps/clarkstontechnology
npm run dev
```

The site will be available at `http://localhost:3000`

### Building

```bash
# From the monorepo root
npm run build

# Or just this app
cd apps/clarkstontechnology
npm run build
```

## 🧪 Testing

Tests are located in the monorepo root under `tests/e2e/clarkston-technology.spec.ts`.

```bash
# Run tests from monorepo root
npm run test:agent -- --project=chromium

# Update visual regression snapshots
npm run test:agent -- --project=chromium --update-snapshots
```

### Current Test Status
- ✅ Homepage loads with all key elements
- ✅ Navigation works correctly
- ✅ All links have proper hrefs
- ✅ Responsive design works correctly
- ✅ Page performance metrics
- ✅ Visual regression tests (homepage, contact)
- ⚠️ Contact form validation (known issue with form styling)

## 📝 Recent Updates

### Latest Changes
- Updated company name to "Clarkston Technology Group" throughout the site
- Added company tagline as main heading
- Incorporated company details: Founded 2004, Atlanta, GA location
- Updated LinkedIn link to company page
- Added social links (LinkedIn, GitHub, Email) in footer
- Fixed Playwright test configuration to use correct port (3000)
- Updated visual regression snapshots for new content

## 🎨 Customization

### Updating Company Information
Edit `src/config/site.ts` to update:
- Company name and description
- Social media links
- Navigation menu items
- Services offered

### Styling
- Uses standard Tailwind utilities (avoid custom CSS variables)
- Shared Tailwind config from `@marketing/config`
- Component variants use CVA (class-variance-authority)

## 📦 Dependencies

This app uses shared packages from the monorepo:
- `@marketing/ui` - Shared UI components
- `@marketing/config` - Shared configuration (ESLint, Tailwind, TypeScript)

## 🚢 Deployment

Configured for deployment on Vercel:
1. Set root directory to `apps/clarkstontechnology`
2. Environment variables needed:
   ```
   NEXT_PUBLIC_SITE_URL=https://www.clarkstontechnology.com
   ```

## 📄 License

This project is private and proprietary. 