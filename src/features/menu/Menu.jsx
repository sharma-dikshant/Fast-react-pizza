import { useLoaderData } from "react-router";
import { getMenu } from "../../services/apiRestaurant";

function Menu() {
  const menu = useLoaderData();
  console.log(menu);
  return (
    <div>
      <h1>Menu</h1>
    </div>
  );
}

export default Menu;

export async function loader() {
  return await getMenu();
}
