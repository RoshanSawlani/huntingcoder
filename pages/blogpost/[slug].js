import React from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/BlogPost.module.css';

// Step 1 : Find the file corresponding to the slug
// Step 2 : Populate them inside the page
const slug = () => {
    const router = useRouter()
    const { slug } = router.query
    return (
        <div className={styles.container}>
            <main className={styles.main}>
            <h1 className={styles.heading}>Title of the page {slug}</h1>
            <hr />
            <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid natus laudantium tempora dignissimos velit incidunt hic. Ullam in fugiat dolorum sunt, earum culpa.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nulla amet delectus, quia unde ad. Cumque praesentium beatae consequuntur vero quisquam, mollitia iusto debitis. Ullam placeat, incidunt molestiae repellat id commodi, minus perferendis tempore vitae praesentium non provident in a vero dolores sequi. Maiores, repellendus?
                </div>
                </main>
        </div>
    )
}

export default slug