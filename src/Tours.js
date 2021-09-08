import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>ours tours</h2>
        <div className="underline"></div>
      </div>
      
      <div>
  
      {tours.map((t) => {
        return <Tour key={t.id}{...t} removeTour={ removeTour } />
        })}
      </div>
    </section>
  );
};

export default Tours;
