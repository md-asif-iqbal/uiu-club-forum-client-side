import React from 'react';
import EventConfarence from './EventConfarence';
import EventsBanner from './EventsBanner';
import EventsBlogs from './EventsBlogs';
import EventSchedule from './EventSchedule';
// import EventSpeakers from './EventSpeakers';

const Events = () => {
    return (
        <div>

           <EventsBanner/>
           <EventConfarence/>
            {/* <EventSpeakers /> */}
            <EventSchedule />
            <EventsBlogs/>
        </div>
    );
};

export default Events;