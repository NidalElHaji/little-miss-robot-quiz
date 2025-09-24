import InformationCard from "./components/information/InformationCard";
import GameLayout from "./components/layout/GameLayout";
import InformationContainer from "./components/layout/InformationContainer";
import QuizContainer from "./components/layout/QuizContainer";
import QuizCard from "./components/quiz/QuizCard";

const App = () => {
    return (
        <main>
            <GameLayout>
                <InformationContainer>
                    <InformationCard />
                </InformationContainer>
                <QuizContainer>
                    <QuizCard />
                </QuizContainer>
            </GameLayout>
        </main>
    );
};

export default App;
