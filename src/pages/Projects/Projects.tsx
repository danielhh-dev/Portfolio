import React, { useRef } from 'react';
import { LogoSize } from '../../common/components/Logos/logos-types';
import GitHubLogo from '../../common/components/Logos/social/GitHubLogo';
import VimeoLogo from '../../common/components/Logos/social/VimeoLogo';
import useVisiblePage from '../../common/hooks/useVisiblePage';
import { Page } from '../../common/reducers/visible-page/visible-page-types';
import URL from '../../common/types/url-types';
import Box from '../../components/Box/Box';
import Title from '../../components/Title/Title';

const Projects = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  useVisiblePage(ref, Page.PROJECTS);

  return (
    <div ref={ref} className='projects'>
      <Title title='ALGUNOS PROYEctos' subtitle='en los que he estado trabajando' />
      <div className='projects__box-container'>
        <Box
          title='Conversor de criptomonedas'
          description='Facilita la conversión rápida entre diferentes monedas digitales con una interfaz intuitiva y actualizada.'
          tags={['React', 'Emotion', 'Firebase']}
          image={GitHubLogo}
          imageSize={LogoSize.XSMALL}
          url={URL.CRYPTO}
        />
        <Box
          title='Registro de pacientes'
          description='Una aplicación diseñada para simplificar la gestión de información de pacientes, brindando una experiencia eficiente para los profesionales de la salud y el cuidado de pacientes.'
          tags={['React', 'Tailwind']}
          image={VimeoLogo}
          imageSize={LogoSize.SMALL}
          url={URL.PATIENT}
        />
        <Box
          title='BOOKLY'
          description='Una plataforma de venta de libros en línea que ofrece una amplia selección de títulos y una experiencia de compra conveniente para los amantes de la lectura.'
          tags={['HTML', 'CSS']}
          image={GitHubLogo}
          imageSize={LogoSize.XSMALL}
          url={URL.BOOKLY}
        />
        <Box
          title='My website'
          description='Este mismo sitio web, echa un vistazo bajo el capó.'
          tags={['Typescript', 'React', 'Sass']}
          image={GitHubLogo}
          imageSize={LogoSize.XSMALL}
          url={URL.PORTFOLIO}
        />
      </div>
    </div>
  );
};

export default Projects;
