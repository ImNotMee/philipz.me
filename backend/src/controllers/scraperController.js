const { scrapeInstagramPosts } = require('../services/scraper');

const getPosts = async (req, res) => {
    const username = req.query.username;

    if (!username) {
        return res.status(400).json({ error: 'Username query parameter is required' });
    }

    try {
        const posts = await scrapeInstagramPosts(username);
        res.json(posts);
    } catch (error) {
        console.error('Error scraping Instagram posts:', error);
        res.status(500).json({ error: 'Failed to scrape Instagram posts' });
    }
};

module.exports = { getPosts };
