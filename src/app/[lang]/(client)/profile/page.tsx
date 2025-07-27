
import CommonBreadcrumb from '@/components/breadcumb/common-breadcrumb';
import React from 'react'
import { getDictionary } from '@/dictionaries';
import Content from '@/containers/client/profile/content';

const Page = async ({ params: { lang } }: { params: { lang: string } }) => {
  const dict = await getDictionary(lang)

  return (
    <div className='py-4 flex flex-col gap-[12px]'>
      <CommonBreadcrumb />
      <Content />
    </div>
  );
};

export default Page;