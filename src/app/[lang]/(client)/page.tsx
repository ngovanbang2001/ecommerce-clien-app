import Slider from '@/components/features/client/home/slider';
import ListProduct from '@/components/features/client/home/list-product';
import React from 'react'
import CollectionCard from '@/components/features/client/home/collection-card';
import NewArrival from '@/components/features/client/home/new-arrival';
import Blog from '@/components/features/client/home/blog';
import Social from '@/components/features/client/home/social';
import { getDictionary } from '@/dictionaries';

const Home = async({ params: { lang } }: { params: { lang: string } }) => {
  const dict = await getDictionary(lang)
  
  return (
    <div>
      <Slider />
      <CollectionCard />
      <ListProduct />
      <NewArrival />
      <Blog />
      <Social />
    </div>
  );
};

export default Home;