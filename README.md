
## singlish to sinhala Translation assigment using playwright 

# IT23322912 - Playwright Test Suite

This is a Playwright automation testing project that contains comprehensive test cases for web applications.

## Project Overview

This project uses **Playwright**, a modern browser automation framework, to run automated tests across multiple browsers. The test suite includes various test scenarios for functional testing and quality assurance.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 14 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** (comes bundled with Node.js)
- **Git** (optional, for cloning the repository) - [Download Git](https://git-scm.com/)








## Installation
### 1. Clone or Navigate to the Project Directory
#### Option A: Clone from Git Repository (Recommended)


```bash
git clone <your-repository-url> //  link include inside the IT23322912.txt file.
cd IT23322912
```

Replace `<your-repository-url>` with your actual GitHub repository URL.

```bash
git clone https://github.com/VirajKosala/IT23322912-ITPM-Assignment-1.git
cd IT23322912-ITPM-Assignment-1
```

#### Option B: Navigate to Existing Project Directory

If you already have the project on your local machine, simply navigate to the project directory:

```bash
cd IT23322912-ITPM-Assignment-1
```




### 2. Install Dependencies

Install all required dependencies using npm:

```bash
npm install
```

This will install:
- `@playwright/test` - The Playwright testing framework
- `@types/node` - TypeScript type definitions for Node.js

-install Playwright Test as a dev dependency
```bash
npm install -D @playwright/test
```
download Chromium, Firefox and WebKit browser binaries
```bash
npx playwright install
```


## Running the Tests
To run all tests in the project:

```bash
npx playwright test
```

### View Test Results

After running tests, view the HTML test report:

```bash
npx playwright show-report
```

This will open an interactive HTML report showing test results, timings, and trace information.









### Run Tests in a Specific Browser
Run tests only in Chromium:
```bash
npx playwright test --project=chromium
```

### Run Tests in Debug Mode
To run tests with the Playwright Inspector for debugging:

```bash
npx playwright test --debug
```

### Run a Specific Test File
To run tests from a specific file:

```bash
npx playwright test tests/example.spec.ts
```

### Run Tests Matching a Pattern

To run tests that match a specific pattern:

```bash
npx playwright test --grep "Pos_Fun_01"
```


## Project Structure

```
IT23322912/
├── tests/                    # Test files
│   └── example.spec.ts       # Test specifications
├── playwright-report/        # Generated test reports
├── test-results/             # Test result artifacts
├── playwright.config.ts      # Playwright configuration
├── package.json              # Project dependencies
└── package-lock.json         # Dependency lock file
```





## Configuration

The project is configured in `playwright.config.ts`. Key settings include:

- **Test Directory**: `./tests`
- **Parallel Execution**: Enabled (tests run in parallel)
- **Browsers**: Chromium (additional browsers can be configured)
- **Reporter**: HTML report generation
- **Retries**: 2 retries on CI environment, 0 on local

## Test Scenarios

The test suite includes functional tests for the Swift Translator application, covering:

- Simple sentence translation
- Compound sentence translation
- Cause and effect sentences
- Daily conversation scenarios
- And more...






## Advanced Usage
### Run Tests with Specific Workers

Control the number of parallel workers:

```bash
npx playwright test --workers=4
```

### Generate Trace Files for Failed Tests
Trace files are automatically generated for failed test retries. View them with:

```bash
npx playwright show-trace trace.zip
```




### Run Tests in Headed Mode
Run tests in headed mode (shows browser UI):

```bash
npx playwright test --headed
```



## Troubleshooting
### Issues Installing Dependencies

If you encounter issues during `npm install`, try:

```bash
npm cache clean --force
npm install
```

### Browsers Not Installing
If Playwright browsers aren't installed, run:

```bash
npx playwright install
```

### Port Already in Use
If you get a "port already in use" error, ensure no other applications are using the required ports.

