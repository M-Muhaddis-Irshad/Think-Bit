import React, { useEffect, useState } from 'react'
// import './CustomSkeleton.css'
import { Link } from 'react-router-dom'
import Skeleton from './CustomSkeleton/CustomSkeleton.jsx'

const quizes = [
    { id: 'html', Name: "Html", color: '#e34c26' },
    { id: 'css', Name: "CSS", color: '#264de4' },
    { id: 'javascript', Name: "JavaScript", color: '#f7df1e' },
    { id: 'react', Name: "React", color: '#61dafb' }
]

const Home = () => {

    const [Loader, setLoader] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setLoader(1)
        }, 1500);
    }, [])

    return (
        <>

            {Loader > 0 ? (

                // <div className='grid grid-cols-12 gap-1 max-[900px]:place-items-center'>
                <div className='grid grid-cols-12 justify-between gap-3 w-full max-[810px]:place-items-stretch'>

                    {quizes.map((data, index) => {

                        const { id, Name, color } = data;
                        return (
                            <Link
                                to={`/quiz/${id}`}
                                key={id}
                                style={{ textDecoration: 'none' }}

                                className='category_card_parent'>
                                <div
                                    className="glass-card"
                                    style={{ borderTop: `4px solid ${color}` }}
                                >
                                    <h3 className='card_heading'>
                                        {Name}
                                    </h3>
                                    <p style={{ color: '#94a3b8' }}>
                                        Test your knowledge
                                    </p>
                                    <button className="btn mt-4 w-full">
                                        Start Quiz
                                    </button>
                                </div>

                            </Link>
                        )
                    })
                    }
                </div>

            ) :
                (<> <Skeleton /> </>)
            }

        </>

    )

}

export default Home