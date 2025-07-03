# Marketing Platform - Multi-Site Monorepo

A scalable marketing platform for building and managing multiple websites with shared components and features.

## 🚀 Overview

This monorepo architecture enables the creation and management of multiple marketing websites while maximizing code reuse and maintaining consistency across all properties.

### Current Sites
- **Clarkston Technology** - Fractional CTO and engineering leadership services
- **Spiritual Direction** (planned) - Spiritual direction practice
- **ESL Teaching** (planned) - ESL teaching consultation services  
- **Familee.online** (planned) - Family internet presence and services
- **JohnAndDinah.com** (planned) - Personal couple's website

## 🛠 Tech Stack

### Framework & Build Tools
- **Next.js 14** - React framework with App Router
- **Turborepo** - Monorepo build orchestration (v2.5+)
- **TypeScript** - Type safety across all packages
- **npm workspaces** - Package management

### Styling & UI
- **Tailwind CSS v3** - Utility-first CSS framework (without complex CSS variables)
- **Shadcn/ui** components (via Radix UI) - Accessible component primitives
- **CVA (class-variance-authority)** - Component variants

### Infrastructure
- **Vercel** - Hosting and deployment
- **PostgreSQL/Supabase** (planned) - Database
- **Resend/SendGrid** (planned) - Transactional emails

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **Playwright** - E2E testing framework

## 📁 Project Structure

```
marketing-platform/
├── apps/
│   ├── clarkstontechnology/    # Fractional CTO site
│   ├── spiritual-direction/     # Spiritual direction site (planned)
│   ├── esl-teaching/           # ESL consultation site (planned)
│   ├── familee/                # Family presence site (planned)
│   └── johnanddinah/           # Personal couple site (planned)
├── packages/
│   ├── ui/                     # Shared UI components
│   ├── marketing-components/    # Marketing-specific components (planned)
│   ├── forms/                  # Shared form components (planned)
│   ├── seo/                    # SEO utilities (planned)
│   └── config/                 # Shared configurations
└── infrastructure/
    ├── database/               # Shared database schemas (planned)
    └── email-templates/        # Email templates (planned)
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm 10.2.4+

### Installation

```bash
# Clone the repository
git clone https://github.com/clarkstontechnology/marketing.git

# Install dependencies
npm install

# Run development server for all apps
npm run dev

# Or run a specific app
cd apps/clarkstontechnology
npm run dev
```

### Building for Production

```bash
# Build all apps
npm run build

# Build specific app
cd apps/clarkstontechnology
npm run build
```

## 📝 Development Workflow

### Development Server Management

#### Before Starting the Server
- **Check if already running**: The dev server might already be running on port 3000 or 3001
- **Hot Module Replacement (HMR)**: Most code changes are applied automatically without needing to restart
- **When restart is needed**: Only for configuration changes, new dependencies, or environment variable updates

#### Managing Server Processes
```bash
# Check what's running on the default ports
lsof -i :3000 -i :3001

# Find all Node.js processes
ps aux | grep node

# Kill a specific process
kill -9 <PID>

# Kill all Node.js processes (use with caution)
killall node
```

### Adding a New Site

1. Create a new app in the `apps/` directory
2. Copy the structure from an existing app (e.g., clarkstontechnology)
3. Update the site configuration in `src/config/site.ts`
4. Customize components and content as needed

### Adding Shared Components

1. Create component in `packages/ui/src/components/`
2. Export from `packages/ui/src/index.ts`
3. Import in any app using `import { ComponentName } from '@marketing/ui'`
4. Use variant-based components with CVA (class-variance-authority)
5. Keep components generic and reusable

### Best Practices

#### Component Development
- Shared UI components go in packages/ui
- Use variant-based components with CVA
- Keep components generic and reusable
- Check existing components before creating new ones

#### Styling
- Use Tailwind utility classes directly
- Avoid custom CSS variables in globals.css
- Shared Tailwind config in packages/config
- Use simple classes like `bg-blue-500` not `bg-background`

#### Testing
- E2E tests go in tests/e2e/
- Use Playwright's built-in waiting mechanisms
- Include visual regression tests for key pages
- First run creates baselines, use `--update-snapshots` to update
- Different reporters: HTML for manual review, line reporter for CI

### Scripts

- `npm run dev` - Run all apps in development mode
- `npm run build` - Build all apps for production
- `npm run lint` - Lint all code
- `npm run format` - Format code with Prettier
- `npm run clean` - Clean all build artifacts
- `npm test` - Run E2E tests with HTML report
- `npm run test:agent` - Run E2E tests with line reporter (for CI/agents)
- `npm run test:ui` - Run tests in interactive UI mode

## 🔧 Configuration Notes

### Dependencies
- Use `"*"` instead of `"workspace:*"` for internal dependencies
- Tailwind plugins must be installed in the config package where tailwind.config.ts lives
- Always run `npm install` from the root directory

### Next.js App Setup
- Remove duplicate config files (keep .js not .ts/.mjs versions)
- Each app needs its own .eslintrc.js with `extends: ['next/core-web-vitals']`
- Use simple Tailwind classes, avoid CSS variables like `bg-background`
- Escape apostrophes in JSX with `&apos;`

### Temporary Files
- Use `tmp/` directory for temporary scripts and experiments
- This directory is gitignored and won't be committed
- Clean up tmp files when done

## 🐛 Common Issues & Solutions

1. **npm workspace errors**: These appear in dev but don't break functionality - can be safely ignored
2. **Tailwind plugin errors**: Install @tailwindcss/forms, @tailwindcss/typography, etc. in packages/config
3. **ESLint import errors**: Add .eslintrc.js to each app with proper Next.js config
4. **Port conflicts**: Dev server automatically uses 3001 if 3000 is busy
5. **metadataBase warning**: This is informational only - add metadataBase in layout.tsx for production

## 🔍 Debugging Tips

1. If ESLint fails, check for app-specific .eslintrc.js
2. If Tailwind classes don't work, verify they're standard utilities
3. If build fails, check for unescaped apostrophes in JSX
4. If dependencies fail, try removing node_modules and reinstalling
5. Check logs after changes to catch new errors early
6. Build production bundles to catch compilation issues: `npm run build`

## 🎯 Features

### Current Features
- ✅ Monorepo architecture with Turborepo
- ✅ Shared component library
- ✅ TypeScript configuration
- ✅ Tailwind CSS with shared config
- ✅ ESLint and Prettier setup
- ✅ Basic marketing site template
- ✅ E2E testing with Playwright
- ✅ Visual regression testing
- ✅ Automated test reporting
- ✅ Dynamic copyright year (auto-updates annually)

### Planned Features
- 📅 Contact form system with email notifications
- 📅 Blog/content management system
- 📅 Calendar booking integration
- 📅 Social media cross-posting
- 📅 Analytics dashboard
- 📅 SEO optimization tools
- 📅 A/B testing framework
- 📅 Multi-language support
- 📅 E-commerce integration

## 🚀 Future Considerations

When adding new features:
- Keep the monorepo structure clean
- Ensure new packages follow existing patterns
- Update tests for new functionality
- Document any new shared components
- Consider performance impact of new dependencies
- Follow the established patterns in clarkstontechnology app

## 🔧 Configuration

### Environment Variables

Each app should have its own `.env.local` file:

```env
# Site-specific
NEXT_PUBLIC_SITE_URL=https://www.example.com
NEXT_PUBLIC_SITE_NAME="Site Name"

# Shared services (when implemented)
DATABASE_URL=
RESEND_API_KEY=
NEXT_PUBLIC_GA_ID=
```

### Deployment

The project is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Configure each app as a separate project
3. Set the root directory to `apps/[app-name]`
4. Add environment variables in Vercel dashboard

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Documentation](https://vercel.com/docs)

## 📄 License

This project is private and proprietary. 