import App from './App';
import Home from './components/Home'

import Example1 from './examples/Example1';
import Classes1 from './examples/Classes1';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'classes1', component: Classes1 },
    { path: 'example1', component: Example1 },
  ]
}

const getRoute = (direction) => {
  const {pathname} = window.location

  const pathWithoutRootSlash = pathname.substring(1, pathname.length)
  const curRouteIdx = routes.childRoutes.findIndex(route =>
    route.path === pathWithoutRootSlash
  )

  const nextRoute = routes.childRoutes[curRouteIdx + direction]

  return nextRoute
}

export const nextRoute = () => getRoute(1)
export const previousRoute = () => getRoute(-1)

export default routes
