import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/BlogPost.module.css';

// Step 1 : Find the file corresponding to the slug
// Step 2 : Populate them inside the page
const slug = (props) => {
    const [blog, setBlog] = useState(props.myBlog)

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.heading}>{blog && blog.title}</h1>
                <hr />
                <div>
                    {blog && blog.content}
                </div>
            </main>
        </div>
    )
}

export async function getServerSideProps(context) {
    // console.log(context.query)
    // const router = useRouter()
    const { slug } = context.query
    let data = await fetch(`http://localhost:3004/api/getblog?slug=${slug}`)
    let myBlog = await data.json()
    return {
        props: { myBlog },
    }
}

export default slug