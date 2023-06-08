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
import Farm from './Farm';
import World from './World';
import Calc from './Calc';
import Contact from './Contact';


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
        <Farm />
        <World />
        <Calc />
        <Contact />
      </HomeWrapper>
    </AppLayout>
  )
}

export default Home
