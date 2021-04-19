
import React from 'react';

import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';



const stripePromise = loadStripe('pk_test_51IfGLsArgyxgHzq3S3UY34P9hUfxYi2Gn1nrcXFjq4OPPYeI55uK0LXgQs5iW7FZXkrB769ogKOejwGXXKG9hqPG009obLzjCx');

const PaymentProcess = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
<SimpleCardForm  handlePayment={handlePayment}></SimpleCardForm>

        </Elements>
      );
    };
export default PaymentProcess;