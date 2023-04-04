import Card from "./Card";
function PizzaTypes() {
  return (
    <>
      <div className="pizzaTypesWrapper flex justify-between">
        <Card
          imgSrc="./images/StockSnap_R0YJRQ45E0.jpg"
          title="Margherita"
          text="Classic pizza with tomato sauce, fresh mozzarella, and basil. The perfect balance of flavors that will transport you to Italy with each bite."
        />

        <Card
          imgSrc="./images/pizza-1344720_1920.jpg"
          title="Meat Lovers"
          text="Meat lovers rejoice! Our meat lovers pizza is piled high with pepperoni, sausage, bacon, and ham. Perfect for a hearty meal that will keep you satisfied."
        />

        <Card
          imgSrc="./images/pizza-3007395_1920.jpg"
          title="Supreme"
          text="Our supreme pizza has it all - pepperoni, sausage, onions, bell peppers, mushrooms, and olives. It’s a crowd-pleaser that’s perfect for any occasion."
        />

        <Card
          imgSrc="./images/pizza-2766487_1920.jpg"
          title="Veggie"
          text="Our veggie pizza is packed with fresh, colorful vegetables like bell peppers, onions, mushrooms, and olives. It’s a healthier option that’s still bursting with flavor."
        />
      </div>
    </>
  );
}

export default PizzaTypes;
