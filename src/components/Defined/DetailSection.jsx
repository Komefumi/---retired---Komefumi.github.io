import React from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';

import BasicInfo from './Details/BasicInfo';
import MyPresentSkillset from './Details/MyPresentSkillset';
import WorkingTowards from './Details/WorkingTowards';
import EducationalQualifications from './Details/EducationalQualifications';
import ContactInformation from './Details/ContactInformation';

const listReset = `
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const SeperationUl = styled.ul`
  display: flex;
  ${listReset}
  flex: 0 1 auto;
  height: 0.2em;
  background-color: #bd83d9;
  justify-content: center;

  & > li {
    content: "";
    border-right: 0.5px solid #ba23ed;
    max-width: 100%;
    min-width: 50px;
  }

  & > li:last-child {
    border-right none;
  }
`;

function SeperationRule() {
  return (
    <SeperationUl>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </SeperationUl>
  );
}

const DetailNav = styled.nav`
  // min-width: 25%;
  min-width: 112px;
`;
const DetailNavUl = styled.ul`
  ${listReset}
  font-weight: bold;
  font-size: 0.75em;
  max-width: 20vw;
  line-height: 1.5;
`;
const DetailNavLi = styled.li`
  // padding: 0.5em;
  // width: 100%;
  display: flex;
  justify-content: center;
  border: 1px solid #6e4ca5;
`;

const DetailPanelWrapper = styled.section`
  margin: 1em 1em;
  max-width: 1000px;
  background-color: #5824aa;
  color: #efefef;
  border: 5px solid #d8cde5;
  border-radius: 0.5em;
  display: flex;
  // padding: 0.5em;
  width: 80vw;
  // flex: 1 1 auto;
`;

const Link = styled(NavLink)`
  color: white;
  text-decoration: none;
  height: 100%;
  width: 100%;
  padding: 1em;
  display: flex;

  & > * {
    margin-left: 1em;
  }
`;



function SectionPortal() {
  return (
    <Switch>
      <Route path='/' exact>
        <BasicInfo />
      </Route>
      <Route path='/present-skillset' exact>
        <MyPresentSkillset />
      </Route>
      <Route path='/what-im-working-towards' exact>
        <WorkingTowards />
      </Route>
      <Route path='/educational-qualifications' exact>
        <EducationalQualifications />
      </Route>
      <Route path='/contact-information' exact>
        <ContactInformation />
      </Route>
    </Switch>
  );
}

function DetailPanel() {
  return (
    <Router>
      <DetailPanelWrapper>
        <DetailNav>
          <DetailNavUl>
            <DetailNavLi>
              <Link to='/'><span>Basic Info about me</span></Link>
            </DetailNavLi>
            <DetailNavLi>
              <Link to='/present-skillset'><span>My present skill set</span></Link>
            </DetailNavLi>
            <DetailNavLi>
              <Link to='/what-im-working-towards'>
                <span>What I'm working towards</span>
              </Link>
            </DetailNavLi>
            <DetailNavLi>
              <Link to='/educational-qualifications'>
                <span>What I'm working towards</span>
              </Link>
            </DetailNavLi>
            <DetailNavLi>
              <Link to='/contact-information'><span>Contact Information</span></Link>
            </DetailNavLi>
          </DetailNavUl>
        </DetailNav>
        <SectionPortal />
      </DetailPanelWrapper>
    </Router>
  );
}

const DetailSectionHolder = styled.main`
  display: flex;
  justify-content: center;
  // justify-items: center;
`;

function DetailSection() {
  return (
    <DetailSectionHolder>
      {/* <SeperationRule /> */}
      <DetailPanel />
    </DetailSectionHolder>
  );
}

export default DetailSection;
