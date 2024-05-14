import React, { useEffect, useState } from 'react'
import styles from '@/styles/Blog.module.css';
import Link from 'next/link';



// Step 1 : Collect all the files from blog data directory
// Step 2 : Iterate through them and display them
const Blog = (props) => {
  console.log(props)
  const [blogs, setBlogs] = useState(props.allblogs)
  /* useEffect(()=>{
    console.log('useEffect is running')
    fetch('http://localhost:3004/api/blogs').then((a)=>{
      return a.json();})
      .then((parsed)=>{
        setBlogs(parsed)
    })
  },[]) */
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogItem) => {
          return <> <div className={styles.blogs}>
            <div className={styles.blogItem} key={blogItem.slug}>
              <Link href={`/blogpost/${blogItem.slug}`}>
                <h2 className={styles.blogItemh3}>{blogItem.title}</h2></Link>
              <p className={styles.blogItemp}>{blogItem.content.substr(0, 140)}...</p>
            </div>
          </div>
          </>
        })}
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  let data = await fetch('http://localhost:3004/api/blogs')
  let allblogs = await data.json()

  return {
    props: {allblogs}
  }
}
export default Blog