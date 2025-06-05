import React, { useState } from 'react';

const Home = () => {
    const [votes, setVotes] = useState<number[]>([0, 0, 0]);
    const handleVote = (index: number) => {
        const newVotes = [...votes];
        newVotes[index] += 1;
        setVotes(newVotes);
    };

    const memes = [
        { id: 1, quote: "I'm not lazy, I'm just conserving energy", author: "Every developer during code review"},
        { id: 2, quote: "Why do programmers prefer dark mode? Because light attracts bugs!", author: "Anonymous Developer" },
        { id: 3, quote: "I don't always test my code, but when I do, I do it in production", author: "The Most Interesting Developer in the World" },
    ]
    return (
        <div className='mx-auto max-w-4xl p-6 bg-gray-50 rounded-lg shadow-md'>
            <h1 className='text-3xl font-bold text-center mb-8'>Developer Meme Quotes</h1>

            <div className='rid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {memes.map((meme, index) => (
                    <div key={meme.id} className='bg-white rounded-lg shadow-md p-6 flex flex-col mt-6'>
                        <div className='flex-1'>
                            <p className='text-xl font-medium mb-4 text-gray-800'> "{meme.quote}"</p>
                            <p className='text-gray-600 italic'>- {meme.author}</p>
                        </div>
                        <div className='mt-6 flex items-center justify-between'>
                            <button onClick={() => handleVote(index)} className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200'>
                                Vote
                            </button>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-600 font-medium">
                                    {votes[index]}
                                </span>
                                <span className="text-gray-500">
                                    {votes[index] === 1 ? 'vote' : 'votes'}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;