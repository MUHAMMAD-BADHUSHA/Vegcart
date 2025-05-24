import React from 'react';
import axios from 'axios';

function PaymentButton({ amount }) {

  const handlePayment = () => {
    // Step 1: Create order on backend
    axios.post('http://localhost:4000/payment/create-order', { amount }) // correct URL path if it's create-order
      .then(({ data: order }) => {
        // Step 2: Razorpay options
        const options = {
          key: 'rzp_test_eYJYaBHlCQgozq', // use your actual key or from env
          amount: order.amount,
          currency: 'INR',
          name: 'VegCart',
          description: 'Test Transaction',
          order_id: order.id,
          handler: function (response) {
            // Step 3: Verify payment on backend
            axios.post('http://localhost:4000/payment/verify-payment', {
              order_id: response.razorpay_order_id,
              payment_id: response.razorpay_payment_id,
              signature: response.razorpay_signature,
            })
              .then((verifyRes) => {
                alert(verifyRes.data.message);
              })
              .catch(() => {
                alert('Payment verification failed');
              });
          },
          prefill: {
            name: 'Test User',
            email: 'testuser@example.com',
            contact: '9999999999',
          },
          theme: {
            color: '#28a745',
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();

        rzp.on('payment.failed', function (response) {
          alert('Payment failed: ' + response.error.description);
        });
      })
      .catch(error => {
        alert('Error creating order');
        console.error(error);
      });
  };

  return (
    <button
      onClick={handlePayment} // FIX: Don't invoke the function directly
      style={{
        backgroundColor: '#28a745',
        color: '#fff',
        padding: '12px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
      }}
    >
      Pay Now
    </button>
  );
}

export default PaymentButton;
