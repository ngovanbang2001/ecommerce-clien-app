import Slider from '@/components/features/home/slider';
import ListProduct from '@/components/features/home/list-product';
import React from 'react'
import CollectionCard from '@/components/features/home/collection-card';
import NewArrival from '@/components/features/home/new-arrival';
import Blog from '@/components/features/home/blog';
import Social from '@/components/features/home/social';
import { getDictionary } from '@/dictionaries';

const Home = async({ params: { lang } }) => {
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