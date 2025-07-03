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
- **Turborepo** - Monorepo build orchestration
- **TypeScript** - Type safety across all packages

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework
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

### Adding a New Site

1. Create a new app in the `apps/` directory
2. Copy the structure from an existing app (e.g., clarkstontechnology)
3. Update the site configuration in `src/config/site.ts`
4. Customize components and content as needed

### Adding Shared Components

1. Create component in `packages/ui/src/components/`
2. Export from `packages/ui/src/index.ts`
3. Import in any app using `import { ComponentName } from '@marketing/ui'`

### Scripts

- `npm run dev` - Run all apps in development mode
- `npm run build` - Build all apps for production
- `npm run lint` - Lint all code
- `npm run format` - Format code with Prettier
- `npm run clean` - Clean all build artifacts
- `npm test` - Run E2E tests with HTML report
- `npm run test:agent` - Run E2E tests with line reporter (for CI/agents)
- `npm run test:ui` - Run tests in interactive UI mode

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

### Planned Features
- 📅 Contact form system with email notifications
- 📅 Blog/content management system
- 📅 Calendar booking integration
- 📅 Social media cross-posting
- 📅 Analytics dashboard
- 📅 SEO optimization tools
- 📅 A/B testing framework

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