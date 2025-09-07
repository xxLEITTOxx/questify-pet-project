// Будет содержать разделы "TODAY","TOMORROW", "DONE"

import QuestCardCreate from "../../QuestCardCreate/QuestCardCreate";
import QuestCardChallenge from "../QuestCardChallenge/QuestCardChallenge";
import QuestCardCompleted from "../QuestCardCompleted/QuestCardCompleted";
import QuestCardEdit from "../QuestCardEdit/QuestCardEdit";
import QuestCardModalDelete from "../QuestCardModalDelete/QuestCardModalDelete";
import QuestCardReady from "../QuestCardReady/QuestCardReady";
// import { promoCardsData } from "../PromoQuestCards/PromoCardsData";
// import QuestCard from "../QuestCard/QuestCard";
// import css from "./QuestDashboard.module.css";

function QuestDashboard() {
  return (
    // <div className={css.QuestDashboard}>
    //     {promoCardsData.map((card) => (
    //         <QuestCard
    //             key={`dash-${card.id}`}
    //             title={card.title}
    //             level={card.difficulty}
    //             category={card.category}
    //         />
    //     ))}
    // </div>
    <>
      <QuestCardCreate />
      <QuestCardReady />
      <QuestCardChallenge />
      <QuestCardEdit />
      <QuestCardModalDelete />
      <QuestCardCompleted />
    </>
  );
}

export default QuestDashboard;
