import { createSlice } from '@reduxjs/toolkit';
import URL from '../../common/types/url-types';
import { TimelineState } from './timelime-types';

const initialState: TimelineState = {
  steps:
  [
    {
      content: [
        'Imparto cursos personalizados para proporcionar a profesionales las últimas herramientas y conocimientos.',
        'Trabajo en estrecha colaboración con organizaciones para diseñar experiencias de aprendizaje específicas.',
        'Mi enfoque en la capacitación impulsa la innovación y la competitividad, contribuyendo al crecimiento y éxito de las empresas.',
      ],
      header: 'Ciudad de México Agosto 2023 - Presente',
      title: {
        position: 'Instructor de desarrollo tecnológico empresarial',
        company: {
          name: 'Cloud Systems & Technology',
          url: URL.CST,
        },
      },
    },
    {
      content: [
        'Ofrecí tutorías sobre el uso de la consola de comandos, Git y Github para mejorar las habilidades de los estudiantes en desarrollo de software.',
        'Ayudé a los estudiantes a comprender y utilizar Git y GitHub para gestionar versiones y colaborar en proyectos.',
        'Contribuí al desarrollo de habilidades esenciales que permitieron a los estudiantes trabajar de manera más efectiva en sus proyectos de desarrollo de software.',
      ],
      header: 'Argentina Enero 2023 - Marzo 2023',
      title: {
        position: 'Mentor de desarrollo web',
        company: {
          name: 'Henry',
          url: URL.HENRY,
        },
      },
    },
    {
      content: [
        'Contribuí al éxito de Chimu en ventas personalizadas en línea.',
        'Desarrollé un frontend de alta calidad con React y Tailwind CSS.',
        'Colaboré con el equipo de UX/UI para mejorar la experiencia del usuario.',
        'Implementé Firebase para gestionar datos eficazmente.',
      ],
      header: 'Argentina Diciembre 2022 - Febrero 2023',
      title: {
        position: 'Frontend Developer Freelance',
        company: {
          name: 'Chimu',
          url: URL.CHIMU,
        },
      },
    },
    {
      content: [
        'Enfocado en superar la dificultad de comunicar la ciencia, me centré en utilizar imágenes y contenido visual.',
        'Creé una variedad de contenido, incluyendo boletines astronómicos, infografías, carteles de eventos y carruseles exclusivos para redes sociales.',
        'Mi objetivo fue hacer que el contenido fuera atractivo y funcional, manteniendo la atención del público en el campo de la astronomía y la ciencia.',
      ],
      header: 'Enero 2021 - Agosto 2021',
      title: {
        position: 'Director de diseño gráfico',
        company: {
          name: 'Nibiru - Sociedad astronómica UNAM',
          url: URL.NIBIRU,
        },
      },
    },
  ],
};

const componentReducer = createSlice({
  name: 'timeline',
  initialState,
  reducers: {},
});

export default componentReducer.reducer;
