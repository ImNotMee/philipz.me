const axios = require('axios');
const cheerio = require('cheerio');

async function getHTML(url) {
    const {data: html} = await axios.get(url);
    return html;
}

async function getPictures() {
    const html = await getHTML("https://www.instagram.com/_philzpng_/");
    var pictures = [];
    const $ = cheerio.load(html);
    const data = $('script[type="text/javascript"]').get(3).children[0].data.substring(21).slice(0, -1);
    const { entry_data: jsonData } = JSON.parse(data);
    const edges = { count: jsonData.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.count, data: jsonData.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges };
    //console.log(`Scrapped  ${edges.count} images`);

    edges.data.forEach(element => {
        pictures.push({ timestamp: element.node.taken_at_timestamp, display_url: element.node.display_url, likes: element.node.edge_liked_by.count, text:element.node.edge_media_to_caption.edges[0].node.text });
    });
    return pictures;
}

async function getFollowers() {
  const html = await getHTML("https://www.instagram.com/_philzpng_/");
  const $ = cheerio.load(html);
  const str = $('script[type="application/ld+json"]').html();
  const pgObj = JSON.parse(str);
  return parseInt(
    pgObj.mainEntityofPage.interactionStatistic.userInteractionCount
  );
}

export function test() {
  return getPictures();
}
