import { useRouter } from 'next/router'

import styles from '../styles/list.module.css'

import { formatDate } from '../api/index'

function Posts({ allPosts }) {

    const router = useRouter()

    return (
        <div id={styles.container}>
            <ul id={styles.table}>
                {allPosts.map(function (post, key) {
                    return (
                        <li onClick={() => { router.push(`/posts/${post.slug}`) }} key={key} className={styles.tableRow}>
                            <h2 className={`${styles.title} ${styles.postTitle}`}>{post.title}</h2>
                            <h3 className={`${styles.subTitle} ${styles.postDate}`}>{formatDate(post.date)}</h3>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


export default Posts