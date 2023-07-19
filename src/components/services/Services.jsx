import React, {useState} from "react"
import  "./services.css"



const Services = ()=>{
    const [toggleState, setToggleState] = useState(0)



    const toggleTab = (index)=>{
        setToggleState(index)
    }





    return(
    <section className="services section" id="services">

<h2 className="section__title">Services</h2>
        <span className="section__subtitle">What I offer</span>


<div className="services__container container grid">

    <div className='services__content'>
        <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className='services__title'>HTML/CSS/JavaScript  <br/> development</h3>
        </div>


<span className="services__button"  onClick={()=>toggleTab(1)}> View More
 <i className='uil uil-arrow-right services__button-icon'></i> 
 </span>


<div className={toggleState === 1 ? 'services__modal active-modal' : 'services__modal'}>
    <div className="services__modal-content">
        <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>

        <h3 className="services__modal-title">Frontend Developer</h3>
        <p className="services__modal-description"> With more Than 3 years of Experience, 
         I focus on three fundamental technologies used in web development.
        
        </p>


        <ul className="services__modal-services grid">

            
        <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info"> create web pages that are visually appealing, interactive, and functional.</p>
            </li>

            <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info"> Develop the User Interface</p>
            </li>

            <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info"> Web Page Management</p>
            </li>


            <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info"> I create UX element Interactions.</p>
            </li>



            {/* <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info"> Design and mockups of Products for companies.</p>
            </li> */}
        </ul>


    </div>


</div>

    </div>


    <div className='services__content'>
        <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className='services__title'> Progressive web app <br/>  development </h3>
        </div>


<span className="services__button" onClick={()=>toggleTab(2)}> View More
 <i className='uil uil-arrow-right services__button-icon'></i> 
 </span>

 
<div className={toggleState === 2 ? 'services__modal active-modal' : 'services__modal'}>
    <div className="services__modal-content">
        <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>

        <h3 className="services__modal-title">Frontend Developer</h3>
        <p className="services__modal-description">I ensures the app's stability on any device.
        
        </p>


        <ul className="services__modal-services grid">

        <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info"> I help update an older or outdated front-end codebase to make it more modern, efficient, and effective</p>
            </li>


            <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info"> I create PWAs</p>
            </li>

       

            <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info"> I create UX element Interactions.</p>
            </li>


            <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info"> create web pages that are visually functional</p>
            </li>

            {/* <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info"> Design and mockups of Products for companies.</p>
            </li> */}
        </ul>


    </div>


</div>

    </div>







    <div className='services__content'>
        <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className='services__title'> Single-page app  <br/> development </h3>
        </div>


<span className="services__button" onClick={()=>toggleTab(3)}> View More <i className='uil uil-arrow-right services__button-icon'></i> </span>


<div className={toggleState === 3 ? 'services__modal active-modal' : 'services__modal'}>
    <div className="services__modal-content">
        <i className="uil uil-times services__modal-close" onClick={()=>toggleTab(0)}></i>

        <h3 className="services__modal-title">Frontend Developer</h3>
        <p className="services__modal-description">  I create a single HTML page and dynamically updates the content as the user interacts with the app.
        
        </p>


        <ul className="services__modal-services grid">

            <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">  I create a single HTML page</p>
            </li>

            <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">  I Provide full-cycle SPA development, using front-end frameworks.</p>
            </li>


            <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon"></i>
                <p className="services__modal-info">I analyze the specific needs of your project and  I deliver a functional and thought-out front end</p>
            </li>


        

      
        </ul>


    </div>


</div>

    </div>



    


</div>
        



    </section>
    )
}

export default Services