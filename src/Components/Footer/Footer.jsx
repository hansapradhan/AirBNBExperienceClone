//import styled from "styled-components";
import { Globe,  Facebook, Twitter, Instagram } from "react-feather";
import "./Footer.css";


export default function Footer() {
  return (
    <footer>
      <div className="footerInner">
        <span>
          <h2>About</h2>
          <ul>
            <li>How Airbnb works</li>
            <li>Newsroom</li>
            <li>Airbnb 2021</li>
            <li>Investors</li>
            <li>Airbnb Plus</li>
            <li>Airbnb Luxe</li>
            <li className="lg-hidden">HotelTonight</li>
            <li className="lg-hidden">Airbnb for Work</li>
            <li className="lg-hidden">Made possible by Hosts</li>
            <li className="lg-hidden">Careers</li>
            <li className="lg-hidden">Founders&apos; Letter</li>
          </ul>
        </span>
        <span>
          <h2>Community</h2>
          <ul>
            <li>Diversity & Belonging</li>
            <li>Accessibility</li>
            <li>Airbnb Associates</li>
            <li>Frontline Stays</li>
            <li>Guest Referrals</li>
            <li>Airbnb.org</li>
          </ul>
        </span>
        <span>
          <h2>Host</h2>
          <ul>
            <li>Host your home</li>
            <li>Host an Online Experience</li>
            <li>Host an Experience</li>
            <li>Responsible hosting</li>
            <li>Resource Centre</li>
            <li>Community Centre</li>
          </ul>
        </span>
        <span>
          <h2>Support</h2>
          <ul>
            <li>Our COVID-19 Response</li>
            <li>Help Centre</li>
            <li>Cancellation options</li>
            <li>Neighbourhood Support</li>
            <li>Trust & Safety</li>
          </ul>
        </span>
        <span className="footer-bottom">
          <p>
            <span>
              <Globe className="globe" />
              English
            </span>
            <span className={"cursor-pointer"}>
             <span className="mr-[0.5rem] font-extrabold ">£ </span> GPB
            </span>
            <span className={"mr-[1rem]"}>
              <Facebook />
            </span>
              <Twitter/>
            <span >
            </span>
            <span className={"ml-0"}>
              <Instagram />
            </span>
          </p>
          <p>
            &copy; 2023{" "}
            <a href="https://www.linkedin.com/in/hansapradhan/" target="_blank" rel="noreferrer">
              Hansa Pradhan
            </a>
          </p>
        </span>
      </div>
    </footer>
  );
}
