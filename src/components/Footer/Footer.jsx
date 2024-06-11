import "./Footer.css";
import facebook_logo from "../../assets/facebook_icon.png";
import insta_logo from "../../assets/instagram_icon.png";
import twitter_logo from "../../assets/twitter_icon.png";
import youtube_logo from "../../assets/youtube_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={facebook_logo} alt="" />
        <img src={insta_logo} alt="" />
        <img src={twitter_logo} alt="" />
        <img src={youtube_logo} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright">© 1997 - 2024 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
