import React from 'react'
import photo from '../image/image2.jpeg'
import award from '../image/award.jpg'

export default function About() {
  return (
    <div className='c'>
        <div className='c-left'>
   <div className='c-card-bg'></div>
   <div className='c-card'>
     <img src={photo} alt="" className='c-img'></img>
   </div>
        </div>


        <div className='c-right'>
      
<p className='c-heading'>
About Me
</p>
<p className='c-txt1'>
It was popularised in the 1960s with the 
release of Letraset sheets containing Lorem 
Ipsum passages, and more recently with desktop 
publishing
</p>

<p className='c-txt2'>
The standard chunk of Lorem Ipsum used since the 1500s is 
reproduced below for those interested. Sections 1.10.32 and 
1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are 
also reproduced in their exact original form, accompanied by 
English versions from the 1914 translation by H. Rackham.
</p>
<div className='c-award'>
  <img src={award} alt="" className='c-award-img'></img>
  <div className='award-txt'>
    <div className='award-txt2'>
    <p className='c-award-head'>International Design Awards 2021</p>
  <p className='c-award-txt'>
  It uses a dictionary of over 200 Latin words, 
  combined with a handful of model sentence structures, 
  to generate Lorem Ipsum which looks reasonable.
  </p>
    </div>
    
  </div>
  
</div>

        </div>
    </div>
  )
}
