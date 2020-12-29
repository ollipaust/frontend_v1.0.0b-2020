import React from 'react'
import PropTypes from 'prop-types'
import Item from './item'
import { Container } from './image.css'

const Image = ({ items, className }) => (
  <Container className={className}>
    {items.map((item, i) => (
      <Item {...item} key={i} />
    ))}
  </Container>
)

Image.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  className: PropTypes.string.isRequired,
}

export default Image
