import React from 'react';
import EventConfarence from './EventConfarence';
import EventsBanner from './EventsBanner';
import EventSchedule from './EventSchedule';
import EventSpeakers from './EventSpeakers';

const Events = () => {
    return (
        <div>
           <EventsBanner/>
           <EventConfarence/>
            {/* <EventSpeakers /> */}
            <EventSchedule/>
        </div>
    );
};

export default Events;