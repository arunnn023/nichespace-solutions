import React, { memo } from 'react';
import { teamMembers } from './constant';
import { motion } from 'framer-motion';

const TeamCard = memo(({ member, large }) => (
  <div
    className={`flex flex-col items-center text-center ${
      large ? '' : 'bg-gray-50 p-6 rounded-lg'
    }`}
  >
    <img
      src={member.image}
      alt={member.name}
      loading="lazy"
      onError={(e) => (e.target.src = '/images/default-avatar.webp')}
      className={`${large ? 'w-32 h-32' : 'w-24 h-24'} rounded-full object-cover mb-4 shadow-md`}
    />
    <h3 className={`font-semibold ${large ? 'text-xl' : 'text-lg'} text-gray-800`}>
      {member.name}
    </h3>
    <p className="text-sm text-gray-500 mb-2">{member.title}</p>
    {!large && <p className="text-sm text-gray-600">{member.summary}</p>}
  </div>
));

const Team = () => {
  return (
    <motion.section
    
    initial={{opacity:0, x:200}}
     transition={{duration: 1}}
     whileInView={{opacity: 1, x:0}}
     viewport={{once:true}}

      id="team"
      className="bg-black/70 py-12 px-4 sm:px-6 lg:px-16 mt-20 rounded-full"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-black-800">Meet our amazing team</h2>
        <p className="mt-2 text-lg text-white-600">
          We are a team of strategists, designers, and innovators passionate about helping agencies grow.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
        {teamMembers.slice(0, 2).map((member, index) => (
          <TeamCard key={index} member={member} large />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.slice(2).map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
    </motion.section>
  );
};

export default Team;