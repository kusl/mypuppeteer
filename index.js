const puppeteer = require("puppeteer");

// we're using async/await - so we need an async function, that we can run
const run = async () => {
  // open the browser and prepare a page
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  // set the size of the viewport, so our screenshot will have the desired size
  await page.setViewport({
      width: 1920,
      height: 1080
  })

  await page.goto('https://slickdeals.net/')
  await page.screenshot({
      path: 'slickdeals-frontpage.png',
      fullPage: true
  })

  await page.goto('https://slickdeals.net/deals/')
  await page.screenshot({
      path: 'slickdeals-new.png',
      fullPage: true
  })

  await page.goto('https://news.ycombinator.com/newest')
  await page.screenshot({
      path: 'hackernews-new.png',
      fullPage: true
  })


  await page.goto('https://old.reddit.com/user/7165015874/m/buy/new/')
  await page.screenshot({
      path: 'reddit-hardwareswap-new.png',
      fullPage: true
  })

  await page.goto('https://www.amazon.com/gp/goldbox')
  await page.screenshot({
      path: 'amazon-goldbox.png',
      fullPage: true
  })

  await page.goto('https://www.amazon.com/best-sellers-camera-photo/zgbs/photo/')
  await page.screenshot({
      path: 'amazon-bestsellers-camera.png',
      fullPage: true
  })

  await page.goto('https://www.amazon.com/Best-Sellers-Electronics/zgbs/electronics/')
  await page.screenshot({
      path: 'amazon-bestsellers-electronics.png',
      fullPage: true
  })

  // close the browser 
  await browser.close();
};

// run the async function
run();
