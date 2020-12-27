import React from 'react'
import Head from 'components/head'

import Title from 'components/title'

import PageLayout from 'components/pageLayout'

import { cloudImg } from 'constants/cloudRes'
import IoAboutRaster from 'components/io/ioContainers/about/raster'
import IoAboutTextContainer from 'components/io/ioContainers/about/text'
import { Raster, Divider } from 'constants/elements'
import Marquee from 'components/marqueeText'

const About = () => (
  <PageLayout prev="home" next="work" bodyClass="about">
    <Head pageTitle="About" />

    <IoAboutRaster>
      <div className="raster-text">
        <Title as="h1" size="super" className="textCenter">
          Hey! I&apos;m Olli Paust!
          <br />
          I&apos;m a Coder &amp; Designer
          <br />
          from Berlin ❤️
        </Title>
      </div>
      <div className="portrait-container">
        <img
          src={cloudImg.portrait}
          className="portrait"
          title="That's me"
          alt="Portrait"
        />
      </div>

      <Raster />
    </IoAboutRaster>

    <IoAboutTextContainer className="about-text">
      <Title as="h6" size="large" className="textCenter title">
        Creating websites is my passion - a steady source of motivation that
        drives me to excel.
      </Title>

      <div className="flexbox">
        <Title as="p" size="medium">
          I really love web design &amp; coding ever since I got my first PC as
          a little kid. In the beginning it was just a hobby, a way of passing
          the time when I wasn&apos;t outside doing things kids usually do. But
          nowadays it&apos;s the most enjoyable way to express my ideas and
          visions. It&apos;s super rewarding when I solve a coding problem and
          when the final product works and looks as beautiful as I imagined.
        </Title>
        <Title as="p" size="medium">
          As for my career I&apos;ve been working at several companies ranging
          from real estate, media agency, coworking and hospitality. Casually
          I&apos;m also freelancing for smaller businesses when friends
          recommend me to their acquaintances.
        </Title>
      </div>
    </IoAboutTextContainer>

    <IoAboutTextContainer className="marquee-text flexbox">
      <Title as="h2" size="larger" className="textCenter title">
        Things that I work with
      </Title>
      <Divider />
      <Marquee />
    </IoAboutTextContainer>

    <IoAboutTextContainer className="statement">
      <Title as="h2" size="larger" className="title">
        Brilliant frontends can be achieved for all requirements. It is
        important to start off simplistic, understand the emphasis, adjust
        alignments, balance designs and then scale.
      </Title>
    </IoAboutTextContainer>

    <IoAboutTextContainer className="reasons flexbox">
      <div>
        <Title as="h3" size="large" className="title">
          Why do I believe <u>modern</u> webdesign is so important?
        </Title>
        <p>
          As a web specialist and enthusiast I have the tools and expertise to
          achieve great experiences and results through my excellent sense for
          creativity, technology and marketing. I&apos;m always trying to
          improve myself and keep up-to-date with latest trends and I want to
          make sure that what I create is always of high quality.
          <br />
          <br />
          Almost 60% of the world&apos;s population has access to the world wide
          web and it&apos;s exponentially increasing year by year. People are
          naturally drawn to good design. When it comes to your website design,
          studies have shown again and again that users quickly judge your
          business based on visuals alone, and will often stop interacting with
          your website if it&apos;s poorly designed.
          <br />
          <br />
          That&apos;s why I think that a company&apos;s online presence should
          be treated as a very important business asset, as it has the potential
          to tenfold or even hundredfold the returns of your initial investment,
          which can be substantial at the beginning.
          <br />
          <br />
          <Title as="h3" size="large" className="rarr">
            &rarr;
          </Title>
        </p>
      </div>
      <div>
        <ul>
          <li>
            <Title as="h5" size="medium" className="number">
              01
            </Title>
            <Title as="h3" size="large" className="title">
              It sets the
              <br />
              first impression
            </Title>
            <p className="text">
              When people visit your website, it gives them the first impression
              of your business. They will judge your business within seconds. In
              these first few seconds, you want to make a positive impact on
              your audience, because humans care about design, whether
              consciously or not - we all react to visual stimulation.
              <br />
              <br />
              If your website looks unappealing or outdated, your audience will
              immediately have a negative impression of your business. They
              won&apos;t find your website appealing, which deters them from
              your page. You&apos;ll miss out on leads because they&apos;ll
              leave your page for a competitor&apos;s page.
            </p>
          </li>
          <li>
            <Title as="h5" size="medium" className="number">
              02
            </Title>
            <Title as="h3" size="large" className="title">
              Your competitors
              <br />
              are doing it
            </Title>
            <p className="text">
              When users come across an outdated-looking website design, they
              may doubt your businesses legitimacy, question your products or
              services and ultimately look at a competitor&apos;s website for a
              better answer.
              <br />
              <br />
              A website should always stand out from the competition. If you
              have an old, outdated, and low-quality website, your
              competitor&apos;s will outrank you. Their well-designed website
              will perform better than your website.
              <br />
              <br />
              This means you&apos;ll lose leads to your competitors.
              They&apos;ll attract more leads to their page because their page
              is more appealing and trustworthy.
            </p>
          </li>
          <li>
            <Title as="h5" size="medium" className="number">
              03
            </Title>
            <Title as="h3" size="large" className="title">
              It builds trust
              <br />
              with your audience
            </Title>
            <p className="text">
              Designs that look modern and professional tend to encourage trust.
              Meanwhile, a poorly designed website has usually the opposite
              effect.
              <br />
              <br />
              They may view your site as shady or even fraudulent, because bad
              websites imply a lack of professionalism or customer-care.
              <br />
              <br />
              It&apos;s super important to build trust with your users so they
              remain on your site and keep coming for more. And the more a
              website is visited, the better will be your placements in search
              engines like Google.
            </p>
          </li>
          <li>
            <Title as="h5" size="medium" className="number">
              04
            </Title>
            <Title as="h3" size="large" className="title">
              It helps with
              <br />
              your SEO-Strategy
            </Title>
            <p className="text">
              Many web design elements and practices of how you publish content
              on your website influences and affects how crawlers index your
              website on search engines like Google, Yahoo, Bing etc...
              <br />
              <br />
              This is one thing you cannot afford to mess up, as it will
              directly impact your visibility and therefore your sales. If your
              on-page SEO fundamentals are not optimized, you&apos;ll be
              fighting an uphill battle for visibility from the start.
              <br />
              <br />
              Many people think that in order to get onto the first page of
              search engines, you have to pay a lot of money. But that&apos;s a
              big misconception, because a good web designer/developer knows how
              to achieve this with clean code and well-delivered content.
            </p>
          </li>
        </ul>
      </div>
    </IoAboutTextContainer>
  </PageLayout>
)

export default About
