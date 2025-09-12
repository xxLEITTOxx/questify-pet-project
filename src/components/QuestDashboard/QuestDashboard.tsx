// Будет содержать разделы "TODAY","TOMORROW", "DONE"

import QuestCardCreate from "../QuestCardCreate/QuestCardCreate";
import QuestCardChallenge from "../QuestCardChallenge/QuestCardChallenge";
import QuestCardCompleted from "../QuestCardCompleted/QuestCardCompleted";
import QuestCardEdit from "../QuestCardEdit/QuestCardEdit";
import QuestCardModalDelete from "../QuestCardModalDelete/QuestCardModalDelete";
import QuestCardReady from "../QuestCardReady/QuestCardReady";
import { AddCard } from "../AddCard/AddCard";
import { useState } from "react";

function QuestDashboard() {
  const [cardEditStatus, setCardEditStatus] = useState(false);
  console.log(cardEditStatus);

  return (
    <>
      <QuestCardCreate />
      <QuestCardReady
        onClick={() => {
          setCardEditStatus(!cardEditStatus);
        }}
        cardEditStatus={cardEditStatus}
      />
      <QuestCardChallenge />
      <QuestCardEdit />
      <QuestCardModalDelete />
      <QuestCardCompleted />
      <AddCard />
    </>
  );
}

export default QuestDashboard;
