Inside that directory, you can run several commands:

  npx playwright test
    Runs the end-to-end tests.

  npx playwright test --headed
    to run the tests in headed mode

  npx playwright test --ui
    Starts the interactive UI mode.(headless)

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test example(file_name) /// npx playwright test first_test.spec.ts second_test.spec.ts
    Runs the tests in a specific file.

  npx playwright test -g  // npx playwright test -g "verify"
   Runs the tests with matching in test name.
  
  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.

We suggest that you begin by typing:

    npx playwright test

And check out the following files:
  - ./tests/example.spec.ts - Example end-to-end test
  - ./playwright.config.ts - Playwright Test configuration