import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Head from 'components/head'

import PageLayout from 'components/interface/pageLayout'
import Title from 'components/title'
import IoAboutContainer from 'components/io/ioContainers/about/ioContainer'
import { Divider } from 'constants/elements'
import Raster from 'components/raster'
import Marquee from 'components/marqueeText'
import Image from 'components/image'

const About = ({ data }) => (
  <PageLayout prev="home" next="work" bodyClass="about">
    <Head pageTitle={data.aboutJson.pagetitle} />

    <IoAboutContainer className="head-text">
      <div className="head-text-container">
        <Image items={data.aboutJson.portrait} className="portrait-container" />
      </div>
      <Raster />
    </IoAboutContainer>

    <IoAboutContainer className="intro-text">
      <div className="intro-text-container">
        <Title as="h1" size="super" className="title">
          {data.aboutJson.headtitle}
        </Title>
        <div
          dangerouslySetInnerHTML={{
            __html: data.aboutJson.introtext.childMarkdownRemark.html,
          }}
        />
      </div>

      <Raster />
    </IoAboutContainer>

    <IoAboutContainer className="love-text flexbox">
      <Title as="h3" size="larger" className="textCenter title">
        {data.aboutJson.lovetexttitle}
      </Title>
      <div
        className="love-text-content flexbox"
        dangerouslySetInnerHTML={{
          __html: data.aboutJson.lovetext.childMarkdownRemark.html,
        }}
      />
    </IoAboutContainer>

    <IoAboutContainer className="marquee-text flexbox">
      <Title as="h2" size="larger" className="textCenter title">
        {data.aboutJson.marqueetexttitle}
      </Title>
      <Divider />
      <Marquee />
    </IoAboutContainer>

    <IoAboutContainer className="statement-text">
      <Title as="h2" size="larger">
        {data.aboutJson.statementtext.childMarkdownRemark.rawMarkdownBody}
      </Title>
    </IoAboutContainer>
  </PageLayout>
)

About.propTypes = {
  data: PropTypes.object.isRequired,
}

export default About

export const query = graphql`
  query AboutQuery {
    aboutJson {
      pagetitle
      headtitle
      introtext {
        childMarkdownRemark {
          html
        }
      }
      aquatexttitle
      aquatext {
        childMarkdownRemark {
          html
        }
      }
      lovetexttitle
      lovetext {
        childMarkdownRemark {
          html
        }
      }
      marqueetexttitle
      statementtext {
        childMarkdownRemark {
          rawMarkdownBody
        }
      }
      portrait {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 1200, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
