import Head from 'next/head'

import { FaArrowLeft } from "react-icons/fa"
import {useRouter} from 'next/router'

import styles from '../styles/postlayout.module.css'

function Header(props) {

    const router = useRouter()

    return (
        <div id={styles.bar}>
            <FaArrowLeft id={styles.arrow} onClick={() => {router.push('/#c')}} />
            <div id={styles.titleContainer}><h2 id={styles.title}>{props.title}</h2></div>
            
            </div>
    )
}

export default function PostLayout(props) {
    return (
        <main>
            <Head>
                <title>{`${props.title} | Guy Torbet`}</title>
                <meta name='description' content={props.description} />
                <meta property="og:title" content={`${props.title} | Guy Torbet`} />
                <meta property="og:description" content={props.description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
            </Head>
            <div id={styles.main}>
                <Header title={props.title} />
        
                <article id={styles.content}>
                    <div id={styles.date}>{props.date}</div>
                    <div id={styles.post}>{props.children}</div>
                </article>

            </div>
        </main>
    )
}