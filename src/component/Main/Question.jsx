import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import mockQuestions from '../../data/mockQuestions';

export default function Question() {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    const foundQuestion = mockQuestions.find(
      (item) => item.id === parseInt(id, 10)
    );
    setQuestion(foundQuestion);
  }, [id]);

  return (
    <>
      {!question && (
        <div className="text-center text-2xl">
          <h1>Loading...</h1>
        </div>
      )}
      {question && (
        <div>
          <h2 className="text-xl">{question.title}</h2>
          <p>{question.body}</p>
        </div>
      )}
    </>
  );
}