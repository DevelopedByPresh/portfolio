import React,{useState} from "react"
import './contact.css'



const Contact = ()=>{
    return(
 <section className="contact section" id="contact">
    <h2 className="section__title">Get In Touch</h2>
        <span className="section__subtitle">Contact Me</span>

        
<div className="contact__container container grid">
            
<div className="contact__content">

<h3 className='contact__title'>Talk To Me</h3>

<div className="contact__info">
    <div className="contact__card">
        <i className="bx bxl-mail-send contact__card-icon"></i>
        <img className="contact__card-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAASNJREFUSEvt1UErBWEUxvHf3bOglJSdUnwJS1lLFlKKIgtlbXnLTlmIopQsJGtZ+hKUtZJSLNjT0YymMXPnXtNsbs7yzDnPc87/fXunpeFoNayvvwzm0cZkTWwP2MFV6GQR3WGqpnjafo/pvMFn8vUQG380yvZ+D5/dIDWI3CxOMdql0TNWcIOsTqHBID4whCMsVJhcYh1vGMB7Ul+6wSOWcZsULuIAwzmjV2ziIsnP4AzjVQapzgm2k4kCVSALdBGBIpAEmth4D6u5AUo3yNY9YQ3XSTJQRAS6iDkcY6wAY1cGad85thBYIgLXPpY6nE9PBqHzksEQ+EYqDr9ngy5v7E/Zv0ElsV+IGn/s4rnexUTlbJ0LSp/rmrrF7f31y2wE0RedUDYZOIKA5gAAAABJRU5ErkJggg=="/>
        {/* <i className='uil uil-calendar-alt bxl-mail-send contact__card-icon'></i> */}
        <h3 className='contact__card-title'>Email</h3>
        <span className="contact__card-data">chineduprecious47@gmail.com</span>

        <a href="mailto:chineduprecious47@gmail.com.com" className="contact__button">Write Me <i className="bx bx-right-arrow-alt contact__button-icon"></i> </a>

    </div>

    <div className="contact__card">
        <i className="bx bxl-whatsapp contact__card-icon"></i>
        <img className="contact__card-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAhVJREFUSEvN1UnITnEUBvDfx8JMdoREiChThg1JmVI2hqIUiTInZcGGYiE2xpQSxUKxUJJZSCFiY0ghsjKkKGTu6Lxfb2/3vq/NW99Z3e7//M9zz3Oe89wWTY6WJtfXJgDGYgEmYwh+4Rbu4AIe1GOhXgf9cBgz8DkLPcE3jMZI9MBubMH3IqAygPjSa+iADTiOPwUF1ibAC8zDo9qcIoBeuJdUTMXzBkIYgTNoh+H4Up1fBHAO4zEOL9EH3fC0DlCA3McRrKwHMAk3sCyTh2U37zCghKZKvc3Ygem4VHlZ28E+LEVP/MAm7MzkGPbFOl10SjEEXXPLAB7iNeZkwiocyOcAPtpgHnE/YlQZwBvEDFZkQu+cw0eEbH82ADiEReheBvAsh7WwqlBIcS8OYk2DOQSd69GxDOB88j+h5ktP5jYHvwHYOekK1ZxCdBgReWMwuAxgew62L95WgbTHHqzGJ/55WEg3YlfeiT14j9NYXgYwMBdrG7YW8D0t6RqaZ78xM2UZ3J9Ia2lVW9GihRLC0MLkyiJoiEG+ShH0x12EV02pvlQL0CX5jH3Y2EAxleMofjkBY/tD5q1RCzAbZ7EY0X5s5W0cw9cawJjTEqxLZYVvNTS7/TnISq24MCit+HrSEa4aXjUxk27m9heaYm0H4SGReBVX8AFdMR+zEPING3mcnhUSDe5Lo038Mv9z1sVpTe/gL9I6cRkc/rZLAAAAAElFTkSuQmCC"/>

        <h3 className='contact__card-title'>Whatsapp</h3>
        <span className="contact__card-data">+234 8107724784</span>

        <a href="https://api.whatsapp.com/send?phone=08107724784&text=hello, more information!" className="contact__button">Write Me <i className="bx bx-right-arrow-alt contact__button-icon"></i> </a>

    </div>



    <div className="contact__card">
        <i className="bx bxl-messenger contact__card-icon"></i>
        <img className='contact__card-icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAShJREFUSEvl1bsuBVEUh/HfEToRBZU3oNXoKFQKIa6hk/AWEo/hUiLuodCJS6PRewKdqLSE7GQ5OTm3ccyc09jV7Mza3zf7v2fNlLR5lNrM13HBHcZz7uoeEz+M6h185YTXcJsJrqN66g/SMreR4ACrAT7EcouSTMEu1gO6h7WiBe/YRxdW0Fu04BXPAR3GIB5iPoR+bOMDI5ireoDMiI6xFIuOsEi5Z2bwhJcK6Ca2KuaZgpOApjVJthBxNXqNu/GGvpDkEvTgCqMhTo2VxiPGihCkLr0N0A424voS00UI0hlcBKhelOlWZkSnsf1UnCDzSDl/YhbnITiLe5V1/0TQrNEGorlSFPXqfhVRi1+GmvKGh1zED+cGkz/Kjv8y80bTOKvCyQH8BlH5UhnfrraxAAAAAElFTkSuQmCC"/>
       
        <h3 className='contact__card-title'>Linkedin</h3>
        <span className="contact__card-data">www.linkedin.com/in/precious-ugwunna-0829b9212</span>

        <a href="www.linkedin.com/in/precious-ugwunna-0829b9212" className="contact__button">Write Me <i className="bx bx-right-arrow-alt contact__button-icon"></i> </a>

    </div>
</div>

</div>

<div className="contact__content">

<h3 className='contact__title'>Write Me Your Project</h3>

<form className="contact__form">

    <div className="contact__form-div">
        <label className="contact__form-tag">Name</label>
        <input type="text" name='name' className="contact__form-input" placeholder="insert your name"/>
    </div>

    <div className="contact__form-div">
        <label className="contact__form-tag">Mail</label>
        <input type="email" name='email' className="contact__form-input" placeholder="insert your email"/>
    </div>

    <div className="contact__form-div contact__form-area">
        <label className="contact__form-tag">Projects</label>
    <textarea name="project"  cols="30" rows="10" className="contact__form-input" placeholder="write your project/message"></textarea>
    </div> 

    <button className="button button--flex">Send Message
    
    <svg
                  class="button__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="var(--container-color)"
                >
                  <path
                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                    fill="#000"
                  ></path>
                  <path
                    d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                    fill="var(--container-color)"
                  ></path>
                </svg>
    
    </button>
</form>


</div>
</div>


 </section>

   
    )
}


export default Contact