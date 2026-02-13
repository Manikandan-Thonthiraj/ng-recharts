import { test, expect } from '@playwright/test';

/**
 * Example app specific E2E tests
 * Tests the example application functionality and UI
 */
test.describe('Example App Tests', () => {
  test('should load the application', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('app-root')).toBeVisible();
  });

  test('should display welcome message on home page', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h2')).toContainText('Welcome to Ng-Recharts Examples');
  });

  test('should display code examples on chart pages', async ({ page }) => {
    await page.goto('/line-chart');
    
    // Check for code example section
    const codeExample = page.locator('h3:has-text("Code Example")');
    await expect(codeExample).toBeVisible();
    
    // Check for code block
    const codeBlock = page.locator('pre code');
    await expect(codeBlock).toBeVisible();
    const codeContent = await codeBlock.textContent();
    expect(codeContent).toContain('NgRechartsLineChartComponent');
  });

  test('should display chart descriptions', async ({ page }) => {
    const routes = [
      { route: '/line-chart', description: 'multiple data series' },
      { route: '/bar-chart', description: 'comparing different categories' },
      { route: '/pie-chart', description: 'showing data distribution' },
      { route: '/area-chart', description: 'cumulative data' },
      { route: '/composed-chart', description: 'combining bars and lines' },
    ];

    for (const { route, description } of routes) {
      await page.goto(route);
      await expect(page.locator('p')).toContainText(description);
    }
  });

  test('should have proper page structure', async ({ page }) => {
    await page.goto('/line-chart');
    
    // Check for main container
    await expect(page.locator('.container')).toBeVisible();
    
    // Check for chart container
    await expect(page.locator('.chart-container')).toBeVisible();
    
    // Check for chart title
    await expect(page.locator('.chart-title')).toBeVisible();
  });

  test('should handle navigation correctly', async ({ page }) => {
    await page.goto('/');
    
    // Click on each navigation link
    const navLinks = await page.locator('nav a').all();
    expect(navLinks.length).toBeGreaterThan(0);
    
    for (const link of navLinks) {
      const text = await link.textContent();
      if (text && text.trim() !== '') {
        await link.click();
        await page.waitForLoadState('networkidle');
        // Verify we're on a valid page
        await expect(page.locator('h1, h2')).toBeVisible();
      }
    }
  });
});
