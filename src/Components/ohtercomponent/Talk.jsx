import { Link } from "react-router-dom";

const Talk = () => {
  return (
    <div className="relative top-10 talk overflow-hidden border-t-2 border-b-2 p-7 border-indigo-700 w-full">
      <h2 className="text-xl md:text-2xl font-bold text-cyan-50 uppercase tracking-wide hover:text-slate-400">
        <Link to="#/">
          Lets Talk Lets Collaroborate say hello wanna be starting something
        </Link>
      </h2>
    </div>
  );
};

export default Talk;
