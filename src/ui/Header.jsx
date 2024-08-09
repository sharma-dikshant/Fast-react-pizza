import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Fast React Pizza and Co.</Link>
      <SearchOrder />
      <p>Dikshant</p>
    </header>
  );
}

export default Header;
