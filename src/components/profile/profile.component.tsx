import React, { MutableRefObject, useState } from 'react';
import { aboutMe } from '../../util/data';
import { Card } from '../../styles/styles';
import { ProfileContainer } from './profile.styles';
import useMousePosition from '../../hooks/useMousePosition';
import Skill from './skills/skill.component';

interface props {
  profileRef: MutableRefObject<null>;
}

const Profile: React.FC<props> = ({ profileRef }) => {
  let initSkillz = [
    'Javascript',
    'React',
    'Nodejs',
    'Express.js',
    'firebase',
    'HTML5',
    'MongoDB',
    'SCSS',
    'Angular',
    'Java',
    'Redux',
    'Unity3D',
    'C#',
    'VR',
    'Python',
    'Typescript',
    'Google-scipts',
    'GraphQL',
  ];
  const [skills, setSkillz] = useState(initSkillz);
  const { mousePosition, setMousePosition } = useMousePosition();
  const swapCells = (index: number) => {
    // Tile to swap
    let tileIndex = skills.indexOf('');

    let tempSkillz = [...skills];
    let temp = tempSkillz[tileIndex];
    tempSkillz[tileIndex] = tempSkillz[index];
    tempSkillz[index] = temp;

    setSkillz(tempSkillz);
  };

  return (
    <ProfileContainer ref={profileRef}>
      <div className='about-me'>
        <div className='information'>
          <Card className='card'>
            <blockquote className='current'>
              <label>{aboutMe}</label>
            </blockquote>
          </Card>
        </div>
      </div>
      <div className='skills'>
        <div className='grid'>
          {skills.map((skill, idx) => (
            <Skill key={idx}>{skill}</Skill>
          ))}
        </div>
      </div>
    </ProfileContainer>
  );
};

export default Profile;
