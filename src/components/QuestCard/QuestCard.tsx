// Карточка для отдельного квеста
import css from "./QuestCard.module.css";
import { MdOutlineClear, MdDone, MdOutlineSave } from "react-icons/md";

export default function QuestCard() {
  return (
    <div className={css.cardContainer}>
      <h1>Quest Card</h1>
      {/* <div className={css.closeIcon}></div> */}
      <ul>
        <li>
          <MdOutlineClear />
        </li>
        <li>
          <MdDone />
        </li>
        <li>
          <MdOutlineSave />
        </li>
      </ul>
    </div>
  );
}
