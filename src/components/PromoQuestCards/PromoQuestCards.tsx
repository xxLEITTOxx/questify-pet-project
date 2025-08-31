import Slider from "react-slick";
import QuestCard from "../QuestCard/QuestCard";
import css from "./PromoQuestCards.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { promoCardsData } from "./PromoCardsData";

export default function PromoQuestCards() {
    const settings = {
        className: css.slider,
        dots: false,
        infinite: true,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 8000,
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
