import React from 'react'
import { useParams } from 'react-router-dom'

const Quiz = () => {

  const { category } = useParams();

  return (
    <div className="glass-card">
      <h2>{category.toUpperCase()} Quiz</h2>
      <p>Questions loading...</p>
    </div>
  );
}

export default Quiz