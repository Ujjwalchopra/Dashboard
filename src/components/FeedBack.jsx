import React from 'react';

const feedback = [
  { name: 'Jenny Wilson', rating: 5, comment: 'The food was excellent and so was the service.' },
  { name: 'Dianne Russell', rating: 5, comment: 'We enjoyed the Eggs Benedict...' },
  // Add more feedback here
];

const Feedback = () => {
  return (
    <div className="feedback">
      <h2>Customer's Feedback</h2>
      {feedback.map((item, index) => (
        <div key={index} className="feedback-item">
          <h3>{item.name}</h3>
          <p>Rating: {item.rating} stars</p>
          <p>{item.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
