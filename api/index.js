import matter from 'gray-matter'

export function formatDate(date) {
    var splitDate = date.split('-');
    var month = splitDate[1] - 1; //Javascript months are 0-11

    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const today = new Date(splitDate[2], month, splitDate[0]);

    return today.toLocaleDateString("en-US", options);
}

export async function getPosts() {
    const context = require.context('../posts', false, /\.md$/)
    const posts = []
    for (const key of context.keys()) {
        const post = key.slice(2);
        const content = await import(`../posts/${post}`);
        const meta = matter(content.default)
        posts.push({
            slug: post.replace('.md',''),
            title: meta.data.title,
            date: meta.data.date,
        })
    }
    return posts;
}

export async function getPostBySlug(slug){
    const fileContent = await import(`../posts/${slug}.md`)
    const meta = matter(fileContent.default)
    const post = meta.data
    const content = meta.content
    return {
        title: post.title,
        date: post.date,
        content: content
    }
}
