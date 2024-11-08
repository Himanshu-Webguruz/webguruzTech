import Image from 'next/image';
import industryseo1 from '../../../../public/images/seoimages/industryseo-1.svg'
import industryseo2 from '../../../../public/images/seoimages/industryseo-2.svg'
import industryseo3 from '../../../../public/images/seoimages/industryseo-3.svg'
import industryseo4 from '../../../../public/images/seoimages/industryseo-4.svg'
import industryseo5 from '../../../../public/images/seoimages/industryseo-5.svg'
import industryseo6 from '../../../../public/images/seoimages/industryseo-6.svg'
import industryseo7 from '../../../../public/images/seoimages/industryseo-7.svg'
import industryseo8 from '../../../../public/images/seoimages/industryseo-8.svg'
import industryseo9 from '../../../../public/images/seoimages/industryseo-9.svg'
import industryseo10 from '../../../../public/images/seoimages/industryseo-10.svg'
import industryseo11 from '../../../../public/images/seoimages/industryseo-11.svg'
import Icnbroad4 from "../../../../public/images/hubspotimages/educaate.svg";

// legal image in hospitality
// hospitality image in technology
// healthcare image in legal
// education image in automotive

const SeoIndustry = () => {
  return (
    <>
      <section className="seo-industry py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading-main text-center">
              <h2 className="mb-5">
              Industries We Serve
               {/* <span>SEO Services in India</span> */}
              </h2>
              <ul>
                <li>
                  <Image src={industryseo1} alt="E-commerce Icon" />
                  <p className="mt-4">E-commerce</p>
                </li>
                <li>
                  <Image src={industryseo4} alt="Legal Icon" />
                  <p className="mt-4">Legal</p>
                </li>
                <li>
                  <Image src={industryseo2} alt="Hospitality Icon" />
                  <p className="mt-4">Hospitality</p>
                </li>
                <li>
                  <Image src={industryseo8} alt="Healthcare Icon" />
                  <p className="mt-4">Healthcare</p>
                </li>
                <li>
                  <Image src={Icnbroad4} alt="Education Icon" />
                  <p className="mt-4">Education</p>
                </li>
                <li>
                  <Image src={industryseo5} alt="Automotive Icon" />
                  <p className="mt-4">Automotive</p>
                </li>
                <li>
                  <Image src={industryseo7} alt="Real Estate Icon" />
                  <p className="mt-4">Real Estate</p>
                </li>
                <li>
                  <Image src={industryseo3} alt="Technology Icon" />
                  <p className="mt-4">Technology</p>
                </li>
                <li>
                  <Image src={industryseo9} alt="Non-profit Icon" />
                  <p className="mt-4">Non-profit</p>
                </li>
                <li>
                  <Image src={industryseo10} alt="Finance Icon" />
                  <p className="mt-4">Finance</p>
                </li>
                <li>
                  <Image src={industryseo11} alt="Retail Icon" />
                  <p className="mt-4">Retail</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SeoIndustry;
