import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxios from "../../../CustomCompo/useAxios";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = () => {
  const [error , setError]=useState("")
  const [clientSecret , setClientSecret]=useState("")
  const [transectionID , setTransectionID]=useState("")
  const stripe =useStripe()
  const elements = useElements()
 const {user}=useAuth()
  const axiosURL = useAxios()
 const [cart,refetch]=useCart()

 const totalPrice = cart.reduce((prev,current)=>prev + current.price,0)

 useEffect(()=>{
  if(totalPrice>0){
    axiosURL.post('/create-payment-intent',{price:totalPrice})
  .then(res=>{
    // console.log(res.data.clientSecret);
    setClientSecret(res.data.clientSecret);
  })
  .catch(err=>{
    // console.log(err);
  })
  }
 },[axiosURL,totalPrice])



   const handleSubmit=async event=>{
     event.preventDefault()
     if(!stripe || !elements ){
       return
     }
     const card = elements.getElement(CardElement)
     if(card == null){
       return
     }

     const {error ,paymentMethod}= await stripe.createPaymentMethod({
      type:'card',
      card
     })
     if(error){
      // console.log('payment error', error);
      setError(error.message)
     }else{
      // console.log('payment method',paymentMethod);
      setError('')
     }

    //  confirm payment 
    const {paymentIntent , error:confirmError}= await stripe.confirmCardPayment(clientSecret,{
      payment_method:{
        card: card,
        billing_details:{
          email: user?.email||'anonymous',
          name: user?.displayName||'anonymous',
        }
      }

    })
    

    if(confirmError){
      // console.log('confirm error');
    }else{
      // console.log('paymentIntent',paymentIntent);
      if(paymentIntent.status==='succeeded'){
        // console.log('transectionID', paymentIntent.id);
        setTransectionID( paymentIntent.id);
        const payment ={ 
          name:user?.displayName,
          email:user?.email,
          transectionID:paymentIntent.id,
          price:totalPrice,
          date:new Date(),
          cartIds: cart.map(item=>item._id),
          menuIds: cart.map(item=>item.menuId),
          status:'pending'

        }
        const res= await axiosURL.post('/payments',payment)
        // console.log(res.data);
        refetch()
      }
    }
   }
   return (
     <form onSubmit={handleSubmit}>
       <CardElement
           options={{
             style: {
               base: {
                 fontSize: '16px',
                 color: '#424770',
                 '::placeholder': {
                   color: '#aab7c4',
                 },
               },
               invalid: {
                 color: '#9e2146',
               },
             },
           }}
         />
         <button className=" my-5 btn btn-accent" type="submit" disabled={!stripe || !clientSecret}>
           Pay
         </button>
         <h5 className=" text-red-600">{error}</h5>
         {
          transectionID&&
         <h5 className=" text-green-600">Your Transection ID: {transectionID}</h5>
         }
     </form>
   );
};

export default CheckoutForm;