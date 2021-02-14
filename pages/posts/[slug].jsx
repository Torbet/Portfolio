import ReactMarkdown from 'react-markdown'

import PostLayout from '../../layouts/postlayout'

import CodeBlock from "../../components/codeblock";
import Image from '../../components/image'

import { formatDate, getPostBySlug, getPosts } from '../../api/index'

function Post(props) {

    const renderers = {
        heading: (props) => <h2 style={{padding: '1em 0', borderTop: '1px #eee solid'}}>{props.children}</h2>,
        paragraph: (props) => <p style={{ fontSize: "1.2em", fontWeight: '400', lineHeight: '1.4', marginBottom: '2vh' }}>{props.children}</p>,
        listItem: (props) => <li style={{ fontSize: "1.2em", listStylePosition: 'inside' }}>{props.children}</li>,
        code: CodeBlock,
        blockquote: (props) => <h3 style={{paddingLeft: '1em', borderLeft: '0.4em #eee solid', margin: '0.5em 0', fontSize: '1.2em'}}>{props.children}</h3>,
        image: Image
    }


    return (
        <PostLayout title={props.title} date={formatDate(props.date)} description={props.description}>
                <ReactMarkdown source={props.content} renderers={renderers} />
        </PostLayout>
    )
}

export async function getStaticProps(context){
    return {
        props: await getPostBySlug(context.params.slug)
    }
}

export async function getStaticPaths(){
    let paths = await getPosts()
    paths = paths.map(post => ({
        params: { slug:post.slug }
    }));
    return {
        paths: paths,
        fallback: false
    }
}
export default Post