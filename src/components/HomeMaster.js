import React , {useState} from 'react'
import classes from './Home.module.css'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'


const HomeMaster = () => {

    
const [fname, setFname] = useState("");
const [lname, setLname] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState(""); 
const [text , setText] = useState("");

const handleSubmit = (e) => {
  localStorage.setItem("fname", fname);
  localStorage.setItem("lname", lname);
  localStorage.setItem("email", email);
  localStorage.setItem("message", message);
  
}


  return (<>
    <div className={classes.main}>
    <div className={classes.mainWrapper}>
    



      <h1>You deserve a comfortable life</h1>
      <p>We have made quality our habit. It’s not something that we just strive for – we live by<br/> this principle every day. </p>
      <button >Our store</button>
    </div>

    
  </div>
<div className={classes.pics}>
  <div className={classes.pic1}>
      <img src={img1} alt="" />
  </div>
  <div className={classes.pic2}>
      <img src={img2} alt="" />

  </div>
  <div className={classes.pic3}>
      <img src={img3} alt="" />

  </div>


</div>

<form className={classes.formclass}>
  <div className={classes.form1}>
    <div className={classes.form1Wrapper}>
      <h1>Have a question?</h1>
      <p>Left your e-mail and we will contact you soon</p>
    </div>
  </div>
  <form className={classes.form2}>
    <div>
      <h4>First Name</h4>
      <input
        onChange={(e) => {
          setFname(e.target.value);
        }}
        placeholder="Your name"
        type="text"
      />
      
    </div>
    <div>
      <h4>Last Name</h4>
      <input
        onChange={(e) => {
          setLname(e.target.value);
        }}
        placeholder="Your last name"
        type="text"
      />
      
    </div>

    <div>
      <h4>Your email</h4>
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="example@email.com"
        type="text"
      />
      
    </div>

    <div>
      <h4>Enter message</h4>
      <input
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        id="message"
        placeholder="Enter message"
        type="text"
      />
      
    </div>

    <div className={classes.formbtn}>
      <button onClick={handleSubmit}>Contact me</button>
    </div>
  </form>
</form>

</> 

  )
}

export default HomeMaster
