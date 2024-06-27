import './App.css';

function App() {

  let products = [
    {name: 'Milk', cost: 2.50, imgUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Oat_milk_glass_and_bottles.jpg",isBought: false },
    {name: 'Bread',cost: 1.20, imgUrl: "https://assets.bonappetit.com/photos/5c62e4a3e81bbf522a9579ce/5:4/w_2815,h_2252,c_limit/milk-bread.jpg",isBought: false},
    {name: 'Eggs', cost: 6.45, imgUrl: "https://img.taste.com.au/oI-2zjyU/taste/2007/04/eggs-182316-1.jpg", isBought: false}
  ];

  return (
    <div className="App">
      <header className="App-header">
        Hello World! {products.map((p, index) => (
          <article key={index}>
             <img width='300px' height='200px' src={p.imgUrl} alt="Image" />
             <p>Name: {p.name}</p>
             <p>Cost: {p.cost}</p>
          </article>
        ))}
      </header>
    </div>
  );
}

export default App;
