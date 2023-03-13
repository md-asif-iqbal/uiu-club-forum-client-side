import React from 'react';
import ForumActivity from './ForumActivity';
import ForumBanner from './ForumBanner';
import ForumMembers from './ForumMembers';
import ForumRegister from './ForumRegister';

const Forum = () => {
    return (
      <div>
            <ForumBanner />
            <ForumRegister />
            <ForumActivity />
            
            <ForumMembers/>
      </div>
    );
};

export default Forum;