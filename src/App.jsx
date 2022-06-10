// styles
import "./index.css";

// components
import Button from "./components/functional_components/button/Button";
import Card from "./components/functional_components/card/Card";
import Menu from "./components/functional_components/menu/Menu";
import FaqsContainer from "./components/functional_components/faqsContainer/FaqsContainer";
import Faq from "./components/hook_components/faq/Faq";
import FaqLink from "./components/functional_components/faqLink/FaqLink";
import Carousel from "./components/functional_components/carousel/Carousel";
import Balloon from "./components/functional_components/balloon/Balloon";
import FirstPageContainer from "./components/functional_components/firstPageContainer/FirstPageContainer";
import IconButton from "./components/functional_components/iconButton/IconButton";
import GameCard from "./components/functional_components/gameCard/GameCard";

// assets
import Graduation from "./assets/images/icons/graduation.svg";
import Newspaper from "./assets/images/icons/newspaper.svg";
import Trash from "./assets/images/icons/trash.svg";



// In base al numero di immagini nell'array, andare nel file Carousel.css e modificare alcuni parametri 
const mockImages = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg",
  "https://www.youandthemat.com/wp-content/uploads/nature-2-26-17.jpg",
  "https://dearsam.com/img/600/744/resize/n/a/nature-day-70x50_8ace0.jpg",
  "https://www.iucn.org/sites/dev/files/content/images/2020/shutterstock_1458128810.jpg"
]

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
      position: "relative"
    }}>
      <Menu
        handleClick={handleMenuClick}
      />

      <Button
        label="start"
        handleClick={handleButtonClick}
      />
      <br />
      <Button
        label="start"
        invertColor
        handleClick={handleButtonClick}
      />
      <br />
      <Button
        label="start"
        invertColor
        transparent
        handleClick={handleButtonClick}
      />

      <br />

      <Card
        title="Elementi intermedi"
        number="02"
        description={"I rifiuti sotto ai 5 cm cadono verso il basso. I rifiuti metallici vengono convogliati al recupero finale."}
        destination={"separazione ottica."}
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

      <br />

      <Carousel
        images={mockImages}
      />

      <br />

      <Balloon
        text={"Ciao! Anch'io ho fatto questo viaggio... ed è proprio per questo che sono ancora qui con voi!"}
        handleCloseClick={handleButtonClick}
      />

      <br />

      <IconButton
        type={"close"}
        handleClick={handleButtonClick}
      />
      <IconButton
        type={"close"}
        size={"xl"}
        handleClick={handleButtonClick}
      />
      <IconButton
        type={"arrow-down"}
        handleClick={handleButtonClick}
      />
      <IconButton
        type={"resize-open"}
        handleClick={handleButtonClick}
      />
      <IconButton
        type={"resize-close"}
        handleClick={handleButtonClick}
      />
      <IconButton
        type={"resize-open"}
        handleClick={handleButtonClick}
        size={"xl"}
      />
      <IconButton
        type={"resize-close"}
        handleClick={handleButtonClick}
        size={"xl"}
      />
      <IconButton
        type={"arrow-left"}
        handleClick={handleButtonClick}
      />
      <IconButton
        type={"arrow-right"}
        handleClick={handleButtonClick}
      />
      <IconButton
        type={"plus"}
        handleClick={handleButtonClick}
      />
      <IconButton
        type={"plus"}
        handleClick={handleButtonClick}
        size={"xl"}
      />
      <IconButton
        type={"play"}
        handleClick={handleButtonClick}
        size={"xl"}
      />

      <br />

      <GameCard
        number="01"
        description="Rimuovi i residui dal nastro trasportatore lasciando passare solo la plastica azzurrata."
      />

      <br />

      <FirstPageContainer
        intro={"INTRO"}
        title={"Il viaggio della plastica"}
        description={
          <p><span className="blueBoldText">Tutto ciò che si butta</span> è quindi più importante di quello  che pensiamo. Può infatti trasformarsi in una <span className="blueBoldText">nuova preziosa risorsa</span>. Per farlo però, deve affrontare un vero e proprio viaggio.
            <br /><br />
            Ogni materiale segue il proprio percorso, attraverso processi differenti, in impianti dedicati. Ma il punto di partenza è lo stesso per tutti: <span className="blueBoldText">una raccolta differenziata</span> dei rifiuti <span className="blueBoldText">fatta con cura</span>.
            <br /><br />
            Esistono diversi impianti dedicati al recupero dei rifiuti. Ed è proprio in uno di questi che la plastica inizia il suo viaggio.</p>
        }
        carouselImage={mockImages}
        buttonLabel={"Inizia"}
        buttonHandleClick={handleButtonClick}
      />

    </div>
  );
}

export default App;
