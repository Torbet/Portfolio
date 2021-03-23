import ReactMarkdown from 'react-markdown'

import PostLayout from '../../layouts/postlayout'

import CodeBlock from "../../components/codeblock";
import Image from '../../components/image'

import styles from '../../styles/post.module.css'

import { formatDate, getPostBySlug, getPosts } from '../../api/index'
import Schema from '../../components/schema'

function Post(props) {

    return (
        <article>
            <Schema post={props}/>
            
            <PostLayout title={props.title} date={formatDate(props.date)} description={props.description}>
                <div id={styles.post}>
                    <ReactMarkdown source={props.content} renderers={{code: CodeBlock, image: Image}} />
                </div>
            </PostLayout>
        </article>
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