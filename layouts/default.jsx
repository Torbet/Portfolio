import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/default.module.css'

import NavBar from '../components/navbar'
import Mail from '../components/mail'

import { FaGithub, FaTwitter, FaInstagram, FaInbox } from "react-icons/fa"

export default function Default(props) {
    return (
        <main>
            <Head>
                <title>{props.title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
				<meta name="description" content="A portfolio of Guy Torbet. Updating the progress of projects and summarising key information from what I read online - hopefully providing value."/>
                <meta property="og:title" content="Guy Torbet | Portfolio" />
                <meta property="og:description" content="A portfolio of Guy Torbet. Updating the progress of projects and summarising key information from what I read online - hopefully providing value." />

                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@guytorbet" />
                <meta name="twitter:title" content="Guy Torbet | Portfolio" />
                <meta name="twitter:description" content="A portfolio of Guy Torbet. Updating the progress of projects and summarising key information from what I read online - hopefully providing value." />
                <meta name="twitter:image" content="https://torbet.co/profile.jpg" />
                
                <script type="application/ld+json">{`
                    {
                    "@context":"https://schema.org/",
                    "@type":"Organization",
                    "name":"Guy Torbet",
                    "image":"https://torbet.co/favicon.ico",
                    "logo":"https://torbet.co/favicon.ico",
                    "url": "https://torbet.co"
                    }
                    `}
                </script>
                
            </Head>
            <div id={styles.main}>
                <section id={styles.left}>
                    <div id={styles.about}>
                        <h1 id={styles.title}>GUY TORBET.</h1><br />
                        <p className={styles.subHeading}>I'm a 17 year old Software Developer and Student from Scotland.</p><br/>
                        <p className={styles.subHeading}>I read a lot online, and make a lot of projects; here I document and summarise the key ideas and insights from my experiences, and hopefully provide some value to you.</p><br/>
                        <p className={styles.subHeading}>I also have an email newsletter, it's a 2-5 minute read every week of high quality tech and productivity content. There's also a <a href="/feed" className={styles.navItem}>RSS feed</a> if you're into that.</p>
                        <Mail/>
                        <div id={styles.links}>
                            <Link href="https://github.com/torbet"><FaGithub className={styles.icon} /></Link>
                            <Link href="https://twitter.com/"><FaTwitter className={styles.icon} /></Link>
                            <Link href="https://instagram.com/guytorbet"><FaInstagram className={styles.icon} /></Link>
                            <Link href="mailto:guy@torbet.co"><FaInbox className={styles.icon} /></Link>
                        </div>

                    </div>
                </section>
                <section id={styles.right}>
                    <div id="c">
                        <NavBar />
                        {props.children}
                    </div>
                </section>

            </div>
        </main>
    )
}
