import { useParams } from "react-router-dom";

RestaurantMenu = () => {
  const param = useParams(); // this is the hook it used to read the params present in url.
  console.log(param);
  return (
    <div>
      <h1>RESTAURANT KING</h1>
      <h2>2000 Rs For Two</h2>
      <h3>Menu</h3>
      <ol>
        <li> new dish 1</li>
        <li> new dish 2</li>
        <li> new dish 3</li>
        <li> new dish 4</li>
        <li> new dish 5</li>
      </ol>
    </div>
  );
};

export default RestaurantMenu;
