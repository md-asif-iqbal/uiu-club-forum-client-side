import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import React, { useState } from 'react';

const CheckoutForm = () => {
 const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
    const [clientSecret, setClientSecret] = useState("");


  const handleSubmit = async (event) => {
    event.preventDefault();
  };
    return (
      <>
        <form onSubmit={handleSubmit}>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "18px",
                  color: "white",
                  "::placeholder": {
                    color: "black",
                  },
                },
                invalid: {
                  color: "yellow",
                },
              },
            }}
          />
          <button
            className="btn btn-success btn-sm mt-4"
            type="submit"
            disabled={!stripe || !clientSecret || success}
          >
            Pay
          </button>
        </form>
        {cardError && <p className="text-red-500">{cardError}</p>}
        {success && (
          <div className="text-green-500">
            <p>{success} </p>
            <p>
              Your transaction Id:{" "}
              <span className="text-orange-500 font-bold">{transactionId}</span>{" "}
            </p>
          </div>
        )}
      </>
    );
};

export default CheckoutForm;