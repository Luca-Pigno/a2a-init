// styles
import "./index.css";

// components
import Button from "./components/functional_components/button/Button";
import Card from "./components/functional_components/card/Card";
import Menu from "./components/hook_components/menu/Menu";

const App = () => {

  const handleButtonClick = () => {
    console.log("Bravo, hai cliccato il bottone...")
  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      minHeight: "100vh",
      backgroundColor: "#1D1D2A",
      padding: "22px",
      position: "relative"
    }}>
      <Menu />
      <Button 
        label="start"
        // invertColor
        handleClick={handleButtonClick}
      />
      <br />
      <Card 
        title="visori"
        number="01"
        description={"I visori 'leggono' il materiale tramite:"}
      />
    </div>
  );
}

export default App;
