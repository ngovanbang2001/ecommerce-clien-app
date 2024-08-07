
import React from 'react'
import { getDictionary } from '@/dictionaries';

const Page = async ({ params: { lang } }: { params: { lang: string } }) => {
  const dict = await getDictionary(lang)

  return (
    <div className='py-4 flex flex-col gap-[12px]'>
    
    </div>
  );
};

export default Page;