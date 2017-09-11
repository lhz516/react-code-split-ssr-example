import { Meteor } from 'meteor/meteor'
import  React from 'react'
import { render } from 'react-dom'
import { matchPath } from 'react-router'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { generateRoutes } from 'react-code-split-ssr'
import Layout from '/imports/both/modules/layout'
import generateRoutesProps from '/imports/both/routes'

Meteor.startup(async () => {
  const Routes = await generateRoutes({
    ...generateRoutesProps,
    pathname: window.location.pathname,
  })
  render(
    <BrowserRouter>
      <Layout>
        <Routes />
      </Layout>
    </BrowserRouter>,
    document.getElementById('app'),
  )
})
