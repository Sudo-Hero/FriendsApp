import React, { Component } from "react";

class Footer extends Component{
    render (){
        return (
      <footer>
        <div className="footer-container">
            <div className="footer-section">
                <h3>Company</h3>
                <a href="#">About Us</a>
                <a href="#">Services</a>
                <a href="#">Team</a>
                <a href="#">Careers</a>
            </div>
            
            <div className="footer-section">
                <h3>Support</h3>
                <a href="#">Help Center</a>
                <a href="#">Contact Us</a>
                <a href="#">FAQs</a>
                <a href="#">Feedback</a>
            </div>
            
            <div className="footer-section">
                <h3>Legal</h3>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Policy</a>
            </div>
            
            <div className="footer-section">
                <h3>Connect</h3>
                <div className="social-links">
                    <a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" title="Twitter"><i className="fab fa-twitter"></i></a>
                    <a href="#" title="Instagram"><i className="fab fa-instagram"></i></a>
                    <a href="#" title="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                </div>
                <p>contact@example.com</p>
                <p>+1 (234) 567-8900</p>
            </div>
        </div>
        
        <div className="footer-bottom">
            <p>&copy; 2023 Company Name. All rights reserved.</p>
        </div>
    </footer>
        )
    }
}

export default Footer;