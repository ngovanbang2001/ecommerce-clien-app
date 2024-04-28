import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

const Home = () => {
  const { locale } = useRouter();

  return (
    <h1>Hello</h1>
  );
};

export default Home;