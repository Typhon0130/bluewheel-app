import React from 'react';
import { HomeWrapper } from './style';
import { AppLayout } from '../../layout/Index';
import LandingPage from '../../layout/landing/Index';
import Article from './Article';
import Miner from './Miner';
import Crypto from './Crypto';
import Hashrate from './Hashrate';
import Rig from './Rig';

const Home = () => {
  return (
    <AppLayout>
      <LandingPage />
      <HomeWrapper>
        <Article />
        <Miner />
        <Hashrate />
        <Crypto />
        <Rig />
      </HomeWrapper>
    </AppLayout>
  )
}

export default Home
