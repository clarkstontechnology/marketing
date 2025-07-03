import { test, expect } from '@playwright/test';

test.describe('Clarkston Technology Website', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('homepage loads successfully with all key elements', async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/Clarkston Technology/);

    // Check main heading
    const heading = page.locator('h1');
    await expect(heading).toContainText('We deliver high value software solutions for your business needs');

    // Check navigation is visible
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();

    // Check navigation links
    const navLinks = ['Home', 'Services', 'About', 'Case Studies', 'Blog', 'Contact'];
    for (const linkText of navLinks) {
      await expect(page.locator(`nav >> text=${linkText}`)).toBeVisible();
    }

    // Check hero section buttons
    await expect(page.locator('text=Get Started')).toBeVisible();
    await expect(page.locator('text=View Services')).toBeVisible();

    // Check services section
    await expect(page.locator('h2:has-text("Services")')).toBeVisible();
    const serviceCards = page.locator('.grid > div');
    await expect(serviceCards).toHaveCount(4);

    // Check CTA section
    await expect(page.locator('text=Ready to Transform Your Technology?')).toBeVisible();
    
    // Check footer
    await expect(page.locator('footer')).toBeVisible();
  });

  test('navigation works correctly', async ({ page }) => {
    // Click on Contact link
    await page.click('nav >> text=Contact');
    await expect(page).toHaveURL(/\/contact$/);
    
    // Check contact page loaded
    await expect(page.locator('h1:has-text("Get in Touch")')).toBeVisible();

    // Navigate back to home
    await page.click('nav >> text=Home');
    await expect(page).toHaveURL(/localhost:3000\/?$/);
  });

  test('contact form has proper validation', async ({ page }) => {
    await page.goto('http://localhost:3000/contact');

    // Try to submit empty form
    await page.click('button[type="submit"]');

    // Check validation messages appear
    await expect(page.locator('text=Name must be at least 2 characters')).toBeVisible();
    await expect(page.locator('text=Invalid email address')).toBeVisible();
    await expect(page.locator('text=Message must be at least 10 characters')).toBeVisible();

    // Fill in valid data
    await page.fill('input[name="name"]', 'John Doe');
    await page.fill('input[name="email"]', 'john@example.com');
    await page.fill('input[name="company"]', 'Test Company');
    await page.fill('textarea[name="message"]', 'This is a test message for the contact form.');

    // Submit button should be enabled
    const submitButton = page.locator('button[type="submit"]');
    await expect(submitButton).toBeEnabled();
  });

  test('responsive design works correctly', async ({ page }) => {
    // Desktop view
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(page.locator('nav')).toBeVisible();

    // Tablet view
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.locator('h1')).toBeVisible();

    // Mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('h1')).toBeVisible();
    
    // Content should still be accessible
    await expect(page.locator('text=Get Started')).toBeVisible();
  });

  test('all links have proper hrefs', async ({ page }) => {
    const links = await page.locator('a').all();
    
    for (const link of links) {
      const href = await link.getAttribute('href');
      const text = await link.textContent();
      
      // Check that href exists and is not empty
      expect(href).toBeTruthy();
      
      // Log for debugging
      console.log(`Link "${text?.trim()}" points to: ${href}`);
    }
  });

  test('page performance metrics', async ({ page }) => {
    const performanceTiming = JSON.parse(
      await page.evaluate(() => JSON.stringify(window.performance.timing))
    );
    
    const loadTime = performanceTiming.loadEventEnd - performanceTiming.navigationStart;
    console.log(`Page load time: ${loadTime}ms`);
    
    // Page should load within 3 seconds
    expect(loadTime).toBeLessThan(3000);
  });
});

test.describe('Visual Regression Tests', () => {
  test('capture homepage screenshots', async ({ page }) => {
    await page.goto('http://localhost:3000');
    
    // Full page screenshot
    await expect(page).toHaveScreenshot('homepage-full.png', { 
      fullPage: true,
      animations: 'disabled'
    });

    // Above the fold screenshot
    await expect(page).toHaveScreenshot('homepage-hero.png', {
      clip: { x: 0, y: 0, width: 1920, height: 800 }
    });
  });

  test('capture contact page screenshot', async ({ page }) => {
    await page.goto('http://localhost:3000/contact');
    
    await expect(page).toHaveScreenshot('contact-page.png', { 
      fullPage: true,
      animations: 'disabled'
    });
  });

  test('capture mobile views', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    
    await page.goto('http://localhost:3000');
    await expect(page).toHaveScreenshot('homepage-mobile.png', { 
      fullPage: true,
      animations: 'disabled'
    });

    await page.goto('http://localhost:3000/contact');
    await expect(page).toHaveScreenshot('contact-mobile.png', { 
      fullPage: true,
      animations: 'disabled'
    });
  });
}); 