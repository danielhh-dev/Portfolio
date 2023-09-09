/* eslint-disable max-len */
import React, { useRef } from 'react';
import Button from '../../common/components/Button/Button';
import Link from '../../common/components/Link/Link';
import { LinkTypes } from '../../common/components/Link/link-types';
import useIntersectionObserver from '../../common/hooks/useIntersectionObserver';
import useVisiblePage from '../../common/hooks/useVisiblePage';
import { Page } from '../../common/reducers/visible-page/visible-page-types';
import Title from '../../components/Title/Title';

const WhoAmI = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useVisiblePage(ref, Page.WHOAMI);
  const animationEntry = useIntersectionObserver(ref, { freezeOnceVisible: true });

  return (
    <div ref={ref} className='whoami'>
      <div className='whoami__container'>
        <Title title='Sobre mí  ' subtitle='~: danielhh-dev' />
        <p>
        ¡Hola! mi nombre es <b>Daniel</b>, Creador de experiencias web. Con más de 3 años de experiencia en diseño práctico, desarrollo web y programación en general.
        </p>
        <p>
        He desempeñado roles en diversos entornos, desde una sociedad de astronomía en la UNAM hasta pequeñas empresas, pero mi misión ha sido constante: unir de manera armoniosa el código y el diseño. Si este sitio ha captado tu interés, no dudes en ponerte en contacto conmigo. Estoy aquí para colaborar en tu próximo proyecto.
        </p>
        <Link href='mailto:danielhh.dev@gmail.com' type={LinkTypes.BUTTON}>
          <Button label='Contact me!' />
        </Link>
      </div>
      <div className='whoami__moving-border' data-animate={animationEntry?.isIntersecting}>
        <div className='whoami__concept whoami__concept--design'>Design</div>
        <div className='whoami__concept whoami__concept--coding'>Coding</div>
      </div>
    </div>
  );
};

export default WhoAmI;
