import "./App.css";
//обнуляющие стили
import "./_null_style.css";
import Header from "./Components/Header/Header";
import MainBlock from "./Components/MainBlock/MainBlock";
import Menu from "./Components/Menu/Menu";

//news
import ireland from "./images/images_for_MainBlock/news/Ireland.jpg";
import morocco from "./images/images_for_MainBlock/news/Morocco.jpg";
import cameroon from "./images/images_for_MainBlock/news/Cameroon.jpg";

//events
import zambia from "./images/images_for_MainBlock/events/Zambia.jpg";
import mali from "./images/images_for_MainBlock/events/Mali.jpg";
import madagascar from "./images/images_for_MainBlock/events/Madagascar.jpg";

//tournaments
import mauritius from "./images/images_for_MainBlock/tournaments/Mauritius.jpg";
import nigeria from "./images/images_for_MainBlock/tournaments/Nigeria.jpg";
import tunisia from "./images/images_for_MainBlock/tournaments/Tunisia.jpg";

//matchs
import senegal from "./images/images_for_MainBlock/matchs/Senegal.jpg";
import togo from "./images/images_for_MainBlock/matchs/Togo.jpg";

function App() {
   const mainBlockElements = [
      {
         itemName: "News",
         item: [
            {
               id: 1,
               flag: ireland,
               text: "Top 20 players of 2021: ropz(18)",
            },
            {
               id: 2,
               flag: morocco,
               text: "Astralis confirm Dupreeh departure",
            },
            {
               id: 3,
               flag: cameroon,
               text: "Evil Geniuses in talks with RUSH as valde negotiations break down - Report",
            },
         ],
      },
      {
         itemName: "Events",
         item: [
            {
               id: 1,
               flag: zambia,
               text: "The event of the year begins!",
            },
            {
               id: 2,
               flag: mali,
               text: "BIG Academy undergo core changes ahead of WePlay League kick-off",
            },
            {
               id: 3,
               flag: madagascar,
               text: "End of the first part of Umzansi",
            },
         ],
      },
      {
         itemName: "Tournaments",
         item: [
            {
               id: 1,
               flag: mauritius,
               text: "FEJA star of the tournaments!",
            },
            {
               id: 2,
               flag: nigeria,
               text: "Final looser bracket starts",
            },
            {
               id: 3,
               flag: tunisia,
               text: "Summary of the week's results",
            },
         ],
      },
      {
         itemName: "Matchs",
         item: [
            {
               id: 1,
               flag: senegal,
               color: "green",
               text: "AAA vs BBB who will have its place today?",
            },
            {
               id: 2,
               flag: togo,
               color: "green",
               text: "GGG vs TTT for a place in the final (9pm)",
            },
         ],
      },

   ]
   return (
      <div className="App">
         <Header />
         <MainBlock mainBlockElements={mainBlockElements} />
         <Menu />
      </div>
   );
}

export default App;
