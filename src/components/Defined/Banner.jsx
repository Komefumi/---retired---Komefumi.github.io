import React from 'react';
import styled from 'styled-components';
import BannerRectangle from '../../resources/muchlarger.png';

import Wrapper from '../Wrapper';

const LocalWrapper = styled(Wrapper)`
  padding: 1em 2em;
  position: relative;
  z-index: 1;
  display: grid;
  justify-content: center;
  align-content: center;
  min-height: 60vh;
`;

const Overlay = styled.div`
  background-image: url(${BannerRectangle});
  background-size: 400px 400px;
  background-size: 100% 100%;
  overflow: show;
  opacity: 1;
  position: relative;
  z-index: 2;
  padding: 2em;
  color: #efefef;
  max-width: 800px;
  display: flex;
  line-height: 1.5;
  font-size: 1em;
  min-height: 40vh;
`;

const cat = `&:after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: calc(100% - 4px);
  height: 50%;
  background: linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.2))
}`

const ProfilePicture = styled.img`
  max-width: 100px;
  margin-top: 2em;
  border: 5px solid #d8cde5;
  border-radius: 0.5em;
  align-self: flex-start;
`;

const Content = styled.div`
  margin-right: 1em;
  padding: 1em 2em;
`;

function Banner() {
  const justMy = "Just my profile picture on Github";
  const linkToJustMy = "https://avatars.githubusercontent.com/u/76627194?s=460&v=4";
  return (
    <LocalWrapper>
      <Overlay>
        <Content>
          <p>Hi, my name is Arjun Raju Pillai and I'm a self taught developer from India.</p>

          <p>This is my present homepage, as of Saturday, 20 February, 2021</p>

          <p>Below I have my information better organized</p>
          {/* I work primarily with JavaScript but I try to expand my area of comfort and could work with other language-ecosystems.
          Clojure, Groovy, Python, Java, I wouldn't worry too much about the language and systems in place if I were to suddenly pick up a project using these technologies.
          Besides this I try to study and learn science and mathematics.
          Along with design and vector graphics, primarily with Inkscape.

          As you can see from the website my main front-end tool is React.js.

          You can read more about me below. */}
        </Content>
        <ProfilePicture alt={justMy} title={justMy} src={linkToJustMy} />
      </Overlay>
    </LocalWrapper>
  );
}

export default Banner;
