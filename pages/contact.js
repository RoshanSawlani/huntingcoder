import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [desc, setDesc] = useState('')

  
const handleSubmit = (e) => {
  e.preventDefault()
  console.log(phone,name,email,desc)
  const data = {phone,name,email,desc}
  fetch("http://localhost:3004/api/postcontact",{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })
  .then(response=>response.text())
  .then(data=>{
    console.log('Success',data)
    alert('Thanks for contacting us')
    setPhone('')
    setName('')
    setDesc('')
    setEmail('')
  })
  .catch((error)=>{
    console.error("Error",error)
  })
}
const handleChange = (e) => {
  if(e.target.name == "phone"){
    setPhone(e.target.value)
  }
  else if (e.target.name == "email"){
    setEmail(e.target.value)
  }
  else if (e.target.name == "desc"){
    setDesc(e.target.value)
  }
  else if (e.target.name == "name"){
    setName(e.target.value)
  }
}

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>

        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>Enter your name</label>
          <input type="text" name="name" value={name} onChange={handleChange} className={styles.input} id="name" aria-describedby="emailHelp" required/>
        </div>

        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>Email address</label>
          <input type="email"name="email" value={email} onChange={handleChange} className={styles.input} id="email" aria-describedby="emailHelp" required/>
          <div id="emailHelp" className={styles.formtext}>We'll never share your email with anyone else.</div>
        </div>
        
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>Phone</label>
          <input type="phone" value={phone} onChange={handleChange} className={styles.input} name="phone" id="phone" required/>
        </div>

        <div className={styles.mb3}>
          <label className={styles.formlabel} htmlFor="floatingTextarea">Elaborate your concern</label>
          <textarea className={styles.input} value={desc} name='desc' onChange={handleChange} id="desc" />
        </div>
        <button className={styles.btn} type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact