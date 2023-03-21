import React from 'react';
import ForumActivity from './ForumActivity';
import ForumBanner from './ForumBanner';
import ForumFAQ from './ForumFAQ';
import ForumMembers from './ForumMembers';
import ForumRegister from './ForumRegister';

const Forum = () => {
    return (
      <div>
            <ForumBanner />
            <ForumRegister />
            <ForumActivity />
            
        <ForumMembers />
        <ForumFAQ/>
      </div>
    );
};

export default Forum;