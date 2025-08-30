import React from "react";
import css from "./LandingPage.module.css";

export default function LandingPage() {
    return (
        <div className={css.landingPageContainer}>
            <div className={css.landingContent}>
                <h1 className={css.landingH1}>Questify</h1>
                <h2 className={css.landingH2}>
                    Questify will turn your life into a thrilling game full of
                    amazing quests and exciting challenges.
                </h2>

                <div className={css.authSection}>
                    <p>Choose your name to sign up or log in</p>
                    <div className={css.inputGroup}>
                        <div className={css.inputWrapper}>
                            <input
                                className={css.usernameInput}
                                placeholder="Your email..."
                            />
                            <input
                                className={css.usernameInput}
                                placeholder="Your password..."
                            />
                        </div>
                        <button className={css.goButton}>go!</button>
                    </div>
                </div>
            </div>
            <div className={css.bgStack}>
                <div className={css.backgroundShapeGray} />
                <div className={css.backgroundShapeBlue} />
            </div>
        </div>
    );
}
