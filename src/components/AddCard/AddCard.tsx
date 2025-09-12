import css from "./AddCard.module.css";
import { GoPlus } from "react-icons/go";

export const AddCard = () => {
  return (
    <div className={css.plusButtonContainer}>
      <GoPlus />
    </div>
  );
};
