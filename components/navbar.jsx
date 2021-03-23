import Link from 'next/link'
import styles from '../styles/navbar.module.css'

export default function NavBar() {
    return(
        <div id={styles.navBar} itemScope itemType="http://www.schema.org/SiteNavigationElement">
            <Link href='/#c' itemProp="url"><a className={styles.navItem} alt="Posts" itemProp="url">Posts</a></Link>
            <Link href='/projects#c' itemProp="url"><a className={styles.navItem} alt="Projects" itemProp="url">Projects</a></Link>
        </div>
    )
}