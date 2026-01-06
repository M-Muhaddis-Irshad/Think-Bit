import React from 'react'
import { Link } from 'react-router-dom'

const quizes = [
    { id: 'html', Name: "Html", color: '#e34c26' },
    { id: 'css', Name: "CSS", color: '#264de4' },
    { id: 'javascript', Name: "JavaScript", color: '#f7df1e' },
    { id: 'react', Name: "React", color: '#61dafb' }
]

const Home = () => {

    return (
        <div className='grid grid-cols-12'>
            {
                quizes.map((data, index) => {

                    // console.log(index + 1, data)

                    const { id, Name, color } = data;

                    return (
                        <Link to={`/quiz/${id}`} key={index} className='p-5 col-span-3'>

                            <div>

                                <h1 className='!text-2xl text-6xl'>
                                    {Name}

                                </h1>

                                <h3 style={{ color: color }}>
                                    Data:
                                </h3>

                            </div>

                        </Link>
                    )
                })
            }
        </div>

    )

}

export default Home