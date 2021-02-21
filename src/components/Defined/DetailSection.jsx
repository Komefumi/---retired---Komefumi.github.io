import React from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
} from 'react-router-dom';
import FadeIn from 'react-fade-in';
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

const DetailNav = styled.nav`
  min-width: 112px;
`;
const DetailNavUl = styled.ul`
  ${listReset}
  font-size: 0.9em;
  max-width: 20vw;
  line-height: 1.5;
`;
const DetailNavLi = styled.li`
  display: flex;
  justify-content: center;
  border: 1px solid #6e4ca5;
  width: 100px;
`;

const DetailPanelWrapper = styled.section`
  margin: 1em 1em;
  max-width: 1000px;
  background-color: #5824aa;
  color: #efefef;
  border: 5px solid #d8cde5;
  border-radius: 0.5em;
  display: flex;
  width: 80vw;
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
    <Router basename={process.env.PUBLIC_URL}>
      <DetailPanelWrapper>
        <DetailNav>
          <DetailNavUl>
            <DetailNavLi>
              <Link to='/'>
                <span>Basic Info about me</span>
              </Link>
            </DetailNavLi>
            <DetailNavLi>
              <Link to='/present-skillset'>
                <span>My present skill set</span>
              </Link>
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
              <Link to='/contact-information'>
                <span>Contact Information</span>
              </Link>
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
`;

function DetailSection() {
  return (
    <DetailSectionHolder>
      <DetailPanel />
    </DetailSectionHolder>
  );
}

export default DetailSection;
