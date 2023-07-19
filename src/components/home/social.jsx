import React from 'react';

const Social = () => {
  return (
    <div className="home__social">
      <a href="https://www.linkedin.com/in/precious-ugwunna-0829b9212/" className="home__social-icon" >
        <i className='uil uil-linkedin'></i>
      </a>
      <a href="https://api.whatsapp.com/send?phone=08107724784&text=hello, more information!" className="home__social-icon" target="_blank">
      <i className='uil uil-whatsapp'></i>
      </a>
      <a href="https://github.com/DevelopedByPresh" className="home__social-icon" target="_blank">
      <i className='uil uil-github-alt'></i> 
      </a>
    </div>
  );
};

export default Social
 