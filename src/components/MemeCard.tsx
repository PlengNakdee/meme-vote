interface MemeCardProps {
  quote: string;
  author: string;
  votes: number;
  onVote: () => void;
  searchTerm: string;
}

const MemeCard = ({ quote, author, votes, onVote, searchTerm }: MemeCardProps) => {
  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) {
      return text;
    }

    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);

    return parts.map((part, i) => 
      regex.test(part) ? (
        <span key={i} className="bg-yellow-200">{part}</span>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col mt-6">
      <div className="flex-1">
        <p className="text-xl font-medium mb-4 text-gray-800">
          "{highlightText(quote, searchTerm)}"
        </p>
        <p className="text-gray-600 italic">
          - {highlightText(author, searchTerm)}
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
};

export default MemeCard;