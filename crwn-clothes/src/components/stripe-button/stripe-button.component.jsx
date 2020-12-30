import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51H5NLhHEp5wYSBhcbQk7wcRefhWiaM1iEnuD3272O6uqfW64cEvUlO3oT82sYGPdm33VeKrOPkHfDTMGlWiEwJs500qApDEW5B';
    const onToken = token => {
        console.log(token);
        alert('Payment Sucessful');
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='NGOC Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`You total is $${price}`}
            amount= {priceForStripe}    
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;