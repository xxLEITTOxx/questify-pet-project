import css from "./QuestCardCreate.module.css";
import {
  MdOutlineClear,
  MdOutlineStar,
  MdArrowDropDown,
  MdCalendarMonth,
} from "react-icons/md";

export default function QuestCardCreate() {
  return (
    <div className={css.cardContainer}>
      <div className={css.cardHeader}>
        <div className={css.cardHeaderSelector}>
          <div className={css.roundLevelSelector}></div>
          <div className={css.levelTitle}>Hard</div>
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
      <div className={css.dateContainer}>
        <div className={css.dayTitle}>Today</div>
        <MdCalendarMonth color="#00d7ff" />
      </div>
      <div className={css.cardBottomContainer}>
        <div className={css.categorySelector}>
          <div className={css.categoryTitle}>STUFF</div>
        </div>
        <div className={css.buttonList}>
          <div className={css.clearButton}>
            <MdOutlineClear color="#db0837" />
          </div>
          <div className={css.separatorContainer}></div>
          <div className={css.startButton}>START</div>
        </div>
      </div>
    </div>
  );
}
