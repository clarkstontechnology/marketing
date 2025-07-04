import Link from 'next/link';
import { Button } from '@marketing/ui';
import { siteConfig } from '@/config/site';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">{siteConfig.name}</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              {siteConfig.mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-gray-900 text-gray-600"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            {siteConfig.tagline}
          </h1>
          <p className="text-lg text-gray-600">
            Fractional CTO & Engineering Leadership • Est. {siteConfig.founded} • {siteConfig.location}
          </p>
          <p className="max-w-[42rem] leading-normal text-gray-600 sm:text-xl sm:leading-8">
            Whether you&apos;re launching a startup, scaling a business, or advancing your engineering career, 
            we provide the strategic guidance and technical expertise to help you succeed.
          </p>
          <div className="space-x-4">
            <Button size="lg" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-display text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Services
          </h2>
          <p className="max-w-[85%] leading-normal text-gray-600 sm:text-lg sm:leading-7">
            Comprehensive technology leadership and development services tailored to your needs.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-8 md:max-w-[64rem] md:grid-cols-3">
          {siteConfig.serviceCategories.map((category) => (
            <div
              key={category.category}
              className="relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-bold text-lg">{category.category}</h3>
                  <p className="text-sm text-gray-600">
                    {category.description}
                  </p>
                </div>
                <ul className="space-y-1">
                  {category.services.map((service) => (
                    <li key={service.title} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-sm text-gray-700">{service.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-display text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
                          Ready to Transform Your Technology?
            </h2>
            <p className="max-w-[85%] leading-normal text-gray-600 sm:text-lg sm:leading-7">
              Let&apos;s discuss how I can help accelerate your technology initiatives and build a world-class engineering team.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-600 md:text-left">
            © {new Date().getFullYear()} {siteConfig.name}, LLC. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              GitHub
            </a>
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="text-gray-600 hover:text-gray-900"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
