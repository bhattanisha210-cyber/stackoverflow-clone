import { Link } from "react-router-dom";

export default function Card({ id, question, creator, tags, createDate }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{question}</h2>

      <Link
        to={`/questions/${id}`}
        className="text-blue-500 hover:underline"
      >
        View Question
      </Link>

      <p className="text-gray-600 mb-4">
        Asked by: {creator} on {new Date(createDate).toLocaleDateString()}
      </p>

      <div className="mt-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
