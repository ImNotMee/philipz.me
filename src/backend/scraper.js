const axios = require('axios');
const cheerio = require('cheerio');

async function getHTML(url) {
    const {data: html} = await axios.get(url);
    return html;
}

async function getPictures() {
    var pictures = [];
    // Gets the full html
    const html = await getHTML("https://www.instagram.com/_philzpng_/");
    const $ = cheerio.load(html);
    // Scrape the html and only take the part which contains all the data needed
    const data = $('script[type="text/javascript"]').get(3).children[0].data.substring(21).slice(0, -1);
    const { entry_data: jsonData } = JSON.parse(data);
    const edges = { count: jsonData.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.count, data: jsonData.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges };
    //console.log(`Scrapped  ${edges.count} images`);

    // Set up the list of jsons per image
    edges.data.forEach(element => {
        var t = cleanText(element.node.edge_media_to_caption.edges[0].node.text);
        pictures.push({ timestamp: element.node.taken_at_timestamp, display_url: element.node.display_url, likes: element.node.edge_liked_by.count, text:t });
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

function cleanText(text) {
  // Striping the ' or ,
  var t = text.replace(/'/g,"").replace(/,/g,'');
  // striping the new lines and hashtags
  t = t.replace(/\n/g,"").replace(/\#\w\w+\s?/g, "");
  return t;
}

export function pictures() {
  return getPictures();
}

export function followers() {
  return getFollowers();
}
