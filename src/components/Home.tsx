import React, { Suspense, useState } from 'react';

const MemeCard = React.lazy(() => import('./MemeCard'));
const LoadingCard = () => (
    <div className="bg-white rounded-lg shadow-md p-6 h-48 animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
      <div className="flex justify-between items-center">
        <div className="h-8 bg-gray-200 rounded w-20"></div>
        <div className="h-4 bg-gray-200 rounded w-12"></div>
      </div>
    </div>
);

const Home = () => {
    const [votes, setVotes] = useState<number[]>([0, 0, 0]);
    const [searchTerm, setSearchTerm] = useState('');

    const handleVote = (index: number) => {
        const newVotes = [...votes];
        newVotes[index] += 1;
        setVotes(newVotes);
    };

    const memes = [
        { id: 1, quote: "I'm not lazy, I'm just conserving energy", author: "Every developer during code review"},
        { id: 2, quote: "Why do programmers prefer dark mode? Because light attracts bugs!", author: "Anonymous Developer" },
        { id: 3, quote: "I don't always test my code, but when I do, I do it in production", author: "The Most Interesting Developer in the World" },
    ];

    const filteredMemes = memes.filter(meme => 
        meme.quote.toLowerCase().includes(searchTerm.toLowerCase()) ||
        meme.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const memesWithVotes = filteredMemes.map((meme, index) => ({
        ...meme,
        votes: votes[memes.findIndex(m => m.id === meme.id)],
        originalIndex: memes.findIndex(m => m.id === meme.id)
    })).sort((a, b) => b.votes - a.votes);

    return (
        <div className='mx-auto max-w-4xl p-6 bg-gray-50 rounded-lg shadow-md mt-6'>
            <h1 className='text-3xl font-bold text-center mb-8'>Developer Meme Quotes</h1>

            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search quotes or authors..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {memesWithVotes.map((meme) => (
                    <Suspense key={meme.id} fallback={<LoadingCard />}>
                        <MemeCard
                            quote={meme.quote}
                            author={meme.author}
                            votes={meme.votes}
                            onVote={() => handleVote(meme.originalIndex)}
                            searchTerm={searchTerm}
                        />
                    </Suspense>
                ))}
            </div>
        </div>
    );
};

export default Home;