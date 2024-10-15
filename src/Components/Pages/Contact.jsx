import { useNavigate } from "react-router-dom";

const Contact = () => {
  // const navigate = useNavigate();
  const navigate = useNavigate();
  const backHome = (event) => {
    event.preventDefault();
    document.body.classList.add("fade-out");
    setTimeout(function () {
      navigate("/");
    }, 500);
  };

  return (
    <div
      id="main"
      className="min-h-screen overflow-hidden relative text-cyan-50"
    >
      <div className="container pb-9 pt-9 pl-8 pr-8">
        <div className="mb-5 mt-5">
          <i
            className="back fa-solid fa-arrow-left fa-xl cursor-pointer transition-all"
            id="backarrow"
            style={{ color: "#b197fc" }}
            onClick={backHome}
          ></i>
        </div>
        <h1 className="text-4xl font-extrabold tracking-wider leading-10 text-left mb-8">
          Contact Form
        </h1>
        <form action="#/" className="h-full">
          <div className="grid grid-cols-1 mb-8">
            <label htmlFor="name" className="text-xl tracking-wider font-bold">
              Name
            </label>
            <input
              type="text"
              className="p-1 w-full bg-transparent border-b border-indigo-500 text-xl outline-none my-4"
            />
          </div>
          <div className="grid grid-cols-1 mb-8">
            <label htmlFor="name" className="text-xl tracking-wider font-bold">
              Email
            </label>
            <input
              type="email"
              className="p-1 w-full bg-transparent border-b border-indigo-500 text-xl outline-none my-4"
            />
          </div>
          <div className="grid grid-cols-1 mb-8">
            <label htmlFor="name" className="text-xl tracking-wider font-bold">
              Message
            </label>
            <textarea
              name="message"
              className="p-1 w-full bg-transparent border-b border-indigo-500 text-xl outline-none my-4"
              id="message"
            ></textarea>
          </div>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg tracking-widest text-xl px-6 py-3 text-center me-2 mb-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
