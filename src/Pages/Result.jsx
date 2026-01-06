import React from 'react'

const Result = () => {
    return (
        <div className="glass-card">
            <h2>Quiz Completed!</h2>
            <p style={{ fontSize: '2rem', margin: '2rem 0' }}>Score: 0 / 0</p>
            <Link to="/">
                <button className="btn">Play Again</button>
            </Link>
        </div>
    );
}

export default Result