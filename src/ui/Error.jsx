import { useNavigate, useRouteError } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const errormsg = useRouteError();
  // console.log(errormsg.message);
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{errormsg.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default NotFound;
