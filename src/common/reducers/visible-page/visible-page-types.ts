export enum Page {
  HOME = 'BIENVENIDO',
  EXPERIENCE = 'EXPERIENCIA',
  WHOAMI = 'SOBRE MÍ',
  PROJECTS = 'PROYECTOS',
}

export type PageVisibility = {
  page: Page;
  intersectionRatio: number;
}

export type VisiblePageState = {
  HOME: number;
  EXPERIENCE: number;
  WHOAMI: number;
  PROJECTS: number;
};
