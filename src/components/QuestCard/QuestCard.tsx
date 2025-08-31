import css from "./QuestCard.module.css";
import { MdOutlineClear, MdOutlineStar, MdArrowDropDown } from "react-icons/md";

interface QuestCardProps {
    level: string;
    title: string;
    category: string;
}

export default function QuestCard({ level, title, category }: QuestCardProps) {
    return (
        <div className={css.cardContainer}>
            <div className={css.cardHeader}>
                <div className={css.cardHeaderSelector}>
                    <div
                        className={`${css.roundLevelSelector} ${css[level]}`}
                    ></div>
                    <div className={css.levelTitle}>{level}</div>
                    <MdArrowDropDown />
                </div>
                <div>
                    <MdOutlineStar />
                </div>
            </div>
            <div className={css.inputContainer}>
                <div className={css.cardTitle}>{title}</div>
                <input type="text" className={css.cardInput} />
            </div>
            <div className={css.cardBottomContainer}>
                <div className={css.categorySelector}>
                    <div>{category}</div>
                    <MdArrowDropDown />
                </div>
                <div className={css.buttonList}>
                    <div className={css.clearButton}>
                        <MdOutlineClear />
                    </div>
                    <div className={css.startButton}>START</div>
                </div>
            </div>
        </div>
    );
}
