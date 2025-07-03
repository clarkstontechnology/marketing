# Multi-Site Marketing Platform Plan

## Overview
A scalable platform for creating and managing multiple marketing websites with shared features and components, optimized for cost-effectiveness and maintainability.

## Architecture Overview

### Technology Stack
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS + Shadcn/ui
- **Database**: PostgreSQL (Supabase for cost-effectiveness)
- **Hosting**: Vercel
- **CMS**: Headless CMS (Contentful/Sanity) or custom MDX
- **Forms**: React Hook Form + Zod validation
- **Email**: Resend/SendGrid for form submissions
- **Analytics**: Google Analytics 4 + Vercel Analytics
- **SEO**: Next SEO + structured data

### Architecture Pattern: Monorepo Multi-Tenant
```
marketing-platform/
├── apps/
│   ├── clarkstontechnology/    # Fractional CTO site
│   ├── spiritual-direction/     # Spiritual direction site
│   ├── esl-teaching/           # ESL consultation site
│   ├── familee/                # Family presence site
│   └── johnanddinah/           # Personal couple site
├── packages/
│   ├── ui/                     # Shared UI components
│   ├── marketing-components/    # Marketing-specific components
│   ├── forms/                  # Shared form components
│   ├── seo/                    # SEO utilities
│   ├── analytics/              # Analytics wrapper
│   └── config/                 # Shared configurations
└── infrastructure/
    ├── database/               # Shared database schemas
    └── email-templates/        # Email templates
```

## Core Features

### Phase 1: Foundation (Weeks 1-2)
1. **Monorepo Setup**
   - Turborepo for build orchestration
   - Shared ESLint/Prettier configs
   - TypeScript configuration

2. **Shared Component Library**
   - Header/Navigation variants
   - Hero sections
   - Feature sections
   - Testimonials
   - Contact forms
   - Footer variants

3. **SEO Foundation**
   - Meta tags management
   - Sitemap generation
   - Robots.txt
   - Open Graph tags
   - Structured data (JSON-LD)

4. **Form System**
   - Intake form builder
   - Form validation
   - Email notifications
   - Form submissions storage

### Phase 2: Initial Sites (Weeks 3-4)
1. **Clarkston Technology Site**
   - Services showcase
   - Case studies/Portfolio
   - About/Team section
   - Contact form
   - Blog/Articles

2. **Template System**
   - Site configuration files
   - Theme customization
   - Content structure

### Phase 3: Advanced Features (Weeks 5-6)
1. **Calendar Integration**
   - Custom booking system
   - Calendar availability
   - Appointment confirmations
   - Reminders

2. **Social Media Integration**
   - Cross-posting API
   - Social media feeds
   - Share buttons

3. **Analytics Dashboard**
   - Traffic monitoring
   - Form submission tracking
   - Conversion tracking

## Site-Specific Requirements

### Clarkston Technology (www.clarkstontechnology.com)
- **Purpose**: Market fractional CTO and engineering services
- **Key Pages**: Home, Services, About, Case Studies, Blog, Contact
- **Special Features**: 
  - Service calculator/estimator
  - Tech stack showcase
  - Client testimonials
  - Resource downloads

### Spiritual Direction Site
- **Purpose**: Spiritual direction practice marketing
- **Key Pages**: Home, About, Services, Resources, Blog, Contact
- **Special Features**:
  - Session booking
  - Resource library
  - Testimonials
  - Blog/Reflections

### ESL Teaching Consultation
- **Purpose**: ESL teaching consultation services
- **Key Pages**: Home, Services, About, Resources, Contact
- **Special Features**:
  - Service packages
  - Resource downloads
  - Client success stories
  - Assessment tools

### Familee.online
- **Purpose**: Family internet presence and services
- **Key Pages**: Home, Family Members, Services (babysitting), Contact
- **Special Features**:
  - Family member profiles
  - Service availability calendar
  - References/Reviews
  - Photo gallery

### JohnAndDinah.com
- **Purpose**: Personal couple's internet presence
- **Key Pages**: Home, About Us, Blog/Journal, Contact
- **Special Features**:
  - Shared blog/journal
  - Photo memories
  - Life updates

## Technical Implementation Details

### Static Site Generation Strategy
- Use Next.js ISR (Incremental Static Regeneration) for blog posts
- Static generation for marketing pages
- Dynamic routes for user-generated content

### Cost Optimization
- Vercel free tier for initial deployments
- Supabase free tier for database
- Cloudinary free tier for image optimization
- Email service free tiers (Resend: 100/day)

### Shared Features Implementation
1. **Configuration System**
   ```typescript
   interface SiteConfig {
     domain: string
     name: string
     description: string
     theme: ThemeConfig
     features: FeatureFlags
     navigation: NavigationConfig
     forms: FormConfig[]
   }
   ```

2. **Component Composition**
   - Variant-based components
   - Theme injection
   - Feature flags for optional components

3. **Content Management**
   - MDX for static content
   - CMS integration for dynamic content
   - Git-based content workflow

## Development Workflow

1. **Local Development**
   - Single command to run all sites
   - Site-specific development mode
   - Shared component playground

2. **Deployment**
   - Automated deployments via GitHub
   - Preview deployments for PRs
   - Production deployments on merge

3. **Maintenance**
   - Centralized dependency updates
   - Shared security patches
   - Performance monitoring

## Future Enhancements

1. **E-commerce Integration**
   - Service packages
   - Digital downloads
   - Payment processing

2. **Advanced Analytics**
   - Heat mapping
   - A/B testing
   - Conversion optimization

3. **Multi-language Support**
   - Internationalization
   - Content translation

4. **AI Features**
   - Content suggestions
   - SEO optimization
   - Chatbot integration

## Success Metrics

1. **Performance**
   - PageSpeed score > 90
   - Core Web Vitals passing
   - < 3s load time

2. **SEO**
   - Search visibility improvement
   - Organic traffic growth
   - Local SEO rankings

3. **Maintenance**
   - < 2 hours/month maintenance time
   - Automated updates
   - Zero-downtime deployments

## Timeline

- **Week 1-2**: Foundation and shared components
- **Week 3-4**: First two sites launch
- **Week 5-6**: Remaining sites and advanced features
- **Ongoing**: Feature additions and optimizations 