import React from 'react'
import Product from '../components/Product'

export default function Productlist() {
  return (
   <div className='e'>
<p className='e-head'>
    Create & inspire. It's Lama
</p>
<p className='e-txt'>
There are many variations of passages of Lorem Ipsum available, 
but the majority have suffered alteration in some form, by injected humour, 
or randomised words which don't look even slightly believable.
</p>
<p className='e-card'>
 <Product/>
 <Product/>
 <Product/>
 <Product/>
 <Product/>
 <Product/>
</p>
   </div>
  )
}
