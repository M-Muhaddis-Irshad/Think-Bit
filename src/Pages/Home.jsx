import { Link } from 'react-router-dom';
import "../../src/index.css"

const LandingPage = () => {
    return (
        <div className="landing-container" style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div className="animate-fade-in">
                <h1 className='text-[64px] mb-4 max-[380px]:!text-4xl'>
                    Master Web Development
                </h1>
                <p
                className='main_heading'  
                >
                    Challenge yourself with interactive Quizzes in HTML, CSS, JavaScript and React.
                    Track your progress & become a better developer today.
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '4rem' }}>
                    <Link to="/start">
                        <button className="btn" style={{ fontSize: '1.2rem', padding: '0.8em 2em' }}>
                            Start Quiz
                        </button>
                    </Link>
                </div>

                <div className="grid-cols-2" style={{ textAlign: 'left', marginTop: '4rem' }}>
                    <div className="glass-card">
                        <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🚀</div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Fast Paced</h3>
                        <p style={{ color: '#94a3b8' }}>Test your knowledge under time pressure to improve your recall.</p>
                    </div>
                    <div className="glass-card">
                        <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>💡</div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Instant Feedback</h3>
                        <p style={{ color: '#94a3b8' }}>Learn from your mistakes immediately with detailed explanations.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
