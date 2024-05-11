import React from 'react'
import  styles  from '@/styles/Blog.module.css';
import Link from 'next/link';


// Step 1 : Collect all the files from blog data directory
// Step 2 : Iterate through them and display them
const Blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
    <div className={styles.blogs}>
          <div className={styles.blogItem}>
      <Link href={'/blogpost/learn-JavaScript'}>
            <h2 className={styles.blogItemh3}>How to learn JavaScript in 2024?</h2></Link>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
          <div className={styles.blogItem}>
            <h2>How to learn JavaScript in 2024?</h2>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
          <div className={styles.blogItem}>
            <h2>How to learn JavaScript in 2024?</h2>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
          <div className={styles.blogItem}>
            <h2>How to learn JavaScript in 2024?</h2>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
        </div>
        </main>
        </div>
  )
}

export default Blog