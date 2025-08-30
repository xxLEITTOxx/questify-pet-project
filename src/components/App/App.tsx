import LandingPage from "../LandingPage/LandingPage";
import QuestCard from "../QuestCard/QuestCard";
import css from "./App.module.css";

function App() {
    return (
        <div className={css.container}>
            <LandingPage />
            {/* <QuestCard /> */}
        </div>
    );
}

export default App;
