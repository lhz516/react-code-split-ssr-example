import { Bundle } from 'react-code-split-ssr'
import React from 'react'

const Home = () => <Bundle mod={import('./modules/home')} />
const Posts = () => <Bundle mod={import('./modules/posts')} />
const NotFound = () => <Bundle mod={import('./modules/404')} />

const routes = [
  { exact: true, path: '/', component: Home },
  { exact: true, path: '/posts', component: Posts },
]

const redirects = [
  { from: '/test', to: '/posts' }
]

const notFoundComp = NotFound

export { routes, redirects, notFoundComp }
