import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import {loadStripe} from '@stripe/stripe-js';
import {
  Elements,
} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

// TODO: get the stripe publish key from stripe 
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gate_Way)

const Payment = () => {
  return (
    <div>
    <SectionTitle subHeading={'--- Please Pay To Eat ---'} heading={'Payment'}></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
           <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;