# Marketing Platform Tests

This directory contains automated tests for the marketing platform sites.

## E2E Tests (Playwright)

End-to-end tests are located in the `e2e/` directory and use Playwright for browser automation. **The test suite focuses on functional testing** to ensure all features work correctly across different browsers and devices.

### Reporter Configuration

The test suite uses different reporters based on the execution context:

- **Manual runs** (`npm test`): Uses HTML reporter + list reporter for interactive results
- **Agent/CI runs** (`npm run test:agent` or `CI=true`): Uses line reporter only for clean output

This ensures agents get simple, parseable output while developers get rich HTML reports.

### Running Tests

```bash
# Run all tests (with HTML report for manual runs)
npm test

# Run tests in agent mode (line reporter only)
npm run test:agent

# Run tests with UI mode (interactive)
npm run test:ui

# Run tests in headed mode (see browser)
npm run test:headed

# Run specific test file
npx playwright test tests/e2e/clarkston-technology.spec.ts

# Run tests for specific project/browser
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit

# For agents/CI (uses line reporter)
AGENT_RUN=true npx playwright test
```

### Viewing Test Results

```bash
# Open HTML report
npm run test:report

# Reports are also available in:
# - playwright-report/ (HTML report)
# - test-results/ (artifacts, videos, traces)
```

### Test Structure

```
tests/
├── e2e/
│   ├── clarkston-technology.spec.ts    # Tests for Clarkston Technology site
│   └── [future-site].spec.ts           # Tests for other sites
└── README.md
```

## Test Coverage

The E2E tests cover these functional areas:

### Core Functionality
- **Homepage Loading**: Verifies all key elements load correctly
- **Navigation**: Tests site navigation across different pages
- **Contact Form**: Validates form submission and error handling
- **Responsive Design**: Ensures proper behavior across screen sizes
- **Link Validation**: Checks all links have proper hrefs

### Performance & Quality
- **Page Performance**: Measures and validates load times
- **Accessibility**: Basic accessibility checks (headings, alt text)
- **SEO**: Validates meta descriptions and proper markup
- **Error Handling**: Tests user feedback and error states

### Writing New Tests

1. Create a new `.spec.ts` file in the `e2e/` directory
2. Import Playwright test utilities:
   ```typescript
   import { test, expect } from '@playwright/test';
   ```
3. Focus on **functional behavior** rather than visual appearance
4. Write tests that verify:
   - User interactions work correctly
   - Forms validate and submit properly
   - Navigation functions as expected
   - Content loads and displays
   - Error states are handled

### CI/CD Integration

Tests are configured to run in CI with:
- Retries on failure
- Parallel execution across browsers
- Artifacts saved on failure
- Fast feedback for development teams

### Debugging

- Use `--debug` flag to step through tests
- Use `--ui` mode for interactive debugging
- Check `test-results/` for failure artifacts
- Videos and traces are saved on failure

## Best Practices

1. **Test Independence**: Each test should be able to run independently
2. **Descriptive Names**: Use clear, descriptive test names
3. **Functional Focus**: Test behavior, not appearance
4. **Cross-Browser**: Ensure tests work across all supported browsers
5. **Mobile-Friendly**: Handle mobile layout considerations
6. **Explicit Waits**: Use Playwright's built-in waiting mechanisms
7. **Error Testing**: Include negative test cases

## Troubleshooting

### Port Already in Use
If you get a "port already in use" error, the dev server is likely already running. The tests will reuse the existing server.

### Mobile Navigation Issues
Mobile tests use direct navigation for some interactions to avoid layout-specific click interception issues.

### Timeout Issues
Increase timeouts in `playwright.config.ts` if needed:
```typescript
use: {
  timeout: 60000, // 60 seconds
}
```

## Test Philosophy

This test suite prioritizes:
- **Functional correctness** over visual perfection
- **User experience** validation
- **Cross-browser compatibility**
- **Performance monitoring**
- **Accessibility compliance**

By focusing on functional testing, we ensure the sites work reliably for users while maintaining a maintainable test suite that doesn't break due to minor visual changes. 