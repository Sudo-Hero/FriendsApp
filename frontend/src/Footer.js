import React, { Component } from "react";

class Footer extends Component{
    render (){
        return (
      <footer>
        <div class="footer-container">
            <div class="footer-section">
                <h3>Company</h3>
                <a href="#">About Us</a>
                <a href="#">Services</a>
                <a href="#">Team</a>
                <a href="#">Careers</a>
            </div>
            
            <div class="footer-section">
                <h3>Support</h3>
                <a href="#">Help Center</a>
                <a href="#">Contact Us</a>
                <a href="#">FAQs</a>
                <a href="#">Feedback</a>
            </div>
            
            <div class="footer-section">
                <h3>Legal</h3>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Cookie Policy</a>
            </div>
            
            <div class="footer-section">
                <h3>Connect</h3>
                <div class="social-links">
                    <a href="#" title="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" title="Twitter"><i class="fab fa-twitter"></i></a>
                    <a href="#" title="Instagram"><i class="fab fa-instagram"></i></a>
                    <a href="#" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <p>contact@example.com</p>
                <p>+1 (234) 567-8900</p>
            </div>
        </div>
        
        <div class="footer-bottom">
            <p>&copy; 2023 Company Name. All rights reserved.</p>
        </div>
    </footer>
        )
    }
}

export default Footer;