import Header from "../Header/Header";
// import LandingPage from "../LandingPage/LandingPage";
// import QuestCard from "../QuestCard/QuestCard";
import QuestDashboard from "../QuestDashboard/QuestDashboard";
import css from "./App.module.css";

function App() {
    return (
        <div className={css.container}>
            <Header userName="John Doe" />
            {/* <LandingPage /> */}
            <QuestDashboard />
        </div>
    );
}

export default App;
