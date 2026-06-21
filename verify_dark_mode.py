import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        # Set dark mode
        context = await browser.new_context(color_scheme='dark')
        page = await context.new_page()
        await page.goto('http://localhost:5173')
        await page.wait_for_timeout(2000)

        # Take screenshot of header in dark mode
        await page.screenshot(path='verification/v2/header_dark.png')

        # Hover over 'About'
        await page.hover('text=About')
        await page.wait_for_timeout(500)
        await page.screenshot(path='verification/v2/navbar_hover_dark.png')

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
