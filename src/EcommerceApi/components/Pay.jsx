import StripeCheckout from "react-stripe-checkout"

const KEY = "pk_test_51LD7vfFsw5rKEqsXg93zUc3B4rOh6AypyoEbS93u4fYbLoIdObIJV2vvUChg5ImAoCWJVxJFaT85VgzW0VK0j3JG00ECX3nrQX"
const Pay = () => {

    const onToken =(token) => {
        console.log(token)
    }
    return (

        <div style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}
        >
            <StripeCheckout  name="Peeky Stores" 
            image="https://i.pinimg.com/564x/40/c8/86/40c8869851773f10e07208634a575b67.jpg"
            billingAddress
            shippingAddress
            description="Your total is 20 dollars "
            amount={2000}
            token={onToken }
            stripeKey= {KEY}
            
            >

          
            <button style={{
                border: "none",
                width: "120",
                borderRadius: 5,
                padding: "20px",
                backgroundColor: "black",
                color: "white",
                fontWeight: "600",
                cursor: "pointer",
            }}
            >
                Pay Now

            </button>
              </StripeCheckout>
        </div>
    )
}
export default Pay;