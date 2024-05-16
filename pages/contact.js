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
          <input type="text" name="name" value={name} onChange={handleChange} className="form-control" id="name" aria-describedby="emailHelp" />
        </div>

        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>Email address</label>
          <input type="email"name="email" value={email} onChange={handleChange} className="form-control" id="email" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>Phone</label>
          <input type="phone" value={phone} onChange={handleChange} className="form-control" name="phone" id="phone" />
        </div>

        <div className={styles.mb3}>
          <label htmlFor="floatingTextarea">Elaborate your concern</label>
          <textarea value={desc} name='desc' onChange={handleChange} className="form-control" placeholder="Write your concern here" id="desc" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Contact