import React, { useState } from 'react'
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

    setTimeout(() => {
        setLoader(1)
    }, 1500);

    return (
        <>

            {Loader > 0 ? (

                <div className='grid grid-cols-12 gap-1'>

                    {quizes.map((data, index) => {

                        // console.log(index + 1, data)

                        const { id, Name, color } = data;
                        // font-size: 1.5rem; margin: 0px 0px 1rem; color: white;
                        return (
                            <Link to={`/quiz/${id}`} key={id} style={{ textDecoration: 'none' }} className='col-span-3 mx-2'>
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
                                    <button className="btn" style={{ marginTop: '1rem', width: '100%' }}>
                                        Start Quiz
                                    </button>
                                </div>

<button className='p-4 m-2 bg-blue-800 cursor-pointer transition-all hover:bg-blue-700 focus:bg-blue-500 focus:p-3  ' onClick={
    e => {
        e.preventDefault()
        e.requestFullscreen()
    }
}>Full screen</button>

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