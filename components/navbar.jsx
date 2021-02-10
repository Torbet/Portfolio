import Link from 'next/link'
import styles from '../styles/navbar.module.css'

export default function NavBar() {
    return(
        <div id={styles.navBar}>
            <Link href='/#posts'><a className={styles.navItem}>Posts</a></Link>
            <Link href='/projects'><a className={styles.navItem}>Projects</a></Link>
        </div>
    )
}