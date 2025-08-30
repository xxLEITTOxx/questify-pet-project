// Карточка для отдельного квеста
import css from "./QuestCard.module.css";
import {
  MdOutlineClear,
  //   MdDone,
  //   MdOutlineSave,
  MdOutlineStar,
  MdArrowDropDown,
} from "react-icons/md";

export default function QuestCard() {
  return (
    <div className={css.cardContainer}>
      <div className={css.cardHeader}>
        <div className={css.cardHeaderSelector}>
          <div className={css.roundLevelSelector}></div>
          <div className={css.levelTitle}>Normal</div>
          <MdArrowDropDown />
        </div>
        <div>
          <MdOutlineStar />
        </div>
      </div>
      <div className={css.inputContainer}>
        <div className={css.cardTitle}>Create New Quest</div>
        <input type="text" className={css.cardInput} />
      </div>
      <div className={css.cardBottomContainer}>
        <div className={css.categorySelector}>
          <div>category</div>
          <MdArrowDropDown />
        </div>
        <div className={css.buttonList}>
          <div className={css.clearButton}>
            <MdOutlineClear />
          </div>
          <div className={css.startButton}>START</div>
        </div>
      </div>
      {/* <div className={css.closeIcon}></div> */}
      {/* <ul>
        <li>
          <MdOutlineClear />
        </li>
        <li>
          <MdDone />
        </li>
        <li>
          <MdOutlineSave />
        </li>
      </ul> */}
    </div>
  );
}
