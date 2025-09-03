import css from "./QuestCardCompleted.module.css";
import { MdOutlineArrowRightAlt } from "react-icons/md";

export default function QuestCardCompleted() {
  return (
    <div className={css.completedContainer}>
      <div className={css.completedTitle}>
        <div className={css.completedName}>Completed:</div>
        <div className={css.completedQuestName}> Visit the dentist...</div>
      </div>
      <div className={css.completedImage}></div>
      <div className={css.completedContinue}>
        <div className={css.continueText}>Continue</div>
        <MdOutlineArrowRightAlt />
        {/* <div className={css.continueSvg}></div> */}
      </div>
    </div>
  );
}
