import css from "./QuestCardReady.module.css";
import { MdOutlineStar } from "react-icons/md";

interface QuestCardReadyProps {
  cardEditStatus: boolean;
  onClick: () => void;
}

export default function QuestCardReady({
  cardEditStatus,
  onClick,
}: QuestCardReadyProps) {
  console.log(cardEditStatus);

  return (
    <div className={css.cardContainer} onClick={onClick}>
      <div className={css.cardHeader}>
        <div className={css.cardHeaderSelector}>
          {cardEditStatus && <div className={css.roundLevelSelector}></div>}
          <div className={css.levelTitle}>Hard</div>
          {/* <MdArrowDropDown /> */}
        </div>
        <div>
          <MdOutlineStar />
        </div>
      </div>
      <div className={css.cardTitle}>Wake up, dress up, live up</div>
      <div>{cardEditStatus}</div>

      <div className={css.dateContainer}>
        <div className={css.dayTitle}>Today, 6:00</div>
      </div>
      <div className={css.cardBottomContainer}>
        <div className={css.categorySelector}>
          <div className={css.categoryTitle}>STUFF</div>
        </div>
      </div>
    </div>
  );
}
