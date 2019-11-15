import React, { Component } from 'react'
import Head from 'next/head'

class Layout extends Component {

  render () {
    return (
      <div>
        <Head>
          <title>Miraway MasaNano</title>
          <meta charSet='utf-8' />
          <meta
            name='viewport'
            content='width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1,user-scalable=0,initial-scale=1'
          />
          <script type="text/javascript" src="/static/js/fabric.min.js" />
          <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon"/>
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon"/>
        </Head>
        {this.props.children}
      </div>
    )
  }
}

export default Layout
