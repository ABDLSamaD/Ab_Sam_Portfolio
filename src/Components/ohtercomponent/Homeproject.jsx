import PrElectricaImg from "../../Images/electrica.png";
import PrCinematicketImg from "../../Images/cinematicketmanagment.png";

const Homeproject = () => {
  return (
    <section id="project">
      <div className="container md:w-full">
        <div className="flex items-center justify-between">
          <span className="text-cyan-50 text-lg">0/2</span>
          <span className="text-cyan-50 text-lg">Recent Projects</span>
          <span className="text-cyan-50 text-lg">Creative Development</span>
        </div>
        <div className="text-xl text-gray-500 tracking-wide leading-6 my-7">
          Most of time is spent building web products that i either find
          interesting or paid to do .Some of these projects are open source, so
          feel free to explore them and even contribute. Feel free to get in
          touch with me if you have any cool ideas that you had like to discuss
          further or work on with me .
        </div>
        <div className="cards grid grid-cols-1 p-8 gap-4 md:grid-cols-2">
          <div className="column-1">
            <img
              className="aspect-video object-fill h-60 md:h-80 rounded cursor-pointer transition ease-in-out delay-500 z-50"
              src={PrCinematicketImg}
              alt="does'nt show"
            />
            <h2 className="text-cyan-50 text-2xl tracking-wider leading-6 whitespace-nowrap my-3">
              Cinema Ticket Managment
            </h2>
            <p className="leading-6 text-slate-300 tracking-wider my-5 text-base capitalize">
              A Cinema Ticket Management System is a software solution designed
              to handle the sale, reservation, and tracking of movie tickets. It
              streamlines the process for both cinema operators and customers,
              ensuring smooth transactions and management of seating
              arrangements.
            </p>
          </div>
          <div className="column-2">
            <img
              className="aspect-video object-fill h-60 md:h-80 rounded cursor-pointer transition ease-in-out delay-500 z-50"
              src={PrElectricaImg}
              alt="does'nt show"
            />
            <h2 className="text-cyan-50 text-2xl tracking-wider leading-6 whitespace-nowrap my-3">
              Electrica
            </h2>
            <p className="leading-6 text-slate-300 tracking-wider my-5 text-base capitalize">
              An Electrical Contractor Website is designed to showcase the
              services and expertise of an electrician or electrical contractor,
              providing potential clients with essential information and an easy
              way to contact or request services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homeproject;
