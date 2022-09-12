import "./App.css";
import CarService from "./services/CarService";
import NewsLetter from "./newsletter/NewsLatter";
import CarFooter from "./footer/CarFooter";
function App() {
  return (
    <>
      <section className="s1">
        <h1>Section One</h1>
      </section>
      <CarService />
      <NewsLetter />
      <CarFooter />
    </>
  );
}

export default App;
