import { AuthProvider, useAuth } from "../context/AuthContext";
import Header from "../Header/Header";
import LandingPage from "../LandingPage/LandingPage";
import QuestDashboard from "../QuestDashboard/QuestDashboard";
import css from "./App.module.css";

function AppContent() {
    const { isLoggedIn } = useAuth();
    return (
        <div className={css.container}>
            {isLoggedIn ? (
                <>
                    <Header userName="John Doe" />
                    <QuestDashboard />
                </>
            ) : (
                <LandingPage />
            )}
        </div>
    );
}

function App() {
    return (
        <AuthProvider>
            <AppContent />
        </AuthProvider>
    );
}

export default App;
