import React from 'react';
import Banner from '../Banner/Banner';
import ClubForum from '../CLub&Forum/ClubForum';
import ClubCtp from '../CLubCTP/ClubCtp';
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <Banner/>
            <UpcomingEvents />
            <ClubForum />
            <ClubCtp />
            <Contact />
        </div>
    );
};

export default Home;