// import LandingPage from "../LandingPage/LandingPage";
// import QuestCard from "../QuestCard/QuestCard";
import QuestDashboard from "../QuestDashboard/QuestDashboard";
import css from "./App.module.css";

function App() {
  return (
    <div className={css.container}>
      {/* <LandingPage /> */}
      <QuestDashboard />
    </div>
  );
}

export default App;
