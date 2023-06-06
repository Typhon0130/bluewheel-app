import React from 'react';
import { HomeWrapper } from './style';
import { AppLayout } from '../../layout/Index';
import LandingPage from '../../layout/landing/Index';
import Article from './Article';
import Miner from './Miner';

const Home = () => {
  return (
    <AppLayout>
      <LandingPage />
      <HomeWrapper>
        <Article />
        <Miner />
      </HomeWrapper>
    </AppLayout>
  )
}

export default Home
