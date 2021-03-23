import Link from 'next/link'
import styles from '../styles/navbar.module.css'

export default function NavBar() {
    return(
        <div id={styles.navBar}>
            <Link href='/#c'><a className={styles.navItem} alt="Posts">Posts</a></Link>
            <Link href='/projects#c'><a className={styles.navItem} alt="Projects">Projects</a></Link>
        </div>
    )
}