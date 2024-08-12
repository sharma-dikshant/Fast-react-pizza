import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

export default function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formErrors = useActionData();
  console.log(formErrors);

  const cart = fakeCart;

  return (
    <div>
      <h2>Ready to order? Let&apos;s go!</h2>

      {/* <Form method="POST" action="/order/new"> */}
      {/* Form automatically send post request to nearest route  */}
      <Form method="POST">
        <div>
          <label>First Name</label>
          <input className="input" type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input className="input" type="tel" name="phone" required />
          </div>
          {formErrors?.errors?.phone && <p>{formErrors.errors.phone}</p>}
        </div>

        <div>
          <label>Address</label>
          <div>
            <input
              className="input"
              type="text"
              name="address"
              required
            />
          </div>
        </div>

        <div>
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <input type="hidden" value={JSON.stringify(cart)} name="cart" />

        <div>
          <button
            className="inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            Order now
          </button>
        </div>
      </Form>
    </div>
  );
}

// as soon as the form is submitted the react-router will call this function behind the scenes

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // console.log("Form data", data);

  //some data modelling

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  };

  // console.log("Order", order);

  const errors = {};
  if (!isValidPhone(order.phone)) {
    errors.phone = "Invalid phone number";
  }
  if (Object.keys(errors).length) {
    return { errors };
  }

  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}
