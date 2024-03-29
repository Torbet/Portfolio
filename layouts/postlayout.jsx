import Head from 'next/head'

import { FaArrowLeft } from "react-icons/fa"
import {useRouter} from 'next/router'

import Mail from '../components/mail'

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

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@guytorbet" />
                <meta name="twitter:title" content={props.title} />
                <meta name="twitter:description" content={props.description} />
                <meta name="twitter:image" content="https://torbet.co/profile.jpg" />
            </Head>
            <div id={styles.main}>
                <Header title={props.title} />
        
                <article id={styles.content}>
                    <div id={styles.date}>{props.date}</div>
                    <div id={styles.post}>
                        {props.children}
                        I also have an email newsletter, it's about a 2-5 minute read every week of high quality tech and productivity content, you can sign up to it here!
                        <Mail />
                        </div>
                </article>

            </div>
        </main>
    )
}