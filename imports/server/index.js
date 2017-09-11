import { Meteor } from 'meteor/meteor';
import { onPageLoad } from 'meteor/server-render'
import { Route, StaticRouter, Switch } from 'react-router'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { generateRoutes } from 'react-code-split-ssr'
import Layout from '/imports/both/modules/layout'
import generateRoutesProps from '/imports/both/routes'

Meteor.startup(() => {
  onPageLoad(async (sink) => {
    const Routes = await generateRoutes({
      ...generateRoutesProps,
      pathname: sink.request.url.pathname
    })

    const ServerRoutes = ({url, context = {}}) => {
      return (
        <StaticRouter
          location={url.pathname}
          context={context}
        >
          <Layout>
            <Routes />
          </Layout>
        </StaticRouter>
      )
    }
    const bodyReactHtml = renderToString(<ServerRoutes url={sink.request.url} />)
    sink.renderIntoElementById('app', bodyReactHtml)
  })
});
