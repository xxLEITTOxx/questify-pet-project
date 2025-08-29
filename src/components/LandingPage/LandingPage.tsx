import React from "react";
import css from "./LandingPage.module.css";

const LandingPage: React.FC = () => {
    return (
        <div className={css.landingPageContainer}>
            <div className={css.landingContent}>
                <h1>Questify</h1>
                <h2>
                    Questify will turn your life into a thrilling game full of
                    amazing quests and exciting challenges.
                </h2>
                <div className={css.authSection}>
                    <p>Choose your name to sign up or log in</p>
                    <div className={css.inputGroup}>
                        <input
                            type="text"
                            className={css.usernameInput}
                            placeholder="Your name..."
                        />
                        <button className={css.goButton}>go!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
