import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import PizzaListItem from '../PizzaListItem/PizzaListItem.jsx';
function Cart() {

    const cart = useSelector(store => store.cart);
    const history = useHistory();

    const backButton = () => {
        history.push('/');    
    }
    const orderButton = () => {

        history.push('/order')

    }

    console.log(cart);
    return (

        <div>
            <button onClick={backButton}>BACK</button>            
            <button onClick={orderButton}>ORDER</button>            


            <div>
                    {cart.map(pizza => (
                        <PizzaListItem pizza={pizza} key={pizza.id}/>
                    ))}
            </div>
        </div>
    );


}

export default Cart;
