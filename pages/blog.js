import React, { useEffect, useState } from 'react'
import styles from '@/styles/Blog.module.css';
import Link from 'next/link';
import * as fs from 'fs';
import InfiniteScroll from 'react-infinite-scroll-component';


// Step 1 : Collect all the files from blog data directory
// Step 2 : Iterate through them and display them
const Blog = (props) => {
  
  const [blogs, setBlogs] = useState(props.allBlogs)
  const [count,setCount] = useState(2)
  const fetchData = async() => {
    let d = await fetch(`http://localhost:3004/api/blogs/?count=${count+2}`)
    setCount(count+2)
    let data = await d.json() 
    setBlogs(data)
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <InfiniteScroll
          dataLength={blogs.length} //This is important field to render the next data
          next={fetchData}
          hasMore={props.allCount !== blogs.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {blogs.map((blogItem) => {
            return <> <div className={styles.blogs}>
              <div className={styles.blogItem} key={blogItem.slug}>
                <Link href={`/blogpost/${blogItem.slug}`}>
                  <h2 className={styles.blogItemh3}>{blogItem.title}</h2></Link>
                <p className={styles.blogItemp}>{blogItem.metadesc.substr(0, 140)}...</p>
                <Link href={`/blogpost/${blogItem.slug}`}><button className={styles.btn}>Read More</button></Link>
              </div>
            </div>
            </>
          })}
        </InfiniteScroll>
      </main>
    </div>
  )
}
export async function getStaticProps(context) {
  let data = await fs.promises.readdir('blogdata')
  let allCount = data.length;
  let myFile
  let allBlogs = []
  for (let index = 0; index < 2; index++) {
    const item = data[index];
    myFile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
    allBlogs.push(JSON.parse(myFile))
  }

  return {
    props: { allBlogs , allCount}
  }
}

/* export async function getServerSideProps(context) {
  let data = await fetch('http://localhost:3004/api/blogs')
  let allblogs = await data.json()

  return {
    props: {allblogs}
  }
} */
export default Blog