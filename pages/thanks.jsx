import Link from 'next/link'
import styles from '../styles/thanks.module.css'

export default function Thanks() {
    return (
                <div id={styles.main}>
                    <h1 style={{color: '#0000FF'}}>Thank You.</h1>
                        <h3>You have now subscribed to my newsletter!</h3>
                        <h3>You can go back to my site <Link href="/"><a>Here</a></Link> </h3>
                </div>
    );
}