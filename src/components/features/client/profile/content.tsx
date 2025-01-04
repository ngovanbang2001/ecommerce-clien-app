


"use client"
import React from 'react'
import VerticalTab from '@/components/common/tabs/vertical-tabs';
import { FaCircleUser } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { Tab, User } from '../../../../utils/types/common';
import { RiBillFill } from "react-icons/ri";
import { useInfo } from './_hooks/useInfo';
import UserTab from './_components/user-tab';

const Content = () => {
    const { user } = useInfo()

    const tabs = (user?: User) => {
        return [
            {
                id: 1,
                title: 'Profile',
                icon: <FaCircleUser />,
                content: <UserTab user={user} />
            },
            {
                id: 2,
                title: 'Order',
                icon: <RiBillFill />,
                content: <div>Order</div>
            },
            {
                id: 3,
                title: 'Settings',
                icon: <IoIosSettings />,
                content: <div>Settings</div>
            },
        ]
    }



    return (
        <VerticalTab tabs={tabs(user)} />
    );
};

export default Content;

