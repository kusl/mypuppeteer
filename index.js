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

  await page.goto('https://slickdeals.net/', {"waitUntil" : "networkidle0"})
  await page.screenshot({
      path: 'slickdeals-frontpage.png',
      fullPage: true
  })

  await page.goto('https://slickdeals.net/deals/', {"waitUntil" : "networkidle0"})
  await page.screenshot({
      path: 'slickdeals-new.png',
      fullPage: true
  })

  await page.goto('https://news.ycombinator.com/newest', {"waitUntil" : "networkidle0"})
  await page.screenshot({
      path: 'hackernews-new.png',
      fullPage: true
  })

  await page.goto('https://old.reddit.com/user/7165015874/m/buy/new/', {"waitUntil" : "networkidle0"})
  await page.screenshot({
      path: 'reddit-hardwareswap-new.png',
      fullPage: true
  })

  await page.goto('https://www.amazon.com/gp/goldbox', {"waitUntil" : "networkidle0"})
  await page.screenshot({
      path: 'amazon-goldbox.png',
      fullPage: true
  })

  await page.goto('https://www.amazon.com/best-sellers-camera-photo/zgbs/photo/', {"waitUntil" : "networkidle0"})
  await page.screenshot({
      path: 'amazon-bestsellers-camera.png',
      fullPage: true
  })

  await page.goto('https://www.amazon.com/Best-Sellers-Electronics/zgbs/electronics/', {"waitUntil" : "networkidle0"})
  await page.screenshot({
      path: 'amazon-bestsellers-electronics.png',
      fullPage: true
  })

  await page.goto('https://www.nytimes.com/', {"waitUntil" : "networkidle2"})
  await page.screenshot({
      path: 'nytimes-home.png',
      fullPage: true
  })
  
  await page.goto('https://www.washingtonpost.com/', {"waitUntil" : "networkidle2"})
  await page.screenshot({
      path: 'washingtonpost-home.png',
      fullPage: true
  })

  await page.goto('https://old.reddit.com/r/random/', {"waitUntil" : "networkidle0"})
  await page.screenshot({
      path: 'reddit-random.png',
      fullPage: true
  })
  
  await page.goto('https://www.aliexpress.com/item/4001328159542.html', {"waitUntil" : "networkidle0"})
  await page.screenshot({
      path: 'poco-x3.png',
      fullPage: true
  })

  // close the browser 
  await browser.close();
};

// run the async function
run();
