  export default function Card({ question, creator, createDate, tags }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold mb-2">{question}</h2>
      <p className="text-gray-600 mb-4">Asked by {creator} on {createDate}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            {tag}
          </span>  
        ))}
      </div>
    </div>
  );
} 
