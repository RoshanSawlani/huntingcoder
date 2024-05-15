import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/BlogPost.module.css';
import * as fs from 'fs' 

// Step 1 : Find the file corresponding to the slug
// Step 2 : Populate them inside the page
const Slug = (props) => {
    function createMarkup(c){
        return {__html:c}
    }
    const [blog, setBlog] = useState(props.myBlog)
    const router = useRouter();
    if (router.isFallback) {
        return <div>Loading...</div>;
    }
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.heading}>{blog && blog.title}</h1>
                <hr />
                {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
                
                
            </main>
        </div>
    )
}

export async function getStaticPaths(){
    return {
        paths:[
        {params:{slug:'how-to-learn-flask'}},
        {params:{slug:'how-to-learn-javascript'}},
        {params:{slug:'how-to-learn-nextjs'}},
        ],
        fallback:true,
    }
}
export async function getStaticProps(context) {
    const { slug } = context.params
    let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`,'utf-8')
    return {
        props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
    }
}

/* export async function getServerSideProps(context) {
    // console.log(context.query)
    // const router = useRouter()
    const { slug } = context.query
    let data = await fetch(`http://localhost:3004/api/getblog?slug=${slug}`)
    let myBlog = await data.json()
    return {
        props: { myBlog },
    }
} */

export default Slug