import css from "./QuestCardChallenge.module.css";
import {
  MdOutlineClear,
  MdArrowDropDown,
  MdCalendarMonth,
} from "react-icons/md";
import { GiTrophy } from "react-icons/gi";

export default function QuestCardChallenge() {
  return (
    <div className={css.cardContainer}>
      <div className={css.cardHeader}>
        <div className={css.cardHeaderSelector}>
          <div className={css.roundLevelSelector}></div>
          <div className={css.levelTitle}>Hard</div>
          <MdArrowDropDown color="#00d7ff" />
        </div>
        <div>
          <GiTrophy color="#00d7ff" />
        </div>
      </div>
      <div className={css.challengeHeader}>challenge</div>
      <div className={css.cardTitle}>Read a book “To Kill a Mockingbird”</div>

      <div className={css.dateContainer}>
        <div className={css.dayTitle}>by Wednesday, 23:00</div>
        <MdCalendarMonth color="#00d7ff" />
      </div>
      <div className={css.cardBottomContainer}>
        <div className={css.categorySelector}>
          <div className={css.categoryTitle}>LEARNING</div>
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
