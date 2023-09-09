import React, { useRef } from 'react';
import Title from '../../components/Title/Title';
import Timeline from '../../components/Timeline/Timeline';
import useVisiblePage from '../../common/hooks/useVisiblePage';
import { Page } from '../../common/reducers/visible-page/visible-page-types';

const WorkExperience = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useVisiblePage(ref, Page.EXPERIENCE);

  return (
    <div ref={ref} className='work-experience'>
      <div className='left-container'>
        <Title title='EXPERIENCIA' subtitle='LABORAL' />
        <div className='dots' />
      </div>
      <Timeline />
    </div>
  );
};

export default WorkExperience;
