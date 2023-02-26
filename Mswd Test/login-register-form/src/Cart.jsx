export default function Cart(props)
{
    return(
        <div className="Cart-Body" style={{display:"flex"}}>
            <p>There's nothing in the cart</p>
            <button onClick={() =>props.onFormSwitch('checkout')} variant="contained" color="secondary">Checkout</button>
        </div>
    );
}