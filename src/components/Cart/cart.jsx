import {useDispatch, useSelector} from 'react-redux';
import {useHistroy} from 'react-router-dom';
import CartItem from './CartItem/CartItem.jsx';

function Cart() {

    const cart = useSelector(store => store.cart);
    const history = useHistroy();

    const backButton = () => {
        histroy.push('/');    
    }


    return (


        <div>
                {cart.map(pizza => (
                    <CartItem pizza={pizza}/>
                ))}
        </div>
    );


}

export default Cart;
