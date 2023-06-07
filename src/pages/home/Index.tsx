import React from 'react';
import { HomeWrapper } from './style';
import { AppLayout } from '../../layout/Index';
import LandingPage from '../../layout/landing/Index';
import Article from './Article';
import Miner from './Miner';
import Crypto from './Crypto';
import Hashrate from './Hashrate';
import Rig from './Rig';
import Stoke from './Stoke';


const Home = () => {
  return (
    <AppLayout>
      <LandingPage />
      <HomeWrapper>
        <Article />
        <Miner />
        <Hashrate />
        <Stoke />
        <Rig />
        <Crypto />
      </HomeWrapper>
    </AppLayout>
  )
}

export default Home
