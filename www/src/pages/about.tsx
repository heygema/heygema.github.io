import React from 'react';
import Ketikin from 'ketikin';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

import Section from '@narative/gatsby-theme-novela/src/components/Section';
import Headings from '@narative/gatsby-theme-novela/src/components/Headings';
import Paragraph from '@narative/gatsby-theme-novela/src/components/Paragraph';
import SEO from '@narative/gatsby-theme-novela/src/components/SEO';
import Layout from '@narative/gatsby-theme-novela/src/components/Layout';
import Subscription from '@narative/gatsby-theme-novela/src/components/Subscription';
import Gooey from '@narative/gatsby-theme-novela/src/components/Gooey';
import mediaqueries from '@narative/gatsby-theme-novela/src/styles/media';

import { Template } from '@narative/gatsby-theme-novela/src/types';

const greetings = [
  'Hello',
  'こんにちは',
  'Halo',
  'Приве́т',
  'Bonjour',
  '你好',
  'Xin Chào',
].map((text) => text + '!');

const siteQuery = graphql`
  {
    allSite {
      edges {
        node {
          siteMetadata {
            title
            description
          }
        }
      }
    }
  }
`;

const AboutPage: Template = ({ location }) => {
  const results = useStaticQuery(siteQuery);
  let {
    allSite: {
      edges: [
        {
          node: {
            siteMetadata: { title, description },
          },
        },
      ],
    },
  } = results;

  const makeLink = (href, text) => (
    <BoldLink href={href} target="_blank">
      {text}
    </BoldLink>
  );

  return (
    <Layout>
      <SEO
        pathname={location.pathname}
        title={title}
        description={description}
      />
      <Section>
        <Row>
          <BioContainer>
            <HelloDiv>
              <Ketikin texts={greetings} interval={180}>
                {(value) => <Title>{value || '_'}</Title>}
              </Ketikin>
            </HelloDiv>
            <P>
              👋 My name is {title}! I am a Software Engineer (He/Him) who grew
              up in Jakarta, Indonesia. I've work with
              {makeLink('https://www.typescriptlang.org/', ' TypeScript')},{' '}
              {makeLink('https://reactjs.org/', 'React')} &{' '}
              {makeLink('https://reactnative.dev', 'React Native')} to create
              websites and mobile apps, while also try to hone my skills in{' '}
              {makeLink('https://reasonml.github.io', 'ReasonML')}, or{' '}
              {makeLink('https://python.org', 'Python')}. Generally, I also love
              things about{' '}
              {makeLink('https://en.wikipedia.org/wiki/Piano', 'Piano')} and{' '}
              {makeLink('https://en.wikipedia.org/wiki/Travel', 'Traveling')}.
              This is a place to pour my thoughts about variety of topics,
              including but not limited to programming.
            </P>
          </BioContainer>
          <ProfilePictureDiv>
            <Gooey />
          </ProfilePictureDiv>
        </Row>
        <Row>
          <div
            style={{
              flex: 1,
              flexDirection: 'column',
              display: 'flex',
              width: '100%',
              paddingTop: 60,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Title> Featured Works </Title>
            </div>
            <div
              style={{
                flex: 1,
                minHeight: 400,
                zIndex: 100,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <NothingYetContainer>Nothing yet.</NothingYetContainer>
            </div>
          </div>
        </Row>
        <Subscription />
      </Section>
    </Layout>
  );
};

export default AboutPage;

const BioContainer = styled.div`
  flex: 1;
  padding-top: 60px;
`;

const HelloDiv = styled.div`
  margin-bottom: 50px;
`;

const ProfilePictureDiv = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  flex: 1;
  min-height: 45vh;
  flex-direction: row;

  transition: opacity 0.3s;
  -webkit-transition: opacity 0.3s;

  opacity: 1;

  ${mediaqueries.tablet`
    flex-direction: column-reverse;
    
    &:not(:last-child) {
      margin-bottom: 0;
    }
  `}

  ${mediaqueries.phablet`
    flex-direction: column-reverse;
    
    &:not(:last-child) {
      margin-bottom: 0;
    }
  `}
`;

const Title = styled(Headings.h1)`
  font-family: ${(p) => p.theme.fonts.serif};

  ${mediaqueries.desktop`
    margin-bottom: 15px;
  `}

  ${mediaqueries.tablet`
    font-size: 3rem;
  `}

  ${mediaqueries.phablet`
    font-size: 2.8rem;
    padding: 30px 20px 0;
    margin-bottom: 10px;
  `}
`;

const NothingYetContainer = styled(Paragraph)`
  text-align: center;
  font-size: 2.3rem;
  ${mediaqueries.phablet`
    font-size: 1.8rem;
    margin-bottom; 15px;
  `}
  ${mediaqueries.phablet`
    margin-bottom: 20px;
  `}
`;

const BoldLink = styled.a`
  color: ${(p) => p.theme.colors.articleText};
  font-weight: 700;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${(p) => p.theme.colors.accent};
  }
`;

BoldLink.defaultProps = { target: '_blank' };

const P = styled(Paragraph)`
  font-size: 2.3rem;
  margin-bottom: 10px;
  max-width: ${(p) => (p.narrow ? '415px' : '515px')};
  margin-left: 0px;

  ${mediaqueries.desktop`
    display: -webkit-box;
  `}

  ${mediaqueries.phablet`
    font-size: 1.8rem;
    margin-bottom; 15px;
  `}

  ${mediaqueries.phablet`
    max-width: 100%;
    padding:  0 20px;
    margin-bottom: 20px;
    -webkit-line-clamp: 3;
  `}
`;