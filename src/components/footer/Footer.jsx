import React,{useState} from "react"
import './footer.css'



const Footer = ()=>{
    return(
 <footer className="footer">
    <div className="footer__container container">
        <h1 className="footer__title">Precious</h1>
        <ul className="footer__list">
            <li>
                <a href="#about" className="footer__link">About</a>
            </li>

            <li>
                <a href="#portfolio" className="footer__link">Projects</a>
            </li>

            <li>
                <a href="#skills" className="footer__link">Skills</a>
            </li>

        </ul>


<div className="footer__social">


<a href="https://www.linkedin.com/in/precious-ugwunna-0829b9212/" className="footer__social-link" target="_blank">
<img className='uil' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAShJREFUSEvl1bsuBVEUh/HfEToRBZU3oNXoKFQKIa6hk/AWEo/hUiLuodCJS6PRewKdqLSE7GQ5OTm3ccyc09jV7Mza3zf7v2fNlLR5lNrM13HBHcZz7uoeEz+M6h185YTXcJsJrqN66g/SMreR4ACrAT7EcouSTMEu1gO6h7WiBe/YRxdW0Fu04BXPAR3GIB5iPoR+bOMDI5ireoDMiI6xFIuOsEi5Z2bwhJcK6Ca2KuaZgpOApjVJthBxNXqNu/GGvpDkEvTgCqMhTo2VxiPGihCkLr0N0A424voS00UI0hlcBKhelOlWZkSnsf1UnCDzSDl/YhbnITiLe5V1/0TQrNEGorlSFPXqfhVRi1+GmvKGh1zED+cGkz/Kjv8y80bTOKvCyQH8BlH5UhnfrraxAAAAAElFTkSuQmCC"/>
      
      </a>
      <a href="https://github.com/DevelopedByPresh" className="footer__social-link" target="_blank">
      <img className="uil" 
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAh5JREFUSEu11UmojmEUB/DfFdmQBZIsUeYiWShFlLAxlCFFCZlSkrFEMoQSyRB2hJJhw46FBUpExiJZWBiSBSlEOrfz1Xvf+w2vxT2b73ue53/O/znnOef/tulia+vi+FoR9MBszMBoDKXd5x2e4Cau4HejizYjmIaTGNIiy7dYiVv1cI0ItmB/3rZKFf9iKw6VwfUINuNAlah1MBtwpLhfJpiSqcZ+1HcZVmMHuuFN1ns44tb7cALHMC/3JuFujaRI0BPPMTgPd2Nn/o93+Ihvue6FgXid6+3Ym/9fYAz+xLpIsACXCulFqpFyFTuITQXgrKxAB4LzWFwATcS9KtHzxo8LFz6OdeUMojwjCmmOrBi8BnuIcbl4gAllgk/on4DrmPOfBBewKH2+oF+Z4AMGJOA2pv4nwQ3MTJ/v6F0meISxCYhu6dtMAkrkISmf0Sf3XyFaucMjn8HyguMKnK2YRWBPF7DnsKRMEDW/iq+IFKPPY/xDj340IIp5WJsDF4NYs/m4XCaImYhOGoTpWIWl+JU9vRA/M0KU5FriupfIX2JUTnUnuZ6b8vse43PwJmcWa0qBLiJIyxaViC5st3pidxTrU3/2NHmDXQUpqcEOY2PRp5Fch7iFFt3BUzzDqRJZnAeuZqHCleS65hCqGHoU0xnyHQ9etFDSbbifmhW/nazVJzPO45MZMh2ZFG1Y9no8dkNrRdDMt9JZlxP8A6W4Yxl3/dANAAAAAElFTkSuQmCC"
      />

      </a>
      <a href="https://api.whatsapp.com/send?phone=08107724784&text=hello, more information!" className="footer__social-link" target="_blank">
    
      <img className="uil" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAhVJREFUSEvN1UnITnEUBvDfx8JMdoREiChThg1JmVI2hqIUiTInZcGGYiE2xpQSxUKxUJJZSCFiY0ghsjKkKGTu6Lxfb2/3vq/NW99Z3e7//M9zz3Oe89wWTY6WJtfXJgDGYgEmYwh+4Rbu4AIe1GOhXgf9cBgz8DkLPcE3jMZI9MBubMH3IqAygPjSa+iADTiOPwUF1ibAC8zDo9qcIoBeuJdUTMXzBkIYgTNoh+H4Up1fBHAO4zEOL9EH3fC0DlCA3McRrKwHMAk3sCyTh2U37zCghKZKvc3Ygem4VHlZ28E+LEVP/MAm7MzkGPbFOl10SjEEXXPLAB7iNeZkwiocyOcAPtpgHnE/YlQZwBvEDFZkQu+cw0eEbH82ADiEReheBvAsh7WwqlBIcS8OYk2DOQSd69GxDOB88j+h5ktP5jYHvwHYOekK1ZxCdBgReWMwuAxgew62L95WgbTHHqzGJ/55WEg3YlfeiT14j9NYXgYwMBdrG7YW8D0t6RqaZ78xM2UZ3J9Ia2lVW9GihRLC0MLkyiJoiEG+ShH0x12EV02pvlQL0CX5jH3Y2EAxleMofjkBY/tD5q1RCzAbZ7EY0X5s5W0cw9cawJjTEqxLZYVvNTS7/TnISq24MCit+HrSEa4aXjUxk27m9heaYm0H4SGReBVX8AFdMR+zEPING3mcnhUSDe5Lo038Mv9z1sVpTe/gL9I6cRkc/rZLAAAAAElFTkSuQmCC"/>
      </a>

</div>



<span className="footer__copy">  &#169; Precious. All rights reserved.</span> 


    </div>
   


 </footer>

   
    )
}


export default Footer