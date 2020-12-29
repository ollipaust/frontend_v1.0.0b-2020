import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Head from 'components/head'

import PageLayout from 'components/interface/pageLayout'
import IoWorkContainer from 'components/io/ioContainers/work/ioContainer'
import Title from 'components/title'
import Slider from 'components/slider'

const Work = ({ data }) => (
  <PageLayout prev="about" next="stack" bodyClass="work">
    <Head pageTitle={data.workJson.pagetitle} />

    <IoWorkContainer className="head-text flexbox">
      <Title as="h1" size="super" className="title">
        {data.workJson.headtitle}
      </Title>

      <Slider slides={data.workJson.slidedata} />
    </IoWorkContainer>

    <IoWorkContainer className="github-text flexbox">
      <div className="left">
        <Title as="h3" size="large" className="textStroke sub-title">
          React GitHub Repository
        </Title>
        <p className="text">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="right">
        <ul>
          <li>
            <Title as="h5" size="medium" className="number">
              01
            </Title>
            <Title as="h3" size="large" className="list-title">
              React Repo #1
            </Title>
            <p className="text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </li>
          <li>
            <Title as="h5" size="medium" className="number">
              02
            </Title>
            <Title as="h3" size="large" className="list-title">
              React Repo #2
            </Title>
            <p className="text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </li>
          <li>
            <Title as="h5" size="medium" className="number">
              03
            </Title>
            <Title as="h3" size="large" className="list-title">
              React Repo #3
            </Title>
            <p className="text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </li>
          <li>
            <Title as="h5" size="medium" className="number">
              03
            </Title>
            <Title as="h3" size="large" className="list-title">
              React Repo #4
            </Title>
            <p className="text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </li>
        </ul>
      </div>
    </IoWorkContainer>
  </PageLayout>
)

Work.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Work

export const query = graphql`
  query WorkQuery {
    workJson {
      pagetitle
      headtitle
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      slidedata {
        index
        headline
        button
        buttonlink
        image
      }
    }
  }
`
