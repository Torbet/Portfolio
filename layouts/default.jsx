import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/default.module.css'

import NavBar from '../components/navbar'

import { FaGithub, FaTwitter, FaInstagram, FaInbox, FaChevronDown } from "react-icons/fa"

export default function Default(props) {
    return (
        <main>
            <Head>
                <title>{props.title}</title>
                <meta name='description' content={`${props.title}`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <link rel="shortcut icon" href="/favicon.ico" />

                <script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/e539363b4b0f1208c8d23e3b7/062b6ffefded4a22c6462660a.js");</script>
            </Head>
            <div id={styles.main}>
                <div id={styles.left}>
                    <div id={styles.about}>
                        <h1 id={styles.title}>GUY TORBET.</h1><br />
                        <p className={styles.subHeading}>I'm a 17 year old Software Developer and Student from Scotland.</p><br/>
                        <p className={styles.subHeading}>I read a lot online, and make a lot of projects; here I document and summarise the key ideas and insights from my experiences, and hopefully provide some value to you.</p>
                        <div id={styles.links}>
                            <Link href="/"><FaGithub className={styles.icon} /></Link>
                            <Link href="/"><FaTwitter className={styles.icon} /></Link>
                            <Link href="/"><FaInstagram className={styles.icon} /></Link>
                            <Link href="/"><FaInbox className={styles.icon} /></Link>
                        </div>

                    </div>
                </div>
                <div id={styles.right}>
                    <NavBar />
                    {props.children}
                </div>

            </div>
        </main>
    )
}