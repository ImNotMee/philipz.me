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
    console.log(`Scrapped  ${edges.count} images`);

    edges.data.forEach(element => {
            pictures.push({"display_url": element.node.display_url, "timestamp": String(element.node.taken_at_timestamp)});
    });
    return pictures;
}

async function getFollowers() {
  const html = await getHTML("https://www.instagram.com/philz.png/");
  const $ = cheerio.load(html);
  const str = $('script[type="application/ld+json"]').html();
  const pgObj = JSON.parse(str);
  return parseInt(
    //pgObj.mainEntityofPage.interactionStatistic.userInteractionCount
  );
}

export function test() {
  return getPictures();
}
