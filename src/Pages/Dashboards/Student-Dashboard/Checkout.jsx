import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import "./Checkout.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Checkout = ({ classes }) => {
  const {course_price} = classes;
  const stripe = useStripe();
  const Navigate = useNavigate()
  const elements = useElements();
  const { user } = useAuth();
  const [cardError, setcardError] = useState(" ");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setprocessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  console.log(classes);

  useEffect(() => {
    console.log(course_price);
    if (course_price > 0) {
      fetch("https://educam-server.vercel.app/create-payment-intent", {
        // fetch("https://educam-server.vercel.app/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ course_price }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }
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
        date: new Date().toLocaleString("en-US", {
          day: "2-digit",
          month: "long",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }),
        classesId: classes._id,
        classImage: classes.course_image,
        className: classes.course_name,
        classInstructor: classes.course_instructor,
        classPrice:  classes.course_price,
        classID: classes.classId,
      };
      console.log(payment);

      // fetch("https://educam-server.vercel.app/payments", {
      fetch("https://educam-server.vercel.app/payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertResult.insertedId) {
            // payment success alert
            Navigate('/dashboard/mypayments')
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Login Successfully!😃',
              showConfirmButton: false,
              timer: 1500
            })
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
