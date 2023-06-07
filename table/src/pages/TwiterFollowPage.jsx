import React from 'react';
import { TwitterFollowCard } from '../components/TwiterFollowCard/TwiterFollowCard';

export const TwiterFollowPage = () => {
  const users = [
    {
      userName: 'midudev',
      name: 'miguel',
      isFollowing: true
    },
    {
      userName: 'MMl',
      name: 'maria',
      isFollowing: false
    },
    {
      userName: 'TEo',
      name: 'mateo',
      isFollowing: true
    },
  ];

  return (
    <section>
      {
        users.map(({userName, name, isFollowing}, index) => (
            <TwitterFollowCard 
              key={userName}
              userName={userName} 
              initialIsFollowing={isFollowing}
            >
              {name}
            </TwitterFollowCard>
          )
        )
      }
    </section>
  )
}
