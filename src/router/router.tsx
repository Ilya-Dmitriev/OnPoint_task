import { To } from 'react-router-dom';

interface PageRoute {
  element: React.ReactElement,
  path: To,
  key: React.Key,
  index?: boolean,
}

interface LayOutRoute {
  key: React.Key,
  layoutElement: React.ReactElement,
  routes: PageRoute[]
}

export const routesInLayOuts: LayOutRoute[] = [

];
