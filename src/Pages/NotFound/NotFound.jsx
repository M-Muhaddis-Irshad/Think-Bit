import React from 'react';
import './NotFound.css'
import { Result } from 'antd';
import { Link } from 'react-router';

const NotFound = () => {
    return (

        <div className='resultContainer'>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Link to='/start' className='goBackBtn'>Back Home</Link>}
            />
        </div>

    )
}

export default NotFound