import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

function Herosection(props) {
  const { x, y } = props.position;
  const { height, width } = props.elementDimensions;
  const activeParallax = (depth = 15) => {
    let posX = (width / 2 - x) / depth;
    let posY = (height / 2 - y) / depth;
    return {
      transform: `translate(${posX}px, ${posY}px)`,
    };
  };

  return (
    <section
      id="home"
      className={
        props.light
          ? "home d-flex align-items-center light"
          : "home d-flex align-items-center"
      }
    >
      <div className="container">
        <div className="intro">
          <img src="https://i.ibb.co/VWWNF4q/logo.png" alt="Bolby" className="mb-4"  style={{height:250 }}/>

          <h1 className="mb-2 mt-0">Nishad Ahamed</h1>
          <p>
            I'm a{" "}
            <Typed
              strings={[
                "Machine learning engineer",
                "Fullstack developer",
                "Creative Designer",
                "Freelancer",
              ]}
              typeSpeed={80}
              backSpeed={40}
              attr="value"
              loop
            >
              <label value></label>
            </Typed>
          </p>

          <ul className="social-icons light list-inline mb-0 mt-4">
            <li className="list-inline-item">
              <a href="!#">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="!#">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="!#">
                <i className="fab fa-behance"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="!#">
                <i className="fab fa-dribbble"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="!#">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </li>
          </ul>

          <div className="mt-4">
            <Link
              className="btn btn-default"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Hire me
            </Link>
          </div>
        </div>

        <div className="scroll-down">
          <Link
            to="section-about"
            spy={true}
            smooth={true}
            duration={500}
            className="mouse-wrapper"
          >
            <span>Scroll Down</span>
            <span className="mouse">
              <span className="wheel"></span>
            </span>
          </Link>
        </div>

        <div className="parallax" data-relative-input="true">
          <svg
            width="27"
            height="29"
            className="layer p1"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(15)}
          >
            <path
              d="M21.15625.60099c4.37954 3.67487 6.46544 9.40612 5.47254 15.03526-.9929 5.62915-4.91339 10.30141-10.2846 12.25672-5.37122 1.9553-11.3776.89631-15.75715-2.77856l2.05692-2.45134c3.50315 2.93948 8.3087 3.78663 12.60572 2.22284 4.297-1.5638 7.43381-5.30209 8.22768-9.80537.79387-4.50328-.8749-9.08872-4.37803-12.02821L21.15625.60099z"
              fill="#FFD15C"
              fillRule="evenodd"
            />
          </svg>

          <svg
            width="26"
            height="26"
            className="layer p2"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(20)}
          >
            <path
              d="M13 3.3541L2.42705 24.5h21.1459L13 3.3541z"
              stroke="#FF4C60"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>

          <svg
            width="30"
            height="25"
            className="layer p3"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(25)}
          >
            <path
              d="M.1436 8.9282C3.00213 3.97706 8.2841.92763 14.00013.92796c5.71605.00032 10.9981 3.04992 13.85641 8 2.8583 4.95007 2.8584 11.0491-.00014 16.00024l-2.77128-1.6c2.28651-3.96036 2.28631-8.84002.00011-12.8002-2.2862-3.96017-6.5124-6.40017-11.08513-6.4-4.57271.00018-8.79872 2.43984-11.08524 6.4002l-2.77128-1.6z"
              fill="#44D7B6"
              fillRule="evenodd"
            />
          </svg>
          

          <svg
            width="15"
            height="23"
            className="layer p4"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(10)}
          >
            <rect
              transform="rotate(30 9.86603 10.13397)"
              x="7"
              width="3"
              height="25"
              rx="1.5"
              fill="#FFD15C"
              fillRule="evenodd"
            />
          </svg>

          <svg
            width="15"
            height="23"
            className="layer p5"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(8)}
          >
            <rect
              transform="rotate(30 9.86603 10.13397)"
              x="7"
              width="3"
              height="25"
              rx="1.5"
              fill="#6C6CE5"
              fillRule="evenodd"
            />
          </svg>
          <svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="40"
  height="53"
  className="layer p6"
  viewBox="0 0 74 74" 
  stroke-width="3" 
  stroke="#ffffff" 
  fill="none"
  style={activeParallax(8)}
>
  <circle cx="34.52" cy="11.43" r="5.82"/>
  <circle cx="53.63" cy="31.6" r="5.82"/>
  <circle cx="34.52" cy="50.57" r="5.82"/>
  <circle cx="15.16" cy="42.03" r="5.82"/>
  <circle cx="15.16" cy="19.27" r="5.82"/>
  <circle cx="34.51" cy="29.27" r="4.7"/>
  <line x1="20.17" y1="16.3" x2="28.9" y2="12.93"/>
  <line x1="38.6" y1="15.59" x2="49.48" y2="27.52"/>
  <line x1="50.07" y1="36.2" x2="38.67" y2="46.49"/>
  <line x1="18.36" y1="24.13" x2="30.91" y2="46.01"/>
  <line x1="20.31" y1="44.74" x2="28.7" y2="48.63"/>
  <line x1="17.34" y1="36.63" x2="31.37" y2="16.32"/>
  <line x1="20.52" y1="21.55" x2="30.34" y2="27.1"/>
  <line x1="39.22" y1="29.8" x2="47.81" y2="30.45"/>
  <line x1="34.51" y1="33.98" x2="34.52" y2="44.74"/>
</svg>

          <svg
            width="26"
            height="26"
            className="layer p7"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(22)}
          >
            <path
              d="M13 22.6459L2.42705 1.5h21.1459L13 22.6459z"
              stroke="#FFD15C"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>

          <svg
            width="19"
            height="21"
            className="layer p8"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(15)}
          >
            <rect
              transform="rotate(-40 6.25252 10.12626)"
              x="7"
              width="3"
              height="25"
              rx="1.5"
              fill="#6C6CE5"
              fillRule="evenodd"
            />
          </svg>

          <svg
            width="30"
            height="25"
            className="layer p9"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(10)}
          >
            <path
              d="M29.8564 16.0718c-2.85854 4.95114-8.1405 8.00057-13.85654 8.00024-5.71605-.00032-10.9981-3.04992-13.85641-8-2.8583-4.95007-2.8584-11.0491.00014-16.00024l2.77128 1.6c-2.28651 3.96036-2.28631 8.84002-.00011 12.8002 2.2862 3.96017 6.5124 6.40017 11.08513 6.4 4.57271-.00018 8.79872-2.43984 11.08524-6.4002l2.77128 1.6z"
              fill="#6C6CE5"
              fillRule="evenodd"
            />
          </svg>

          <svg
            width="47"
            height="29"
            className="layer p10"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(23)}
          >
            <g fill="#44D7B6" fillRule="evenodd">
              <path d="M46.78878 17.19094c-1.95535 5.3723-6.00068 9.52077-10.61234 10.8834-4.61167 1.36265-9.0893-.26708-11.74616-4.27524-2.65686-4.00817-3.08917-9.78636-1.13381-15.15866l2.34923.85505c-1.56407 4.29724-1.2181 8.92018.90705 12.12693 2.12514 3.20674 5.70772 4.5107 9.39692 3.4202 3.68921-1.0905 6.92581-4.40949 8.48988-8.70673l2.34923.85505z" />
              <path d="M25.17585 9.32448c-1.95535 5.3723-6.00068 9.52077-10.61234 10.8834-4.61167 1.36264-9.0893-.26708-11.74616-4.27525C.16049 11.92447-.27182 6.14628 1.68354.77398l2.34923.85505c-1.56407 4.29724-1.2181 8.92018.90705 12.12692 2.12514 3.20675 5.70772 4.5107 9.39692 3.4202 3.68921-1.0905 6.92581-4.40948 8.48988-8.70672l2.34923.85505z" />
            </g>
          </svg>

          <svg
            width="33"
            height="20"
            className="layer p11"
            xmlns="http://www.w3.org/2000/svg"
            style={activeParallax(18)}
          >
            <path
              d="M32.36774.34317c.99276 5.63023-1.09332 11.3614-5.47227 15.03536-4.37895 3.67396-10.3855 4.73307-15.75693 2.77837C5.76711 16.2022 1.84665 11.53014.8539 5.8999l3.15139-.55567c.7941 4.50356 3.93083 8.24147 8.22772 9.8056 4.29688 1.56413 9.10275.71673 12.60554-2.2227C28.34133 9.98771 30.01045 5.4024 29.21635.89884l3.15139-.55567z"
              fill="#FFD15C"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
