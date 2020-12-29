import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const Item = ({ title, image, copy }) => (
  <figure>
    <Img
      fluid={image ? image.childImageSharp.fluid : {}}
      alt={title}
      title={copy}
    />
  </figure>
)

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}

export default Item
