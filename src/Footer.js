import {
    IconBrandDiscord,
    IconBrandFacebook,
    IconBrandTwitter,
    IconBrandYoutube,
  } from "@tabler/icons-react";
  import "./Footer.css"
  
  function Footer() {
    return (
      <>
        <footer>
          <div className="footer-content">
            <div className="footer-content__socials">
              <IconBrandTwitter className="footer-icon" />
              <IconBrandDiscord className="footer-icon" />
              <IconBrandFacebook className="footer-icon" />
              <IconBrandYoutube className="footer-icon" />
            </div>
            <div className="footer-content__text">
              <p className=" font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Privacy</p>
              <p className=" font-bold text-xl bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Terms of Use</p>
            </div>
          </div>
        </footer>
      </>
    );
  }
  
  export default Footer;