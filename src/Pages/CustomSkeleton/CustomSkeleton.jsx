import React, { useState } from 'react';
import './CustomSkeleton.css'
import { Card } from 'antd';

const CustomSkeleton = () => {
    const [loading, setLoading] = useState(true);
    return (

        <div className='grid grid-cols-12 justify-between gap-3 w-full max-[810px]:place-items-stretch'>
            {
                Array.from({ length: 4 }).map((_, i) => (

                    // <div key={i} className="col-span-3">
                    <Card
                        key={i}
                        loading={loading}
                    />
                    // </div>
                ))
            }
        </div>
    );
};
export default CustomSkeleton;