import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Button({ children, disabled, to, onClick, type }) {
  const base =
    " inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 disabled:cursor-not-allowed focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-30 focus:ring-offset-2 ";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " py-2 px-4 md:px-5 md:py-2.5 text-xs",
  };
  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  if (onClick) {
    return <button onClick={onClick}>{children}</button>;
  }
  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
