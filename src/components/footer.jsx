import { useState } from 'react';

function Footer(){
  const [fbActive, setFbActive] = useState(false);
  const [instaActive, setInstaActive] = useState(false);
  const [linkedActive, setLinkedActive] = useState(false);


    return(
      <>
      <ul className="footer">
        <li> 
            <a  
              onMouseEnter={() => setFbActive(true)}
              onMouseLeave={() => setFbActive(false)}
              href="https://m.facebook.com/p/Vacan%C8%9Be-F%C4%83r%C4%83-Frontiere-VFF-100069755118295/" target="_blank" className="socials"> 
            
            {fbActive ? (
              <img src = "images/facebook_hover.png" width = "40px"></img>
            ) : (
              <img src = "images/facebook_normal.png" width = "40px"></img> 
            )}

            </a> 
        </li>

        <li> 
            <a
            onMouseEnter={() => setInstaActive(true)}
            onMouseLeave={() => setInstaActive(false)}
            href="https://www.instagram.com/vacantefarafrontiere/" target="_blank" className="socials">
            
            {instaActive ? (
              <img src="images/instagram_hover.png" width = "40px"></img> 
            ) : (
              <img src="images/instagram_normal.png" width = "40px"></img> 
            )}
           
            </a>
        </li>

        <li> 
          <a 
          onMouseEnter={() => setLinkedActive(true)}
          onMouseLeave={() => setLinkedActive(false)}
          href="https://www.linkedin.com/company/vacan-e-f-r-frontiere/" target="_blank" className="socials">
            
          {linkedActive ? (
            <img src="images/linkedin_hover.png" width = "40px"></img> 
          ) : (
            <img src="images/linkedin_normal.png" width = "40px"></img> 
          )}
            
          </a>
        </li>
        <li style={{ fontSize: '1vw', float: 'right' }}> &#9993; vacantefarafrontiere@gmail.com </li>
      </ul>
      </>
    )
}
 
export default Footer;