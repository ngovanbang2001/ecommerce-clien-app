
import CommonBreadcrumb from '@/components/common/breadcumb/common-breadcrumb';
import React from 'react'
import { getDictionary } from '@/dictionaries';
import Content from '@/components/features/client/profile/content';

const Page = async({ params: { lang } }) => {
  const dict = await getDictionary(lang)

  return (
    <div className='py-4 flex flex-col gap-[12px]'>
      <CommonBreadcrumb />
      <Content />
    </div>
  );
};

export default Page;