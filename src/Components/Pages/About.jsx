import userImage from "../../Images/IMG20240623161734.jpg";
import { useNavigate } from "react-router-dom";
import Talk from "../ohtercomponent/Talk";
import Footer from "../ohtercomponent/Footer";
import { useEffect, useState } from "react";

const About = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(false);
  useEffect(() => {
    document.body.classList.add("fade-out");
    setTimeout(() => {
      document.body.classList.remove("fade-out");
      setState(true);
    }, 520);
  }, []);

  const backHome = (event) => {
    event.preventDefault();
    document.body.classList.add("fade-out");
    setTimeout(function () {
      navigate("/");
    }, 500);
    // document.body.classList.remove("fade-out");
  };

  return state ? (
    <div id="main" className="min-h-screen overflow-hidden relative">
      <div className="container pb-9 pt-9 pl-8 pr-8">
        <div className="mb-5 mt-5">
          <i
            className="back fa-solid fa-arrow-left fa-xl cursor-pointer transition-all"
            id="backarrow"
            style={{ color: "#b197fc" }}
            onClick={backHome}
          />
        </div>
        <div className="main flex justify-between flex-col flex-wrap h-full w-full gap-5">
          <div className="image py-5 w-56 h-72">
            <img
              src={userImage}
              className="w-full h-full object-cover relative rounded-xl md:w-32 lg:w-48"
              alt="Does'nt show"
              loading="lazy"
            />
          </div>
          <div className="flex items-start flex-col flex-wrap">
            <h1 className="text-4xl font-extrabold text-cyan-50 tracking-wider">
              Hi, I am Ab Samad ✌️
            </h1>
            <p className="text-lg font-sans tracking-wide text-cyan-50 leading-6 text-wrap mt-4">
              My name is Abdul Samad Chukwuemeke ,I am a Web Developer with a
              primary focus on front-end development. I Love Working at the
              intersection Of Creativity. I have a knack for creating
              user-friendly, aesthetically pleasing functional Web Products
              ranging from websites to Web-Apps When I am not building or
              exploring new web Technologies(blockchain).
            </p>
          </div>
          <div className="relative">
            <h2 className="text-3xl font-extrabold text-cyan-50 tracking-wider">
              Tools
            </h2>
            <p className="text-lg font-sans tracking-wide text-cyan-50 leading-6 text-wrap mt-4">
              My primary stack includes React, Tailwindcss &amp; more (React on
              the front-end and nodejs on the back-end). I have listed some of
              the languages/tools I have used or still use below (not *really*
              including frameworks).
            </p>
          </div>
          <div className="relative top-4 icons-framework grid grid-cols-2 md:grid-cols-3 gap-8 text-cyan-50 tracking-wider text-lg uppercase">
            <div className="one flex items-center gap-2">
              <i
                className="fa-brands fa-react fa-lg cursor-pointer"
                style={{ color: "#74c0fc" }}
              />
              <h3>React</h3>
            </div>
            <div className="two flex items-center gap-2">
              <i
                className="fa-brands fa-js fa-lg cursor-pointer"
                style={{ color: "#74c0fc" }}
              />
              <h3>Javascript</h3>
            </div>
            <div className="three flex items-center gap-2">
              <i
                className="fa-brands fa-html5 fa-lg cursor-pointer"
                style={{ color: "#74c0fc" }}
              />
              <h3>Html</h3>
            </div>
            <div className="fourth flex items-center gap-2">
              <i
                className="fa-brands fa-css3 fa-lg cursor-pointer"
                style={{ color: "#74c0fc" }}
              />
              <h3>Css</h3>
            </div>
            <div className="five flex items-center gap-2">
              <i>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC4lw_S63U8XiyK5yuVLVw1yvpqgdGjrC92vxZxDvQgoczWnPaWhI_tpcZeTfKOBwAfaE&usqp=CAU"
                  className="w-5 h-5 object-contain cursor-pointer"
                  alt="does'nt show"
                  loading="lazy"
                />
              </i>
              <h3>Tailwindcss</h3>
            </div>
            <div className="six flex items-center gap-2">
              <i
                className="fa-brands fa-node fa-lg cursor-pointer"
                style={{ color: "#74c0fc" }}
              />
              <h3>Nodejs</h3>
            </div>
            <div className="seven flex items-center gap-2">
              <i
                className="fa-brands fa-node-js fa-lg cursor-pointer"
                style={{ color: "#74c0fc" }}
              />
              <h3>Express js</h3>
            </div>
            <div className="eight flex items-center gap-2">
              <i>
                <img
                  src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
                  className="w-5 h-10 object-contain cursor-pointer"
                  alt="does'nt show"
                  loading="lazy"
                />
              </i>
              <h3>Mongodb</h3>
            </div>
            <div className="none flex items-center gap-2">
              <i>
                <img
                  src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_960_720.png"
                  className="w-7 h-10 object-contain cursor-pointer"
                  alt="does'nt show"
                  loading="lazy"
                />
              </i>
              <h3>Github</h3>
            </div>
            <div className="ten flex items-center gap-2">
              <i>
                <img
                  src="https://cdnlogo.com/logos/p/20/postman.svg"
                  className="w-5 h-5 object-contain cursor-pointer"
                  alt="does'nt show"
                  loading="lazy"
                />
              </i>
              <h3>Postman</h3>
            </div>
          </div>
        </div>
      </div>
      <Talk />
      <Footer />
    </div>
  ) : null;
};

export default About;
