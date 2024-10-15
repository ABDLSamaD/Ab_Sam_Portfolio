import { Link } from "react-router-dom";
import Header from "../Headers/Navbar";
import nameImage from "../../Images/name.png";
import userImage from "../../Images/IMG20240623161734.jpg";
import { useEffect, useState } from "react";
import Homeabout from "../ohtercomponent/Homeabout";
import Homeproject from "../ohtercomponent/Homeproject";
import Talk from "../ohtercomponent/Talk";
import Footer from "../ohtercomponent/Footer";

const Home = () => {
  const [isScrolledText, setIsScrolledText] = useState(false);
  const [isScrolledH2Text, setIsScrolledH2Text] = useState(false);
  const [isImageAnimated, setIsImageAnimated] = useState(false);

  document.addEventListener("DOMContentLoaded", function () {
    const image = document.querySelector("#home .row .image");

    image.addEventListener("animationend", function (e) {
      console.log(e);
    });
  });

  useEffect(() => {
    document.body.classList.remove("fade-out");
    const handleScroll = () => {
      setIsScrolledText(window.scrollY > 0);
      setIsScrolledH2Text(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const image = document.querySelector("#home .row .image");

    if (image) {
      const handleAnimationEnd = (e) => {
        if (e.animationName === "transformimg") {
          // When the image animation ends, set a state
          setIsImageAnimated(true);
        }
      };

      // Add event listener for animationend
      image.addEventListener("animationend", handleAnimationEnd);

      return () => {
        // Cleanup the event listener
        image.removeEventListener("animationend", handleAnimationEnd);
      };
    }
  }, []);

  return (
    <>
      <Header />
      <section id="home">
        <div className="container">
          <div className="row">
            <div className="words">
              <h1 className="text" id="text">
                <div className={isScrolledText ? "frontendtext" : ""}>
                  FRONT
                </div>
                <div className="text-line"></div>
                <div className={isScrolledText ? "frontendtexts" : ""}>END</div>
              </h1>
              <h2 id="h2text" className={isScrolledH2Text ? "backendtext" : ""}>
                <span>DEVELOPER</span>
              </h2>
            </div>
            <div className={`image ${isImageAnimated ? "show-pseudo" : ""}`}>
              <img src={userImage} alt="does'nt show" loading="lazy" />
            </div>
          </div>
          <div className="row-2 px-2">
            <div className="image-rotate">
              <img
                src={nameImage}
                id="imagerotate"
                alt="does'nt show"
                loading="lazy"
              />
            </div>
            <div className="text">
              <p>Available For Freelance</p>
              <p>
                <Link to="https://outlook.live.com/mail/0/" target="_blank">
                  Lets Talk
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Homeabout />
      <Homeproject />
      <Talk />
      <Footer />
    </>
  );
};

export default Home;
