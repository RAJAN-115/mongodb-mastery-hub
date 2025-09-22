
import React, { useState, useCallback } from 'react';
import { QUIZ_QUESTIONS } from '../../constants';
import type { Question } from '../../types';

const QuizView: React.FC = () => {
    const [questions] = useState<Question[]>(QUIZ_QUESTIONS);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];

    const handleAnswerSelect = (answer: string) => {
        if (isAnswered) return;
        setSelectedAnswer(answer);
        setIsAnswered(true);
        if (answer === currentQuestion.correctAnswer) {
            setScore(prev => prev + 1);
        }
    };

    const handleNextQuestion = useCallback(() => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedAnswer(null);
            setIsAnswered(false);
        } else {
            setShowResults(true);
        }
    }, [currentQuestionIndex, questions.length]);
    
    const handleRestartQuiz = () => {
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setIsAnswered(false);
        setScore(0);
        setShowResults(false);
    };

    const getButtonClass = (option: string) => {
        if (!isAnswered) {
            return "bg-slate-700 hover:bg-slate-600";
        }
        if (option === currentQuestion.correctAnswer) {
            return "bg-green-500/80";
        }
        if (option === selectedAnswer) {
            return "bg-red-500/80";
        }
        return "bg-slate-700 opacity-50";
    };

    if (showResults) {
        return (
            <div className="flex flex-col items-center justify-center h-full animate-fade-in">
                <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 text-center max-w-lg w-full">
                    <h2 className="text-3xl font-bold text-white mb-4">Quiz Complete!</h2>
                    <p className="text-brand-green text-5xl font-bold mb-2">
                        {Math.round((score / questions.length) * 100)}%
                    </p>
                    <p className="text-slate-400 mb-6">You answered {score} out of {questions.length} questions correctly.</p>
                    <button
                        onClick={handleRestartQuiz}
                        className="bg-brand-green text-slate-900 font-bold py-3 px-6 rounded-lg hover:bg-brand-green/80 transition-colors duration-200"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }
    
    return (
        <div className="max-w-3xl mx-auto p-4 animate-fade-in">
             <header className="mb-8">
                <h2 className="text-3xl font-bold text-white">MongoDB Quiz</h2>
                <p className="text-slate-400 mt-1">Test your knowledge. Question {currentQuestionIndex + 1} of {questions.length}.</p>
            </header>
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50">
                <h3 className="text-xl font-semibold text-slate-100 mb-6">{currentQuestion.question}</h3>
                <div className="space-y-4">
                    {currentQuestion.options.map(option => (
                        <button
                            key={option}
                            onClick={() => handleAnswerSelect(option)}
                            disabled={isAnswered}
                            className={`w-full text-left p-4 rounded-lg transition-colors duration-200 font-medium ${getButtonClass(option)}`}
                        >
                            {option}
                        </button>
                    ))}
                </div>
                {isAnswered && (
                    <div className="mt-6 p-4 bg-slate-900/50 rounded-lg animate-fade-in">
                        <h4 className="font-bold text-lg text-brand-green mb-2">Explanation</h4>
                        <p className="text-slate-300">{currentQuestion.explanation}</p>
                        <button
                            onClick={handleNextQuestion}
                            className="mt-4 w-full bg-brand-green text-slate-900 font-bold py-3 px-6 rounded-lg hover:bg-brand-green/80 transition-colors duration-200"
                        >
                            {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default QuizView;
