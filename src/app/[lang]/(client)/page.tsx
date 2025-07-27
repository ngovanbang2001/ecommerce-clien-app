import Slider from '@/containers/client/home/slider';
import ListProduct from '@/containers/client/home/list-product';
import React from 'react'
import CollectionCard from '@/containers/client/home/collection-card';
import NewArrival from '@/containers/client/home/new-arrival';
import Blog from '@/containers/client/home/blog';
import Social from '@/containers/client/home/social';
import { getDictionary } from '@/dictionaries';

const Home = async({ params: { lang } }: { params: { lang: string } }) => {
  const dict = await getDictionary(lang)
  
  return (
    <div>
      <Slider dict={dict}/>
      <CollectionCard dict={dict}/>
      <ListProduct dict={dict}/>
      <NewArrival dict={dict}/>
      <Blog dict={dict}/>
      <Social dict={dict}/>
    </div>
  );
};

export default Home;