import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

import PostLayout from '../../layouts/postlayout'

import CodeBlock from "../../components/codeblock";
import Image from '../../components/image'

import { formatDate } from '../../api/index'

function Post({ content, data }) {

    const renderers = {
        heading: (props) => <h2 style={{marginBottom: '1em'}}>{props.children}</h2>,
        paragraph: (props) => <p style={{ fontSize: "1.2em", fontWeight: '400', lineHeight: '1.2', marginBottom: '2vh' }}>{props.children}</p>,
        listItem: (props) => <li style={{ fontSize: "1.2em", marginLeft: '5vw' }}>{props.children}</li>,
        code: CodeBlock,
        blockquote: (props) => <h3 style={{paddingLeft: '2em', borderLeft: '0.5em #eee solid', margin: '1vh 0'}}>{props.children}</h3>,
        image: Image
    }


    return (
        <PostLayout title={data.title} date={formatDate(data.date)}>
                <ReactMarkdown source={content} renderers={renderers} />
        </PostLayout>
    )
}

Post.getInitialProps = async (context) => {
    const { slug } = context.query
    const content = await import(`../../posts/${slug}.md`)
    const data = matter(content.default)

    return { ...data }
}

export default Post