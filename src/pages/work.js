import React from 'react'
import Head from 'components/head'

import PageLayout from 'components/pageLayout'

import Gallery from 'components/gallery'

const Work = () => (
  <PageLayout prev="about" next="stack" bodyClass="work">
    <Head pageTitle="Work" />

    <Gallery />
    <div style={{ height: '50vh', width: '100%' }} />
  </PageLayout>
)

export default Work
