import React from "react";
import styled from "styled-components";
import FadeIn from "react-fade-in";

const WriterPad = styled.section`
  line-height: 1.5;
  padding: 1em;
  font-size: 1em;
  overflow-y: auto;
  max-height: 400px;
  position: relative;
  color: #efefef;
  flex: 1 1 100%;

  scrollbar-width: auto;
  scrollbar-color: #1c0c37 #3e1e70;

  & > p {
    margin-bottom: 2em;
  }

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

interface DetailWriterProps {
  title: string;
  children: React.ReactNode;
}

function DetailWriter({ title, children }: DetailWriterProps) {
  return (
    <FadeIn>
      <WriterPad>
        <TitleElem>{title}</TitleElem>
        {children}
      </WriterPad>
    </FadeIn>
  );
}

export default DetailWriter;
