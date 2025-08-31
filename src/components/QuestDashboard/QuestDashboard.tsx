// Будет содержать разделы "TODAY","TOMORROW", "DONE"

import { promoCardsData } from "../PromoQuestCards/PromoCardsData";
import QuestCard from "../QuestCard/QuestCard";
import css from "./QuestDashboard.module.css";

function QuestDashboard() {
    return (
        <div className={css.QuestDashboard}>
            {promoCardsData.map((card) => (
                <QuestCard
                    key={`dash-${card.id}`}
                    title={card.title}
                    level={card.difficulty}
                    category={card.category}
                />
            ))}
        </div>
    );
}

export default QuestDashboard;
