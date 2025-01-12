const puppeteer = require('puppeteer');

async function scrapeInstagramPosts(username) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://www.instagram.com/_philzpng_/`);

    // Scroll down to load more posts
    let previousHeight;
    while (true) {
        previousHeight = await page.evaluate('document.body.scrollHeight');
        await page.evaluate('window.scrollTo(0, document.body.scrollHeight)');
        await new Promise(resolve => setTimeout(resolve, 2000)); // wait for 2 seconds
        let currentHeight = await page.evaluate('document.body.scrollHeight');
        if (currentHeight === previousHeight) break;
    }

    // Extract post data
    const posts = await page.evaluate(() => {
        let postElements = document.querySelectorAll('article div div div div a');
        let posts = [];
        postElements.forEach(postElement => {
            let imageUrl = postElement.querySelector('img').src;
            let caption = postElement.querySelector('img').alt;
            posts.push({
                imageUrl: imageUrl,
                caption: caption
            });
        });
        return posts;
    });

    console.log(posts);

    await browser.close();
}

module.exports = { scrapeInstagramPosts };
//scrapeInstagramPosts('_philzpng_');
