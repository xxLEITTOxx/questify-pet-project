import css from "./QuestCard.module.css";
import { MdOutlineClear, MdOutlineStar, MdArrowDropDown } from "react-icons/md";

interface QuestCardProps {
  level: string;
  title: string;
  category: string;
  // Новый проп: стиль для контейнера карточки (локальная переопределяемая настройка)
  style?: React.CSSProperties;
}

const CATEGORY_BG: Record<string, string> = {
  STUFF: "#b9c3c8",
  FAMILY: "#ffe6d3",
  HEALTH: "#cdf7ff",
  LEARNING: "#fff6c0",
  LEISURE: "#f8d2ff",
  WORK: "#d3f6ce",
};

const LEVEL_DOT: Record<string, string> = {
  easy: "#00d7ff",
  hard: "#db0837",
  normal: "#24d40c",
};

export default function QuestCard({
  level,
  title,
  category,
  style,
}: QuestCardProps) {
  const categoryKey = category.toUpperCase();
  const levelKey = level.toLowerCase();

  const cardStyle: React.CSSProperties = {
    backgroundColor: CATEGORY_BG[categoryKey] ?? "#fff",
  };

  const dotStyle: React.CSSProperties = {
    backgroundColor: LEVEL_DOT[levelKey] ?? "#24d40c",
  };

  return (
    <div className={css.cardContainer} style={style}>
      <div className={css.cardHeader}>
        <div className={css.cardHeaderSelector}>
          <div className={css.roundLevelSelector} style={dotStyle} />
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
        <div className={css.categorySelector} style={cardStyle}>
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
