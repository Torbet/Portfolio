const fs = require("fs");
const RSS = require("rss");

const matter =  require('gray-matter')

function getPosts() {
    var posts = []
    let filenames = fs.readdirSync("posts"); 
      
    filenames.forEach((file) => { 
        const str = fs.readFileSync(`posts/${file}`, 'utf8'); 
        const meta = matter(str);
        posts.push({
            slug: file.replace('.md',''),
            title: meta.data.title,
            date: meta.data.date,
            description: meta.data.description,
        })
    }); 
    return(posts)
}





function generate() {
    const previewItems = getPosts('posts');
    const feed = new RSS({
      title: "Guy Torbet ~ Posts",
      site_url: "https://torbet.co/",
      feed_url: "https://torbet.co//feed.xml",
    });
  
    previewItems.map((post) => {
      feed.item({
        title: post.title,
        guid: post.slug,
        url: `https://torbet.co/posts/${post.slug}`,
        date: post.date,
        description: post.description,
      });
    });
  
    const rss = feed.xml({ indent: true });
    fs.writeFileSync("./public/feed.xml", rss);
  }
  
  generate();