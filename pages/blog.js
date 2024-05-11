import React from 'react'
import  styles  from '@/styles/Blog.module.css';
import Link from 'next/link';
const Blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
    <div className={styles.blogs}>
          <div className={styles.blogItem}>
      <Link href={'/blogpost/learn-JavaScript'}>
            <h3 className={styles.blogItemh3}>How to learn JavaScript in 2024?</h3></Link>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn JavaScript in 2024?</h3>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn JavaScript in 2024?</h3>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn JavaScript in 2024?</h3>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
        </div>
        </main>
        </div>
  )
}

export default Blog