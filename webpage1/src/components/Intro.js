import React from 'react'
import me from '../image/img1.jpg'


export default function Intro() {
  return (
    <div className='i'>
        <div className='i-left'>
            <div className='i-left-wrapper'>
              <div className='a'>
              <p className='i-intro'>
            Hello, My name is 
          </p>
          <h1 className='i-name'>
            John Burton
          </h1>
              </div>
          
        <div className='i-wrapper-item'>
          <div className='i-wrapper'>
              <div class="i-items">Web Developer</div>
              <div class="i-items">UI/UX Designer</div>
              <div class="i-items">App Developer</div>
              <div class="i-items">Frontend Developer</div>
              <div class="i-items">Full Stack Developer</div>
          </div>
        </div>
        <div className='b'>
        <h2 className='i-head'>
          Photographer
        </h2>
        <p className='i-text'>
        Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a galley of
         type and scrambled it to make a type specimen book. 
         It has survived not only five centuries.
        </p>
        </div>
        
        </div>
    </div>

        <div className='i-right'>
          
             <div className='i-back'> 
                </div>
                          
                  <img src={me} alt="" className='i-img'/> 
                  
           </div>
        
    </div>
  )
}
