
import React, { useState, useMemo } from 'react';
import { FLASHCARDS } from '../../constants';
import type { Flashcard } from '../../types';

const FlashcardsView: React.FC = () => {
    const [allCards] = useState<Flashcard[]>(FLASHCARDS);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [activeCategory, setActiveCategory] = useState<'All' | Flashcard['category']>('All');

    const filteredCards = useMemo(() => {
        if (activeCategory === 'All') return allCards;
        return allCards.filter(card => card.category === activeCategory);
    }, [activeCategory, allCards]);
    
    const currentCard = filteredCards[currentIndex];
    
    const handleNext = () => {
        setIsFlipped(false);
        setTimeout(() => {
             setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredCards.length);
        }, 150);
    };

    const handlePrev = () => {
        setIsFlipped(false);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredCards.length) % filteredCards.length);
        }, 150);
    };

    const handleCategoryChange = (category: 'All' | Flashcard['category']) => {
        setActiveCategory(category);
        setCurrentIndex(0);
        setIsFlipped(false);
    };
    
    const categories: ('All' | Flashcard['category'])[] = ['All', 'Fundamentals', 'Operations', 'Architecture', 'Performance'];

    return (
        <div className="flex flex-col items-center justify-center p-4 animate-fade-in h-full">
            <header className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white">Flashcards</h2>
                <p className="text-slate-400 mt-1">Review key concepts to solidify your knowledge.</p>
            </header>
            
            <div className="mb-6 flex flex-wrap justify-center gap-2">
                {categories.map(cat => (
                    <button 
                        key={cat} 
                        onClick={() => handleCategoryChange(cat)}
                        className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${activeCategory === cat ? 'bg-brand-green text-slate-900' : 'bg-slate-700 hover:bg-slate-600'}`}>
                        {cat}
                    </button>
                ))}
            </div>

            <div className="w-full max-w-2xl" style={{ perspective: '1000px' }}>
                <div 
                    className="relative w-full h-80 transition-transform duration-500"
                    style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
                    onClick={() => setIsFlipped(!isFlipped)}
                >
                    {/* Front of card */}
                    <div className="absolute w-full h-full bg-slate-800 border border-slate-700 rounded-xl p-6 flex flex-col justify-center items-center text-center cursor-pointer" style={{ backfaceVisibility: 'hidden' }}>
                        <span className="absolute top-4 left-4 text-xs font-semibold text-brand-green bg-brand-green/10 px-2 py-1 rounded-full">{currentCard?.category}</span>
                        <h3 className="text-2xl font-bold text-slate-100">{currentCard?.front}</h3>
                    </div>
                    {/* Back of card */}
                    <div className="absolute w-full h-full bg-brand-dark-green border border-brand-green/50 rounded-xl p-6 flex flex-col justify-center text-left cursor-pointer" style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
                        <p className="text-slate-100">{currentCard?.back}</p>
                        {currentCard?.example && (
                            <pre className="mt-4 bg-slate-900/50 p-3 rounded-md text-sm text-slate-300 overflow-x-auto">
                                <code>{currentCard.example}</code>
                            </pre>
                        )}
                    </div>
                </div>
            </div>

            <div className="mt-8 flex items-center justify-between w-full max-w-2xl">
                <button onClick={handlePrev} className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-bold transition-colors">Previous</button>
                <p className="text-slate-400 font-medium">{currentIndex + 1} / {filteredCards.length}</p>
                <button onClick={handleNext} className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-bold transition-colors">Next</button>
            </div>
        </div>
    );
};

export default FlashcardsView;
