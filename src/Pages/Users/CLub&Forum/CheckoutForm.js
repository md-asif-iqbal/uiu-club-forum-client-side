import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const amount = 350

  useEffect(() => {
    if (amount) {
      fetch(
        "http://localhost:8000/create-payment-intent",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ amount }),
        }
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          if (data?.clientSecret) {
            setClientSecret(data.clientSecret);
          }
        });
    }
  }, [amount]);

  // if (setProcessing === false) {
  //   return <Loading></Loading>
  // }

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");
    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    // confrim card payment
    setProcessing(true);
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
      setSuccess("");
      setProcessing(false);
    } else {
      setCardError("");
      setTransactionId(paymentIntent.id);
      console.log(paymentIntent);
      toast(`Congrats! Your Payment is completed`);
      setSuccess(`Congrats! Your Payment is completed`);
      setProcessing(false);
      event.target.reset();
    }
  };

  return (
    <>
      <form
        className="p-0"
        style={{ display: "inline" }}
        onSubmit={handleSubmit}
      >

        <CardElement
          options={{
            style: {
              base: {
                fontSize: "18px",
                color: "black",
                "::placeholder": {
                  color: "black",
                },
              },
              invalid: {
                color: "blue",
              },
            },
          }}
        />

        <div className="mt-10 mb-5">
          <button className="pay-btn" type="submit" disabled={!stripe}>
            Pay
          </button>
        </div>
      </form>

      {processing && (
        <div className="mx-auto">
          Loading
        </div>
      )}
      {cardError && <p style={{ color: "blue" }}>{cardError}</p>}
      {success && (
        <div style={{ color: "green" }}>
          <p> {success}</p>
          <p>
            Your TransactionId:{" "}
            <span className="text-blue-500 font-bold">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
