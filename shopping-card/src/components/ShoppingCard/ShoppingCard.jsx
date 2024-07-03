
import ShoppingCardForm from '../ShoppingCardForm/ShoppingCardForm';
import ShoppingCardItem from '../ShoppingCardItem/ShoppingCardItem';

function ShoppingCard(){

    let products = [
        {name: 'Milk', cost: 2.50, imgUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Oat_milk_glass_and_bottles.jpg",isBought: false },
        {name: 'Bread',cost: 1.20, imgUrl: "https://assets.bonappetit.com/photos/5c62e4a3e81bbf522a9579ce/5:4/w_2815,h_2252,c_limit/milk-bread.jpg",isBought: false},
        {name: 'Eggs', cost: 6.45, imgUrl: "https://img.taste.com.au/oI-2zjyU/taste/2007/04/eggs-182316-1.jpg", isBought: false}
    ];

    return(

        <section className="shopping-cart__container">
          <ShoppingCardForm />
        <section className="shopping-cart__items-list">
            <ShoppingCardItem />
        </section>
        <div className="shopping-cart__total-price">
           <h1>Total Price: 0$</h1>s
        </div>
     </section>
    )
}

export default ShoppingCard;