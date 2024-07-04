
'use client'
import CommonBreadcrumb from '@/components/common/breadcumb/common-breadcrumb';
import React from 'react'
import useProfile from './_hooks/useProfile';
import VerticalTab from '@/components/common/tabs/vertical-tabs';
import { FaCircleUser } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { Tab } from '../../../../../types/common';
import { getDictionary } from '@/dictionaries';

const Page = async({ params: { lang } }) => {
  const dict = await getDictionary(lang)
  const { data } = useProfile()

  const tabs: Tab[] = [
    {
      id: 1,
      title: 'Profile',
      icon: <FaCircleUser />,
      content: <div>{data?.user?.name}</div>
    },
    {
      id: 2,
      title: 'Settings',
      icon: <IoIosSettings />,
      content: <div>Profile content</div>
    },
  ]
  return (
    <div className='py-4 flex flex-col gap-[12px]'>
      <CommonBreadcrumb />
      <VerticalTab tabs={tabs} />
    </div>
  );
};

export default Page;