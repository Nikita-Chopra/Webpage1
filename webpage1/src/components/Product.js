import React from 'react'
import Img1 from '../image/web1.jpg'
import Img2 from '../image/web2.jpg'
import Img3 from '../image/web3.jpg'
import Img4 from '../image/web4.webp'

export default function Product() {
  return (
    <div className='card-item'>
     <div className='browser'>     
       <div className='circle'></div>
       <div className='circle'></div>
       <div className='circle'></div>       
     </div>
<div className='img-box'>
  <img src={Img4} alt="" class="img-box-pic"></img>
  <img src={Img3} alt="" class="img-box-pic"></img>
 </div>

    </div>
  )
}
