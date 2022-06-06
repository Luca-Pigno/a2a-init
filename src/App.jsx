// styles
import "./index.css";

// components
import Button from "./components/functional_components/button/Button";
import Card from "./components/functional_components/card/Card";
import Menu from "./components/functional_components/menu/Menu";
import FaqsContainer from "./components/functional_components/faqsContainer/FaqsContainer";
import Faq from "./components/hook_components/faq/Faq";
import FaqLink from "./components/functional_components/faqLink/FaqLink";

// assets
import Graduation from "./assets/images/icons/graduation.svg";
import Newspaper from "./assets/images/icons/newspaper.svg";
import Trash from "./assets/images/icons/trash.svg";

const App = () => {

  const handleButtonClick = () => {
    console.log("Bravo, hai cliccato il bottone...")
  }

  const handleMenuClick = (e) => {
    console.log("Il menù è " + (e == false ? "chiuso" : "aperto"));
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
      <Menu
        handleClick={handleMenuClick}
      />

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

      <br />

      <FaqsContainer
        faq={[
          <Faq
            title="Sei un docente?"
            links={[
              <FaqLink
                icon={Graduation}
                description={"Scopri tutte le iniziative dedicate alle scuole"}
                linkTo={"https://google.com"}
              />,
              <FaqLink
                icon={Newspaper}
                description={"Registrati per rimanere aggiornato sulle nostre novità"}
                linkTo={"https://google.com"}
              />
            ]}
          />,
          <Faq
            title="Vuoi saperne di più?"
            links={[
              <FaqLink
                icon={Trash}
                description={"Scopri cosa facciamo per il ciclo integrato dei rifuiti"}
                linkTo={"https://google.com"}
              />
            ]}
          />
        ]}
      />
    </div>
  );
}

export default App;
