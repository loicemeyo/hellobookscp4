import React from "react";

/**
 * This component displays the footer
 */

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div class="container">
          <p class="footer-a">HelloBooks &copy; 2018</p>
          <p class="footer-block"> Contact <a href={"mailto:loicemeyo@gmail.com"} style={{color:'aliceblue'}}> Loice Meyo </a></p>
          <p class="footer-block">  Designed by Odi </p>
    
        </div>
      </div>
    );
  }
}
export default Footer;