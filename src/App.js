import "./App.css";
import PriceCard from "./components/PriceCard/PriceCard";
import data from "./data.json";
function App() {
  const [free, plus, pro] = data.plans;
  console.log(free);
  console.log(plus);
  console.log(pro);
  return (
    <div className="app container">
      <div className="row">
        <PriceCard plan={free} isBold={false} />
        <PriceCard plan={plus} isBold={true} />
        <PriceCard plan={pro} isBold={true} />
      </div>
    </div>
  );
}

export default App;
