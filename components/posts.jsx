import { useRouter } from 'next/router'

import styles from '../styles/posts.module.css'

import { formatDate } from '../api/index'

function Posts({ allPosts }) {

    const router = useRouter()

    return (
        <div id={styles.container}>
            <ul>
                {allPosts.map(function (post, key) {
                    return (
                        <li onClick={() => { router.push(`/posts/${post.slug}`) }} key={key} className={styles.tableRow}>
                            <div className={styles.titleContainer}><h2 className={styles.title}>{post.title}</h2></div>
                            <h3 className={styles.date}>{formatDate(post.date)}</h3>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}


export default Posts