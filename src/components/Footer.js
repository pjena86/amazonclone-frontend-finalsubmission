import "../css/Footer.css";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {


    return (
        <footer className="footer">
            <div className="footer_content_area1">
                <div class="waitingForConnection"> Stay Home. Save lives. &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Help stop corona virus.  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   We're in this together!</div>

            </div>
            <div>
                < div className="footer_content_area2">

                    <div class=" footer_content_area2-section1">
                        <h5 class="headin5_amrc col_white_amrc pt2">Get to Know us</h5>

                        <ul class="footer_ul_amrc">
                            <li><a href="http://webenlance.com">Careers</a></li>
                            <li><a href="http://webenlance.com">Amazon and Our Planet</a></li>
                            <li><a href="http://webenlance.com">Investor Relations</a></li>
                            <li><a href="http://webenlance.com">Press Releases</a></li>
                        </ul>
                    </div>
                    <div class=" col-sm-4 col-md  col-6 col">
                        <h5 class="headin5_amrc col_white_amrc pt2">Make Money with us</h5>

                        <ul class="footer_ul_amrc">
                            <li><a href="http://webenlance.com">Sell on Amazon</a></li>
                            <li><a href="http://webenlance.com">Sell Under Amazon Accelerator</a></li>
                            <li><a href="http://webenlance.com">Amazon Associates</a></li>
                            <li><a href="http://webenlance.com">Sell on Amazon Handmade</a></li>
                            <li><a href="http://webenlance.com">Advertise Your Products</a></li>
                            <li><a href="http://webenlance.com">Independently Publish with Us</a></li>
                            <li><a href="http://webenlance.com">Host an Amazon Hub</a></li>
                        </ul>
                    </div>

                    <div class=" col-sm-4 col-md  col-6 col">
                        <h5 class="headin5_amrc col_white_amrc pt2">Amazon Payment Products</h5>

                        <ul class="footer_ul_amrc">
                            <li><a href="http://webenlance.com">Amazon.ca Rewards Mastercard</a></li>
                            <li><a href="http://webenlance.com">Shop with Points</a></li>
                            <li><a href="http://webenlance.com">Reload Your Balance</a></li>
                            <li><a href="http://webenlance.com">Amazon Currency Converter</a></li>
                            <li><a href="http://webenlance.com">Gift Cards</a></li>
                            <li><a href="http://webenlance.com">Amazon Cash</a></li>
                        </ul>

                    </div>


                    <div class=" col-sm-4 col-md  col-12 col">
                        <h5 class="headin5_amrc col_white_amrc pt2">Let Us Help You</h5>


                        <ul class="footer_ul2_amrc">
                            <li><a href="http://webenlance.com">COVID-19 and Amazon</a></li>
                            <li><a href="http://webenlance.com">Shipping Rates & Policies</a></li>
                            <li><a href="http://webenlance.com">Amazon Prime</a></li>
                            <li><a href="http://webenlance.com">Returns Are Easy</a></li>
                            <li><a href="http://webenlance.com">Manage your Content and Devices</a></li>
                            <li><a href="http://webenlance.com">Customer Service</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer_content_area3">
                    <div class="footer_logo">
                        <a href="/"><img className="header_logo"
                            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="headerLogo" /> </a>
                        <a
                            href="https://www.youtube.com/"
                            className="youtube social"
                        >
                            <FontAwesomeIcon icon={faYoutube} size="2x" />
                        </a>
                        <a
                            href="https://www.facebook.com/"
                            className="facebook social"
                        >
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a
                            href="http://www.instagram.com/"
                            className="instagram social"
                        >
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                        <a href="https://www.twitter.com/" className="twitter social">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                    </div>
                </div>



            </div>
        </footer>

    )
}

export default Footer

