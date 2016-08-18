import App from './App';
import Home from './components/Home'
import Stop from './components/Stop'

// import Example1 from './examples/Example1';
import Classes1 from './examples/Classes1';
import Anonymous from './examples/Anonymous';
import ES2015ArrayMap from './examples/es2015_array_maps';
import ES2015ArrayFilter from './examples/es2015_array_filter';
import ES2015ArrayFind from './examples/es2015_array_find';
// import LetAndConst from './examples/LetAndConst';
import BindAndThis from './examples/BindAndThis';
import ObjectDestruction from './examples/object_destruction';
import ComponentWithoutJSX from './examples/component_without_jsx';
// import ComponentComposable from './examples/components_composable';
import ComponentComposableJSX from './examples/components_composable_jsx';
import ComponentWithJSX from './examples/component_with_jsx';
import ComponentWithProps from './examples/component_with_props';
import StatefulComponent from './examples/stateful_component';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'classes1', component: Classes1 },
    { path: 'anonymous', component: Anonymous},
    { path: 'array_maps', component: ES2015ArrayMap},
    { path: 'array_filters', component: ES2015ArrayFilter},
    { path: 'array_find', component: ES2015ArrayFind},
    { path: 'object_destruction', component: ObjectDestruction},
    // { path: 'let_and_const', component: LetAndConst},
    { path: 'bind_and_this', component: BindAndThis},
    { path: 'stop_1', component: Stop},
    { path: 'component_without_jsx', component: ComponentWithoutJSX},
    { path: 'component_with_jsx', component: ComponentWithJSX},
    { path: 'component_with_with_props', component: ComponentWithProps},
    { path: 'stateful_component', component: StatefulComponent},
    // { path: 'composable_components', component: ComponentComposable},
    { path: 'composable_components_jsx', component: ComponentComposableJSX},
    { path: 'stop_2', component: Stop},
    // { path: 'example1', component: Example1 },
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
