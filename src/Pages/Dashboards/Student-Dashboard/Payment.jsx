import React from "react";
import Checkout from "./Checkout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useAddedClass from "../../../Hooks/useAddedClass";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const Payment = () => {
    const [addedClass] = useAddedClass()
    const total = addedClass.reduce((sum, classes) => classes.course_price + sum, 0)
    const course_price = parseFloat(total.toFixed(2));
    console.log(addedClass);
  return (

      <div className="mx-auto text-center space-y-5">
        <p className="text-blue-500 py-10 text-3xl text-center">
          Payments Page
        </p>
        <Elements stripe={stripePromise}>
          <Checkout
          course_price = {course_price}
          classes = {addedClass}
          ></Checkout>
        </Elements>
      </div>

  );
};

export default Payment;
