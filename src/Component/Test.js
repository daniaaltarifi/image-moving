import React, { useRef, useEffect } from 'react';
import '../Style/Test.css'
import M from 'materialize-css'
const pexelsFabin = require("../images/image_news_06.jpg")
const pexelsJabinn = require("../images/image_project_06.jpg")
const pexelsPaul = require("../images/image_project_06.jpg")
const Test = () => {

useEffect(()=>{
let element=document.querySelectorAll('.parallax')
M.Parallax.init(element)
},[])


  return (
    <div className='container'>
      <div className='parallax-container'>
        <div className='parallax'>
          <img src={pexelsFabin} />
          </div>
        <div className='section  center-align'>
      
        </div>
      </div>
      <p>ascdscsdascdscsdascdscsdascdscsdascdscsdascdscsdascdscsdascdscsd<br/>ascdscsdascdscsdascdscsdascdscsdascdscsdascdscsdascdscsdascdscsd</p>
    </div>
  );
};

export default Test;
