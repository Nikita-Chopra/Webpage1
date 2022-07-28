import React from 'react'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

import img10 from '../image/phone1.jpg'
import img11 from '../image/mail1.jpg'
import img12 from '../image/des1.png'




export default function Contact() {

  const formRef = useRef();
  const handleSubmit=(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_0oh3xgm', 'template_39fdy4l', formRef.current, 'MjXPvk3bw-wX60q5U')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

  }

const handleOnClick=()=>{
 console.log("Submit the data");
}


  return (
    <div className='g'>
        <div className='g-left'>
        <div className='g-back'> 
                </div>
<div className='gg'>
  <p className='g-head'>
    Lets's Discuss Our Projects
  </p>
<div className='g1'>
      <img src={img10} alt="" className='g-phone'></img>
      1234567890
</div>
<div className='g2'>
      <img src={img11} alt="" className='g-mail'></img>
      abcd@gmail.com
</div>
<div className='g3'>
      <img src={img12} alt="" className='g-dest'></img>
      ABC Street, Victoria 8250<br/>
      Australia
</div>
</div>


        </div>
        <div className='g-right'>
         <div className='g1-right'>
           <p class="g1-head">
             <b>What is your Story?</b>      There are many 
             variations of passages of Lorem Ipsum 
             available, but the majority have suffered 
             alteration in some form, by injected humour
           </p>
           <form ref={formRef} onSubmit={handleSubmit}>
           <input type="text"  name="user_name" placeholder="Name"/>
           <input type="text"  name="user_subject" placeholder="Subject"/>
           <input type="text"  name="user_email" placeholder="Email"/>
           <textarea name="user_message" rows="8" cols="10" placeholder="Message"/>
           <button onClick={handleOnClick}>Submit</button>
           </form>
         </div>
        </div>
      



    </div>
  )
}
