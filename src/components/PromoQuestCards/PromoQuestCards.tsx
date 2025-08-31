import Slider from "react-slick";
import QuestCard from "../QuestCard/QuestCard";
import css from "./PromoQuestCards.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Моковые данные для рекламных карточек
const promoCardsData = [
    {
        id: 1,
        title: "Submit report",
        difficulty: "Hard",
        category: "Work",
        type: "Task",
    },
    {
        id: 2,
        title: "Buy the gift for Mary",
        difficulty: "Easy",
        category: "Family",
        type: "Task",
    },
    {
        id: 3,
        title: "Visit the dentist at Lumident",
        difficulty: "Normal",
        category: "Health",
        type: "Task",
    },
    {
        id: 4,
        title: "Finish homework",
        difficulty: "Easy",
        category: "Learning",
        type: "Task",
    },
    {
        id: 5,
        title: "Morning run",
        difficulty: "Easy",
        category: "Health",
        type: "Task",
    },
    {
        id: 6,
        title: "Visit the dentist at Lumident",
        difficulty: "Hard",
        category: "Health",
        type: "Task",
    },
    {
        id: 7,
        title: "Webinar",
        difficulty: "Normal",
        category: "Learning",
        type: "Task",
    },
    {
        id: 8,
        title: "Finish homework",
        difficulty: "Easy",
        category: "Learning",
        type: "Task",
    },
    {
        id: 9,
        title: "Submit report",
        difficulty: "Hard",
        category: "Work",
        type: "Task",
    },
    {
        id: 10,
        title: "Buy the gift for Mary",
        difficulty: "Easy",
        category: "Family",
        type: "Task",
    },
    {
        id: 11,
        title: "Visit the dentist at Lumident",
        difficulty: "Normal",
        category: "Health",
        type: "Task",
    },
    {
        id: 12,
        title: "Finish homework",
        difficulty: "Easy",
        category: "Learning",
        type: "Task",
    },
    {
        id: 13,
        title: "Morning run",
        difficulty: "Easy",
        category: "Health",
        type: "Task",
    },
    {
        id: 14,
        title: "Visit the dentist at Lumident",
        difficulty: "Hard",
        category: "Health",
        type: "Task",
    },
    {
        id: 15,
        title: "Webinar",
        difficulty: "Normal",
        category: "Learning",
        type: "Task",
    },
    {
        id: 16,
        title: "Finish homework",
        difficulty: "Easy",
        category: "Learning",
        type: "Task",
    },
];

export default function PromoQuestCards() {
    const settings = {
        className: css.slider,
        dots: false,
        infinite: true,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows: false,
        pauseOnHover: false,
        swipe: false,
        touchMove: false,
        rtl: true,
    };

    return (
        // Абсолютный wrapper внутри landingPageContainer (родитель уже position: relative; overflow: hidden)
        <div className={css.contained}>
            <div className={css.diagonalCanvas}>
                <Slider {...settings}>
                    {promoCardsData.map((card) => (
                        <div key={card.id} className={css.slide}>
                            <div className={`${css.slideInner} ${css.upright}`}>
                                <QuestCard
                                    title={card.title}
                                    level={card.difficulty}
                                    category={card.category}
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
