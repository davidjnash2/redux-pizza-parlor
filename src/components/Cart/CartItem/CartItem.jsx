


function CartItem({pizza}) { 

    return(

        <div>
                        
            <img src={pizza.image_path}/>
            <p>{pizza.name}</p>
            <p>{pizza.description}</p>
            <p>{pizza.price}</p>
            

        </div>




    );


}
export default CartItem;
