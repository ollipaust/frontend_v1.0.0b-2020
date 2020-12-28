import React from 'react'
import PropTypes from 'prop-types'

import PageContent from './content'
import Footer from './footer'
import Pagination from './pagination'

import BodyClassName from 'react-body-classname'

const PageLayout = ({ children, prev, next, bodyClass }) => {
  return (
    <React.Fragment>
      <BodyClassName className={bodyClass} />

      <PageContent>{children}</PageContent>

      <Pagination prev={prev} next={next} />

      <Footer />
    </React.Fragment>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageLayout
