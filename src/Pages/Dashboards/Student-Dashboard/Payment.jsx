import React from "react";
import Checkout from "./Checkout";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useAddedClass from "../../../Hooks/useAddedClass";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

const Payment = () => {
  const [addedClass] = useAddedClass();
  // const classes = addedClass.map((classItem) => classItem);
  // console.log(classes);
  // const course_prices = classes.map((classItem) => classItem[0].course_price);
  // console.log(course_prices);
  return (
    <div className="mx-auto text-center space-y-5">
      <p className="text-blue-500 py-10 text-3xl text-center">Payments Page</p>
      <Elements stripe={stripePromise}>
        {
          addedClass.map(classes =>  <Checkout classes={classes}></Checkout>)
        }
      </Elements>
    </div>
  );
};

export default Payment;
