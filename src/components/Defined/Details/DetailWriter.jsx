import React from 'react';
import styled from 'styled-components';

const WriterPad = styled.section`
  line-height: 1;
  padding: 1em;
  font-size: 1em;
  // max-width: 50%;
  // overflow-x: hidden;
  overflow-y: auto;
  // max-height: 20px;
  position: relative;
  // padding-right: 3.1em;
  // display: flex;
  flex: 1 1 100%;

  scrollbar-width: auto;
  scrollbar-color: #1c0c37 #3e1e70;

  &::-webkit-scrollbar {
    width: 12px; /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: #3e1e70;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #1c0c37;
    border-radius: 20px;
    border: 3px solid #412869;
  }
`;

const TitleElem = styled.h4`
  font-size: 1.25em;
  margin: 0em 0 0.25em;
`;

function DetailWriter({ title, children }) {
  return (
    <WriterPad>
      <TitleElem>{title}</TitleElem>
      {children}
    </WriterPad>
  );
}

export default DetailWriter;
