import Head from "next/head";
const site = "https://torbet.co/"
const siteTitle = "Guy Torbet"

function strip(html) {
  var one = html.replace(/<\/?[^>]+(>|$)/gm, "");
  var two = one.replace(/[\r\n]\s*[\r\n]/gm, "");
  return two;
}

const Schema = ({ post }) => {
  const {
    title,
    description,
    date,
    slug,
  } = post;

  return (
    <Head>
      <script type="application/ld+json">{`
    {
      "@context":"https://schema.org/",
      "@type":"Article",
      "name":"${title}",
      "about": "${description}",
      "author": { "@type": "Person", "name": "Guy Torbet" },
      "datePublished": "${date}",
      "description": "${description}",
      "inLanguage": "English",
      "mainEntityOfPage": "${site}posts/${slug}",
      "url": "${site}posts/${slug}"
    }
    `}</script>
    </Head>
  );
};

export default Schema;