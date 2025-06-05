interface MemeCardProps {
  quote: string;
  author: string;
  votes: number;
  onVote: () => void;
}

const MemeCard = ({ quote, author, votes, onVote }: MemeCardProps) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col mt-6">
    <div className="flex-1">
      <p className="text-xl font-medium mb-4 text-gray-800">
        "{quote}"
      </p>
      <p className="text-gray-600 italic">
        - {author}
      </p>
    </div>
    
    <div className="mt-6 flex items-center justify-between">
      <button 
        onClick={onVote}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
      >
        Vote
      </button>
      <div className="flex items-center gap-2">
        <span className="text-gray-600 font-medium">
          {votes}
        </span>
        <span className="text-gray-500">
          {votes === 1 ? 'vote' : 'votes'}
        </span>
      </div>
    </div>
  </div>
);

export default MemeCard;