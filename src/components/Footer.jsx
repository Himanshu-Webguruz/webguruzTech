import dcma from "../../public/images/dmca.png";
import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faFacebook,
  faInstagram,
  faYoutube,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import AccordianFooter from "./AccordianFooter";
const Footer = () => {
  return (
    <footer className="footer-main pt-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-2 col-xs-12 footer-sub one">
            <h3 className="mb-4">About</h3>
            <ul>
              <li>
                <Link href="/">Our company</Link>
              </li>
              <li>
                <Link href="#">Core Team</Link>
              </li>
              <li>
                <Link href="/careers">Career</Link>
              </li>
              <li>
                <Link href="#">CSR</Link>
              </li>
              <li>
                <Link href="#">How We Work</Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-2 col-xs-12 footer-sub two">
            <h3  className="mb-4">Services</h3>
            <ul>
              <li>
                <Link href="#">Web Design</Link>
              </li>
              <li>
                <Link href="/services/web-development">Web Development</Link>
              </li>
              <li>
                <Link href="/services/content-management-system">
                  CMS Development
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="#">IT Services</Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-2 col-xs-12 footer-sub">
            <h3  className="mb-4">Technologies</h3>
            <ul>
              <li>
                <Link href="#">Blockchain</Link>
              </li>
              <li>
                <Link href="/categories/artificial-intelligence">
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link href="#">AR and VRs</Link>
              </li>
              <li>
                <Link href="#">Cloud Computing</Link>
              </li>
              <li>
                <Link href="#">Internet of Things</Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-2 col-xs-12 footer-sub">
            <h3  className="mb-4">Industries</h3>
            <ul>
              <li>
                <Link href="#">E-commerce</Link>
              </li>
              <li>
                <Link href="#">Healthcare</Link>
              </li>
              <li>
                <Link href="#">Education</Link>
              </li>
              <li>
                <Link href="#">Finance</Link>
              </li>
              <li>
                <Link href="#">Real Estate</Link>
              </li>
            </ul>
          </div>

          <div className="col-sm-2 col-xs-12 footer-sub">
            <h3  className="mb-4">Portfolio</h3>
            <ul>
              <li>
                <Link href="#">Robert James Realty</Link>
              </li>
              <li>
                <Link href="#">Global IP Partners</Link>
              </li>
              <li>
                <Link href="#">High Court of Punjab and Haryana</Link>
              </li>
            </ul>
          </div>
          <div className="col-sm-2 col-xs-12 footer-sub">
            <h3  className="mb-4">Resources</h3>
            <ul>
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
              <li>
                <Link href="#">Infographics</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="row py-4 border-botm d-flex align-items-center">
          <div className="col-sm-6 col-xs-12 footer-bottom social-icons justify-content-start">
            <ul className="d-flex align-items-center justify-content-start">
              <li className="px-2">
                <a
                  href="https://www.facebook.com/webguruztechnologies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Facebook page"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    height={20}
                    role="image"
                    aria-label="Facebook"
                  />
                </a>
              </li>
              <li className="px-2">
                <a
                  href="https://twitter.com/Webguruz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Twitter profile"
                >
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    height={20}
                    role="image"
                    aria-label="Twitter"
                  />
                </a>
              </li>
              <li className="px-2">
                <a
                  href="https://www.linkedin.com/company/webguru-technologies-pvt.-ltd./"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our LinkedIn page"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    height={20}
                    role="image"
                    aria-label="LinkedIn"
                  />
                </a>
              </li>
              <li className="px-2">
                <a
                  href="https://www.instagram.com/webguruz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Instagram page"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    height={20}
                    role="image"
                    aria-label="Instagram"
                  />
                </a>
              </li>
              <li className="px-2">
                <a
                  href="https://www.youtube.com/channel/UC-xaX1FJWj40ED-cTm2Lq6w"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Youtube channel"
                >
                  <FontAwesomeIcon
                    icon={faYoutube}
                    height={20}
                    role="image"
                    aria-label="Youtube"
                  />
                </a>
              </li>
              <li className="px-2">
                <a
                  href="https://in.pinterest.com/webguruz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit our Pinterest page"
                >
                  <FontAwesomeIcon
                    icon={faPinterest}
                    height={20}
                    role="image"
                    aria-label="Pinterest"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6 col-xs-12 footer-bottom right ">
            <div className="bottom-right-img d-flex align-items-center justify-content-end">
              <a
                href="https://www.dmca.com/Protection/Status.aspx?ID=2af704c9-ad37-4670-a717-28eb4c89e78b&refurl=https://webguruz.in/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DMCA Protected"
              >
                <Image src={dcma} alt="dcma" />
              </a>
              <p className="px-2 mb-0">Mobile App & Web Development Company</p>
            </div>
          </div>
          <AccordianFooter />
        </div>
        <div className="row copyright-btm">
          <div className="col-sm-7 col-xs-12 copyright">
            <p>
              Copyright @ 2024 WebGuruz Technologies Private Limited. | All
              Right Reserved
            </p>
          </div>
          <div className="col-sm-5 col-xs-12 right-privacy">
            <ul className="d-flex align-items-center justify-content-end">
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Term & Condition</Link>
              </li>
              <li>
                <Link href="#">SiteMap</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
