# Marketing Platform Tests

This directory contains automated tests for the marketing platform sites.

## E2E Tests (Playwright)

End-to-end tests are located in the `e2e/` directory and use Playwright for browser automation.

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

# Update visual regression snapshots
npx playwright test --update-snapshots

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

### Writing New Tests

1. Create a new `.spec.ts` file in the `e2e/` directory
2. Import Playwright test utilities:
   ```typescript
   import { test, expect } from '@playwright/test';
   ```
3. Write your tests using the Playwright API
4. Run tests to ensure they pass

### Visual Regression Testing

The tests include visual regression checks that compare screenshots against baseline images:

- First run creates baseline images in `tests/e2e/*.spec.ts-snapshots/`
- Subsequent runs compare against these baselines
- To update baselines: `npx playwright test --update-snapshots`

### CI/CD Integration

Tests are configured to run in CI with:
- Retries on failure
- Parallel execution disabled
- Artifacts saved on failure

### Debugging

- Use `--debug` flag to step through tests
- Use `--ui` mode for interactive debugging
- Check `test-results/` for failure artifacts
- Videos and traces are saved on failure

## Best Practices

1. **Test Independence**: Each test should be able to run independently
2. **Descriptive Names**: Use clear, descriptive test names
3. **Page Object Model**: Consider using POM for complex sites
4. **Data Cleanup**: Clean up test data after tests
5. **Explicit Waits**: Use Playwright's built-in waiting mechanisms

## Troubleshooting

### Port Already in Use
If you get a "port already in use" error, the dev server is likely already running. The tests will reuse the existing server.

### Visual Regression Failures
If visual tests fail due to minor differences:
1. Review the diff in the HTML report
2. If changes are intentional, update snapshots
3. Consider using `threshold` option for minor pixel differences

### Timeout Issues
Increase timeouts in `playwright.config.ts` if needed:
```typescript
use: {
  timeout: 60000, // 60 seconds
}
``` 