import asyncio
from playwright.async_api import async_playwright
import os

async def verify_ui():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context(viewport={'width': 1280, 'height': 800})
        page = await context.new_page()

        # Go to home page
        await page.goto('http://localhost:5173/')
        await page.wait_for_timeout(2000) # Wait for animations

        # Ensure output directory exists
        os.makedirs('verification/v2', exist_ok=True)

        # 1. Header and Hero (Active Home)
        await page.screenshot(path='verification/v2/header_home.png')

        # 2. Hover over 'About' in Navbar (Magnify effect)
        await page.hover('nav a[href="#about"]')
        await page.wait_for_timeout(500)
        await page.screenshot(path='verification/v2/navbar_hover.png')

        # 3. Scroll to Services and check sticky marquee
        await page.goto('http://localhost:5173/#services')
        await page.wait_for_timeout(1000)
        await page.screenshot(path='verification/v2/sticky_marquee.png')

        # 4. Check Section pattern and glass cards
        await page.screenshot(path='verification/v2/services_glass.png')

        # 5. Mobile view
        mobile_context = await browser.new_context(viewport={'width': 375, 'height': 812}, is_mobile=True)
        mobile_page = await mobile_context.new_page()
        await mobile_page.goto('http://localhost:5173/')
        await mobile_page.wait_for_timeout(2000)
        await mobile_page.screenshot(path='verification/v2/mobile_home.png')

        await browser.close()

if __name__ == '__main__':
    asyncio.run(verify_ui())
