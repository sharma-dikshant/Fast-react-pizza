import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
function AppLayout() {
  return (
    <div>
      <Header />
      <main>content</main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
