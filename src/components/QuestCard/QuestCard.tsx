import css from "./QuestCard.module.css";
import { MdOutlineClear, MdOutlineStar, MdArrowDropDown } from "react-icons/md";
import { useEffect, useState } from "react";
import type { PromoCard } from "../PromoQuestCards/PromoCardsData";

type Difficulty = PromoCard["difficulty"];
type Category = PromoCard["category"];

interface QuestCardProps {
  level: Difficulty; // используем существующий тип
  title: string;
  category: Category;
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

const DOT_BY_DIFF: Record<Difficulty, string> = {
  Easy: "#00d7ff",
  Normal: "#24d40c",
  Hard: "#db0837",
};

const DIFFICULTIES: Difficulty[] = ["Easy", "Normal", "Hard"];
const CATEGORIES: Category[] = [
  "STUFF",
  "FAMILY",
  "HEALTH",
  "LEARNING",
  "LEISURE",
  "WORK",
];

export default function QuestCard({
  level,
  title,
  category,
  style,
}: QuestCardProps) {
  const [localDifficulty, setLocalDifficulty] = useState<Difficulty>(level);
  const [localCategory, setLocalCategory] = useState<Category>(category);
  useEffect(() => setLocalCategory(category), [category]);
  useEffect(() => setLocalDifficulty(level), [level]);

  const categoryKey = category.toUpperCase();

  const cardStyle: React.CSSProperties = {
    backgroundColor: CATEGORY_BG[categoryKey] ?? "#fff",
  };

  const dotStyle: React.CSSProperties = {
    backgroundColor: DOT_BY_DIFF[localDifficulty],
  };

  return (
    <div className={css.cardContainer} style={style}>
      <div className={css.cardHeader}>
        <div className={css.cardHeaderSelector}>
          <div className={css.roundLevelSelector} style={dotStyle}></div>
          <div className={css.levelTitle}>{localDifficulty}</div>
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
        <div className={css.categorySelector} style={cardStyle}>
          <div className={css.categoryTitle}>{category}</div>
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
