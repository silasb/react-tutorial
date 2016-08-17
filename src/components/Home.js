import React from 'react';
import Routes from '../routes'
import { Link } from 'react-router'

const Home = () => (
  <div>
    <div>Silas's presentation tool</div>

    <ul>
      {Routes.childRoutes.map((m, i) => (
        <li key={i}>
          <Link to={m.path}>{m.component.title}</Link>
        </li>
      ))}
    </ul>
  </div>
)

Home.title = "Home"

export default Home
