import React,{useState} from "react"
import './qualification.css'



const Qualification = ()=>{

    const [toggleState, setToggleState] = useState(1)



    const toggleTab = (index)=>{
        setToggleState(index)
    }






    return(
     <section className="qualification section">


<h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>




<div className="qualification__container container">

<div className="qualification__tabs">
<div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button  button--flex"} onClick={()=>toggleTab(1)}>
    <i className='uil uil-graduation-cap qualification__icon'></i>
    Education

</div>


<div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button  button--flex"} onClick={()=>toggleTab(2)}>
    <i className='uil uil-briefcase-alt  qualification__icon'></i>
    Experience

</div>


</div>





<div className="qualification__sections">
  
  
<div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
    
  
  
<div className="qualification__data">
  
<div>
<h3 className="qualification__title">Ecole Bilingue d'lest</h3>
<span className="qualification__subtitle">Primary Education</span>
<div className="qualification__calendar">
<i className='uil uil-calendar-alt'></i> 2005-2009

</div>

</div>


<div>
<span className="qualification__rounder"></span>
<span className="qualification__line"></span>
</div>



  </div>


    
<div className="qualification__data">
    <div></div>

    <div>
  <span className="qualification__rounder"></span>
  <span className="qualification__line"></span>
  </div>
  
  <div>
  <h3 className="qualification__title">Rochas College</h3>
  <span className="qualification__subtitle">Secondary Education</span>
  <div className="qualification__calendar">
  <i className='uil uil-calendar-alt'></i> 2009 - 2015
  
  </div>
  
  </div>
  
  

  
  
  
    </div>



    <div className="qualification__data">
  
<div>
<h3 className="qualification__title">Federal University of Technology Owerri.</h3>
<span className="qualification__subtitle">University Degree</span>
<div className="qualification__calendar">
<i className='uil uil-calendar-alt'></i> 2016 - 2021

</div>

</div>


<div>
<span className="qualification__rounder"></span>
<span className="qualification__line"></span>
</div>



  </div>


    
<div className="qualification__data">
    <div></div>

    <div>
  <span className="qualification__rounder"></span>
  <span className="qualification__line"></span>
  </div>
  
  {/* <div>
  <h3 className="qualification__title">Web Design</h3>
  <span className="qualification__subtitle">Spain - Institute</span>
  <div className="qualification__calendar">
  <i className='uil uil-calendar-alt'></i> 2012 - Present
  
  </div>
  
  </div> */}
  
  

  
  
  
    </div>




 




  </div>




  <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
    
  
  
<div className="qualification__data">
  
<div>
<h3 className="qualification__title">Frontend Engineer </h3>
<span className="qualification__subtitle">Adrolly</span>
<div className="qualification__calendar">
<i className='uil uil-calendar-alt'></i> March 20221 - December 2021

</div>

</div>


<div>
<span className="qualification__rounder"></span>
<span className="qualification__line"></span>
</div>



  </div>


    
<div className="qualification__data">
    <div></div>

    <div>
  <span className="qualification__rounder"></span>
  <span className="qualification__line"></span>
  </div>
  
  <div>
  <h3 className="qualification__title">Frontend Engineer</h3>
  <span className="qualification__subtitle">BloomX</span>
  <div className="qualification__calendar">
  <i className='uil uil-calendar-alt'></i> April 2022  - July 2022
  
  </div>
  
  </div>
  
  

  
  
  
    </div>



    <div className="qualification__data">
  
<div>
<h3 className="qualification__title">Frontend Engineer</h3>
<span className="qualification__subtitle">Ceed Solutions</span>
<div className="qualification__calendar">
<i className='uil uil-calendar-alt'></i> August 2022 - Current

</div>

</div>


<div>
<span className="qualification__rounder"></span>
<span className="qualification__line"></span>
</div>



  </div>







 




  </div>

</div>


</div>

     </section>
    )
}


export default Qualification