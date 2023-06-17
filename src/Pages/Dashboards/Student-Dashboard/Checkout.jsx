import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import './Checkout.css'

const Checkout = ({ course_price, classes }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [cardError, setcardError] = useState(" ");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setprocessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  console.log(classes);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    console.log(course_price);
    fetch("https://educam-server.vercel.app/create-payment-intent", {
      // fetch("http://localhost:3000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ course_price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [course_price]);
  console.log("clientSecret", clientSecret);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setcardError(error);
    } else {
      setcardError(" ");
      //   console.log("[PaymentMethod]", paymentMethod);
    }

    setprocessing(true);
    const { paymentIntent, confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      }
    );
    if (confirmError) {
      console.log("error", confirmError);
    }

    console.log("paymentIntent", paymentIntent);
    setprocessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const transactionId = paymentIntent.id;

      // save payments info
      const payment = {
        email: user?.email,
        transactionId,
        course_price,
        date: new date(),
        Quantity: classes.length,
        classes: classes.map((classes) => classes._id),
      };
      console.log(payment);

      // fetch("https://educam-server.vercel.app/payments", {
      fetch("http://localhost:3000/payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
          }
        });
    }
  };
  return (
    <>
      <form className=" w-96" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success w-full btn-sm mt-5"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>{" "}
      {cardError && <p className="text-red-500 text-center"> {cardError}</p>}
      {transactionId && (
        <p className="text-green-500">
          Payment Successfully! <br /> transactionId : {transactionId}
        </p>
      )}
    </>
  );
};

export default Checkout;
