import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/cart-item";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productId: "asdasdasd",
    photo: "https://m.media-amazon.com/images/I/41DeT328kPL._AC_SY450_.jpg",
    name: "Macbook",
    price: 40000,
    quantity: 1,
    stock: 10,
  },
];
const subtotal = 40000;
const tax = Math.round(subtotal * 0.18);
const shippingCharges = 200;
const discount = 400;
const total = subtotal + tax + shippingCharges - discount;

const Cart = () => {

  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      if(Math.random() > 0.5) setIsValidCouponCode(true);
      else setIsValidCouponCode(false);
    },1000);
  
    return () => {
      clearTimeout(timeOutID);
      setIsValidCouponCode(false);
    };
  }, [couponCode]);
  

  return (
    <div className="cart">
      <main>
        { cartItems.length > 0 ? cartItems.map((i, idx) => (
          <CartItem key={idx} cartItem={i}/> 
        )) : (<h1>No Items Added</h1>)}
      </main>
      <aside>
        <p>Subtotal: ₹{subtotal}</p>
        <p>Shipping CHarges: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>
        <p>Discount: <em className="green"> - ₹{discount}</em></p>
        <p>Total: <strong>₹{total}</strong></p>

        <input 
          type="text"
          placeholder = "Coupon Code"
          value = {couponCode}
          onChange = {(e) => setCouponCode(e.target.value)}  
        />

        {couponCode && 
          (isValidCouponCode ? 
          (
            <span className="green">
              ₹{discount} off using <code>{couponCode}</code>
            </span>
          ) : 
          (
            <span className="red">
              Invalid Coupon Code <VscError/>
            </span>
          )
        ) }

        {
          cartItems.length > 0 && <Link to="/shipping">Checkout</Link>
        }
      </aside>
    </div>
  )
}

export default Cart