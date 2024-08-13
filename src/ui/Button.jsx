import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Button({ children, disabled, to }) {
  if (to) {
    return <Link to={to}>{children}</Link>;
  }
  return (
    <button
      className="inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 disabled:cursor-not-allowed"
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
