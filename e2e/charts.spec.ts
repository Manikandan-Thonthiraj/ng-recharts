import { test, expect } from '@playwright/test';

/**
 * E2E tests for ng-recharts chart components
 * These tests verify that charts render correctly in the example app
 */
test.describe('Ng-Recharts E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display home page with navigation', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Ng-Recharts Example Application');
    await expect(page.locator('nav a')).toHaveCount(6);
  });

  test.describe('Line Chart', () => {
    test('should navigate to line chart page', async ({ page }) => {
      await page.click('text=Line Chart');
      await expect(page).toHaveURL(/.*line-chart/);
      await expect(page.locator('h2')).toContainText('Line Chart Example');
    });

    test('should render line chart with data', async ({ page }) => {
      await page.goto('/line-chart');
      
      // Wait for chart to render
      await page.waitForSelector('ng-recharts-line-chart', { timeout: 10000 });
      
      // Check if SVG elements are present (Recharts renders SVG)
      const svg = page.locator('svg');
      await expect(svg).toBeVisible({ timeout: 10000 });
      
      // Verify chart container exists
      const chartContainer = page.locator('ng-recharts-line-chart div');
      await expect(chartContainer).toBeVisible();
    });

    test('should display chart title and description', async ({ page }) => {
      await page.goto('/line-chart');
      await expect(page.locator('.chart-title')).toContainText('Monthly Sales Data');
      await expect(page.locator('p')).toContainText('multiple data series');
    });
  });

  test.describe('Bar Chart', () => {
    test('should navigate to bar chart page', async ({ page }) => {
      await page.click('text=Bar Chart');
      await expect(page).toHaveURL(/.*bar-chart/);
      await expect(page.locator('h2')).toContainText('Bar Chart Example');
    });

    test('should render bar chart with data', async ({ page }) => {
      await page.goto('/bar-chart');
      
      await page.waitForSelector('ng-recharts-bar-chart', { timeout: 10000 });
      const svg = page.locator('svg');
      await expect(svg).toBeVisible({ timeout: 10000 });
    });

    test('should display bar chart title', async ({ page }) => {
      await page.goto('/bar-chart');
      await expect(page.locator('.chart-title')).toContainText('Product Sales by Category');
    });
  });

  test.describe('Pie Chart', () => {
    test('should navigate to pie chart page', async ({ page }) => {
      await page.click('text=Pie Chart');
      await expect(page).toHaveURL(/.*pie-chart/);
      await expect(page.locator('h2')).toContainText('Pie Chart Example');
    });

    test('should render pie chart with data', async ({ page }) => {
      await page.goto('/pie-chart');
      
      await page.waitForSelector('ng-recharts-pie-chart', { timeout: 10000 });
      const svg = page.locator('svg');
      await expect(svg).toBeVisible({ timeout: 10000 });
    });

    test('should display pie chart title', async ({ page }) => {
      await page.goto('/pie-chart');
      await expect(page.locator('.chart-title')).toContainText('Market Share Distribution');
    });
  });

  test.describe('Area Chart', () => {
    test('should navigate to area chart page', async ({ page }) => {
      await page.click('text=Area Chart');
      await expect(page).toHaveURL(/.*area-chart/);
      await expect(page.locator('h2')).toContainText('Area Chart Example');
    });

    test('should render area chart with data', async ({ page }) => {
      await page.goto('/area-chart');
      
      await page.waitForSelector('ng-recharts-area-chart', { timeout: 10000 });
      const svg = page.locator('svg');
      await expect(svg).toBeVisible({ timeout: 10000 });
    });

    test('should display area chart title', async ({ page }) => {
      await page.goto('/area-chart');
      await expect(page.locator('.chart-title')).toContainText('Website Traffic Over Time');
    });
  });

  test.describe('Composed Chart', () => {
    test('should navigate to composed chart page', async ({ page }) => {
      await page.click('text=Composed Chart');
      await expect(page).toHaveURL(/.*composed-chart/);
      await expect(page.locator('h2')).toContainText('Composed Chart Example');
    });

    test('should render composed chart with data', async ({ page }) => {
      await page.goto('/composed-chart');
      
      await page.waitForSelector('ng-recharts-composed-chart', { timeout: 10000 });
      const svg = page.locator('svg');
      await expect(svg).toBeVisible({ timeout: 10000 });
    });

    test('should display composed chart title', async ({ page }) => {
      await page.goto('/composed-chart');
      await expect(page.locator('.chart-title')).toContainText('Sales and Revenue Comparison');
    });
  });

  test.describe('Navigation', () => {
    test('should navigate between all chart pages', async ({ page }) => {
      const routes = [
        { link: 'Home', url: '/' },
        { link: 'Line Chart', url: '/line-chart' },
        { link: 'Bar Chart', url: '/bar-chart' },
        { link: 'Pie Chart', url: '/pie-chart' },
        { link: 'Area Chart', url: '/area-chart' },
        { link: 'Composed Chart', url: '/composed-chart' },
      ];

      for (const route of routes) {
        await page.click(`text=${route.link}`);
        await expect(page).toHaveURL(new RegExp(route.url.replace('/', '\\/') + '.*'));
        await expect(page.locator('h1, h2')).toBeVisible();
      }
    });

    test('should highlight active navigation link', async ({ page }) => {
      await page.goto('/line-chart');
      const activeLink = page.locator('nav a.active');
      await expect(activeLink).toContainText('Line Chart');
    });
  });

  test.describe('Chart Rendering', () => {
    test('all charts should render SVG elements', async ({ page }) => {
      const chartRoutes = [
        '/line-chart',
        '/bar-chart',
        '/pie-chart',
        '/area-chart',
        '/composed-chart',
      ];

      for (const route of chartRoutes) {
        await page.goto(route);
        await page.waitForSelector('svg', { timeout: 10000 });
        const svg = page.locator('svg');
        await expect(svg).toBeVisible();
        
        // Verify SVG has content (width/height attributes or children)
        const svgElement = await svg.first();
        const width = await svgElement.getAttribute('width');
        const height = await svgElement.getAttribute('height');
        expect(width).toBeTruthy();
        expect(height).toBeTruthy();
      }
    });

    test('charts should be responsive and visible', async ({ page }) => {
      await page.goto('/line-chart');
      await page.waitForSelector('svg', { timeout: 10000 });
      
      const chartContainer = page.locator('.chart-container');
      await expect(chartContainer).toBeVisible();
      
      const boundingBox = await chartContainer.boundingBox();
      expect(boundingBox?.width).toBeGreaterThan(0);
      expect(boundingBox?.height).toBeGreaterThan(0);
    });
  });
});
