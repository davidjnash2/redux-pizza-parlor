import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import CartItem from './CartItem/CartItem.jsx';

function Cart() {

    const cart = useSelector(store => store.cart);
    const history = useHistory();

    const backButton = () => {
        history.push('/');    
    }
    const orderButton = () => {

        history.push('/order')

    }


    return (

        <div>
            <button onClick={backButton}>BACK</button>            
            <button onClick={orderButton}>ORDER</button>            


            <div>
                    {cart.map(pizza => (
                        <CartItem pizza={pizza} key={pizza.id}/>
                    ))}
            </div>
        </div>
    );


}

export default Cart;
