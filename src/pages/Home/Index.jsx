
import React from 'react';
import AboutUs from './components/AboutUs/AboutUs';
import CompetitionHome from './components/CompetitionHome/CompetitionHome';
import ContactHome from './components/ContactHome/ContactHome';
import Featured from './components/Featured/Featured';
import GalleryHome from './components/GalleryHome/GalleryHome';
import NewsHome from './components/NewsHome/NewsHome';
import './index.scss';
export default function Home() {

  return (
    <div className='home'>
      <Featured />
      <AboutUs />
      <GalleryHome />
      <CompetitionHome />
      <NewsHome />
      <ContactHome />
    </div>
  );
}
