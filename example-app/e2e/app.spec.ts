import { test, expect } from '@playwright/test';

/**
 * E2E tests for the example application
 */
test.describe('Example App E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the application title', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Ng-Recharts Example Application');
  });

  test('should have navigation menu', async ({ page }) => {
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    
    const navLinks = nav.locator('a');
    await expect(navLinks).toHaveCount(6);
  });

  test.describe('Chart Pages', () => {
    const chartTests = [
      {
        name: 'Line Chart',
        route: '/line-chart',
        title: 'Line Chart Example',
        chartSelector: 'ng-recharts-line-chart'
      },
      {
        name: 'Bar Chart',
        route: '/bar-chart',
        title: 'Bar Chart Example',
        chartSelector: 'ng-recharts-bar-chart'
      },
      {
        name: 'Pie Chart',
        route: '/pie-chart',
        title: 'Pie Chart Example',
        chartSelector: 'ng-recharts-pie-chart'
      },
      {
        name: 'Area Chart',
        route: '/area-chart',
        title: 'Area Chart Example',
        chartSelector: 'ng-recharts-area-chart'
      },
      {
        name: 'Composed Chart',
        route: '/composed-chart',
        title: 'Composed Chart Example',
        chartSelector: 'ng-recharts-composed-chart'
      }
    ];

    for (const chartTest of chartTests) {
      test(`should display ${chartTest.name} page correctly`, async ({ page }) => {
        await page.goto(chartTest.route);
        
        // Check page title
        await expect(page.locator('h2')).toContainText(chartTest.title);
        
        // Check chart component exists
        await expect(page.locator(chartTest.chartSelector)).toBeVisible({ timeout: 10000 });
        
        // Check SVG is rendered
        await page.waitForSelector('svg', { timeout: 10000 });
        const svg = page.locator('svg');
        await expect(svg).toBeVisible();
      });

      test(`${chartTest.name} should render chart SVG`, async ({ page }) => {
        await page.goto(chartTest.route);
        
        await page.waitForSelector('svg', { timeout: 15000 });
        
        const svg = page.locator('svg').first();
        await expect(svg).toBeVisible();
        
        // Verify SVG has dimensions
        const width = await svg.getAttribute('width');
        const height = await svg.getAttribute('height');
        expect(width).toBeTruthy();
        expect(height).toBeTruthy();
      });
    }
  });

  test('should navigate between pages using navigation menu', async ({ page }) => {
    const routes = ['/', '/line-chart', '/bar-chart', '/pie-chart', '/area-chart', '/composed-chart'];
    
    for (const route of routes) {
      if (route === '/') {
        await page.click('nav a:has-text("Home")');
      } else {
        const routeName = route.replace('/', '').replace('-', ' ');
        await page.click(`nav a:has-text("${routeName}")`);
      }
      
      await page.waitForLoadState('networkidle');
      await expect(page).toHaveURL(new RegExp(route === '/' ? '^http://localhost:4200/?$' : route));
    }
  });

  test('should display code examples on chart pages', async ({ page }) => {
    await page.goto('/line-chart');
    
    const codeSection = page.locator('h3:has-text("Code Example")');
    await expect(codeSection).toBeVisible();
    
    const codeBlock = page.locator('pre code');
    await expect(codeBlock).toBeVisible();
    
    const codeText = await codeBlock.textContent();
    expect(codeText).toBeTruthy();
    expect(codeText?.length).toBeGreaterThan(0);
  });

  test('should have responsive layout', async ({ page }) => {
    await page.goto('/line-chart');
    
    // Test desktop view
    await page.setViewportSize({ width: 1920, height: 1080 });
    const container = page.locator('.container');
    await expect(container).toBeVisible();
    
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(container).toBeVisible();
    
    // Charts should still render
    await page.waitForSelector('svg', { timeout: 10000 });
    const svg = page.locator('svg');
    await expect(svg).toBeVisible();
  });
});
