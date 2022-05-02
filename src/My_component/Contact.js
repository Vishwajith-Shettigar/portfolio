import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact'>
        <h2>Contact</h2>

        <div className='email'>
        <span class="iconify" data-icon="bx:mail-send"></span>

<p>zekromvishwa56789
  @gmail.com</p>
<p>
<a href='mailto:zekromvishwa56789@gmail.com'>
    Mail me 
    </a></p>
        </div>




        <div className='email'>
        <span class="iconify" data-icon="ant-design:whats-app-outlined"></span>

<p>9740838609</p>
<a href='whatsapp:contact=9740838609@s.whatsapp.com&message="I d like to chat with you "'>
    <p>Whats app </p>
    </a>
        </div>

    </div>
  )
}

export default Contact