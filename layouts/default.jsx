import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/default.module.css'

import NavBar from '../components/navbar'
import Mail from '../components/mail'

import { FaGithub, FaTwitter, FaInstagram, FaInbox, FaChevronDown } from "react-icons/fa"

export default function Default(props) {
    return (
        <main>
            <Head>
                <title>{props.title}</title>
                <meta name='description' content={`${props.title}`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta name="twitter:creator" content="@guytorbet" />
				<meta name="description" content="A personal blog and portfolio of Guy Torbet. Updating the progress of projects and summarising key information from what I read on line - hopefully providing value."/>
                <meta property="og:title" content="Guy Torbet | Portfolio" />
                <meta property="og:description" content="A personal blog and portfolio of Guy Torbet. Updating the progress of projects and summarising key information from what I read on line - hopefully providing value." />
                
            </Head>
            <div id={styles.main}>
                <div id={styles.left}>
                    <div id={styles.about}>
                        <h1 id={styles.title}>GUY TORBET.</h1><br />
                        <p className={styles.subHeading}>I'm a 17 year old Software Developer and Student from Scotland.</p><br/>
                        <p className={styles.subHeading}>I read a lot online, and make a lot of projects; here I document and summarise the key ideas and insights from my experiences, and hopefully provide some value to you.</p><br/>
                        <p className={styles.subHeading}>I also have an email newsletter, it's about a 2-5 minute read every week.</p>
                        <Mail/>
                        <div id={styles.links}>
                            <Link href="https://github.com/torbet"><FaGithub className={styles.icon} /></Link>
                            <Link href="https://twitter.com/"><FaTwitter className={styles.icon} /></Link>
                            <Link href="https://instagram.com/guytorbet"><FaInstagram className={styles.icon} /></Link>
                            <Link href="mailto:guy@torbet.co"><FaInbox className={styles.icon} /></Link>
                        </div>

                    </div>
                </div>
                <div id={styles.right}>
                    <div id="c">
                        <NavBar />
                        {props.children}
                    </div>
                </div>

            </div>
        </main>
    )
}