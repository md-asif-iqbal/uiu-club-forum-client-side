import React from 'react';
import Banner from '../Banner/Banner';
import ClubForum from '../CLub&Forum/ClubForum';
import ClubCtp from '../CLubCTP/ClubCtp';
import UpcomingEvents from '../UpcomingEvents/UpcomingEvents';
import Contact from './Contact';
import RecentEvent from './RecentEvent';

const Home = () => {
    return (
        <div>
            <Banner/>
            <UpcomingEvents />
            <ClubForum />
            <ClubCtp />
            <RecentEvent />
            <Contact />
        </div>
    );
};

export default Home;