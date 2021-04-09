import Head from "next/head";
const site = "https://torbet.co/"


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
      "headline":"${title}",
      "about": "${description}",
      "author": { "@type": "Person", "name": "Guy Torbet" },
      "publisher": { "@id": "${site}" },
      "image":"https://torbet.co/favicon.ico"
      "datePublished": "${date}",
      "description": "${description}",
      "inLanguage": "English",
      "mainEntityOfPage": "${site}posts/${slug}",
      "url": "${site}posts/${slug}",
    }
    `}</script>
    </Head>
  );
};

export default Schema;