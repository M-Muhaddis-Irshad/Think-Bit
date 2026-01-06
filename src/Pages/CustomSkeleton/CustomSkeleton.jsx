import React, { useState } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Flex, Switch } from 'antd';
const actions = [
    <EditOutlined key="edit" />,
    <SettingOutlined key="setting" />,
    <EllipsisOutlined key="ellipsis" />,
];

const Skeleton = () => {
    const [loading, setLoading] = useState(true);
    return (

        <Flex gap="middle" align="start" vertical>
            {
                Array.from({ length: 4 }).map((val, i) => (

                    <Card loading={loading} key={i} className='min-w-2xs !bg-[#162242]' />
                ))
            }
        </Flex>
    );
};
export default Skeleton;