import "./App.css";
import { NavBar } from "./NavBar";

function App() {
  const itemList = [
    {
      id: 1,
      name: "Orange",
      price: "100",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Oranges_-_whole-halved-segment.jpg/1200px-Oranges_-_whole-halved-segment.jpg",
    },
    {
      id: 2,
      name: "Apple",
      price: "200",
      image:
        "https://images.pexels.com/photos/2487443/pexels-photo-2487443.jpeg?cs=srgb&dl=pexels-matheus-cenali-2487443.jpg&fm=jpg",
    },
    {
      id: 3,
      name: "Bread",
      price: "45",
      image: "https://i.ndtvimg.com/i/2015-04/bread_625x350_41430314014.jpg",
    },
    {
      id: 4,
      name: "Paneer",
      price: "90",
      image:
        "https://1.bp.blogspot.com/-_8ZSh3x4flM/XYfpTvK9P8I/AAAAAAAAPCE/2Q-4ckD1wB4AYQGL9fJBLkbi5WgvSDPFQCEwYBhgL/s1600/Homemade%2BMalai%2BPaneer.JPG",
    },
    {
      id: 5,
      name: "Milk",
      price: "40",
      image:
        "https://images.newscientist.com/wp-content/uploads/2022/08/23154523/SEI_120737085.jpg",
    },
    {
      id: 6,
      name: "Chocolate",
      price: "150",
      image:
        "https://perfectdailygrind.com/wp-content/uploads/2020/04/Hs_5Ce8ecmXodh-AdEVHyT07irPaZ-zAAhYkKYRJgS5CVzHKs0cAAdyeAF9TIgyh4KI5gqYmyuIDwJnf2f9wCdNvJ5WbQOlSoRr5zmmzMalyR1-RQxvlOtTZkJq9G_GPUiVZ6_WX-1-1.jpeg",
    },
    {
      id: 7,
      name: "Weat Flour",
      price: "30",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVgP0zhGhO06E0okwQGNIhCcVov8HvcXE0Vg&usqp=CAU",
    },
    {
      id: 8,
      name: "Cooking Oil",
      price: "250",
      image:
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/324844_2200-1200x628.jpg",
    },
  ];
  return (
    <div className="Cart-container">
      <NavBar />
      <div className="intro">
        <h1>Shop in Style</h1>
      </div>
      <div className="add-cart-list">
        <AddCart />
        <div className="item-list">
          {itemList.map((item, key) => {
            return <Items item={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

function Items({ item }) {
  return (
    <div className="items-container">
      <img src={item.image} alt={item.name} className="item-image" />
      <div className="items-container-details">
        <h3 className="item-name">{item.name}</h3>
        <h5 className="item-price">Rs.{item.price}</h5>
        <button className="item-button">Add</button>
      </div>
    </div>
  );
}

function AddCart() {
  return (
    <div className="add-cart">
      <h1>Add Item to Cart</h1>
      {/* <table border={1}>
        <thead>
          <tr>
            <td>Item name</td>
            <td>Price</td>
          </tr>
        </thead>
      </table> */}
    </div>
  );
}
