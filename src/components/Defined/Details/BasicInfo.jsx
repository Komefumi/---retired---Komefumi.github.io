import React from 'react';
import DetailWriter from './DetailWriter';

function BasicInfo() {
  return (
    <DetailWriter title="Basic Information">
      <p>My name is Arjun Raju Pillai</p>
      <p>My date of birth is the 4th of March, 1997</p>
      <p>I'm a self taught developer, working mainly with the web and primarily using JavaScript as my language of choice.</p>
      <p>There's a lot more to say... the details regarding me are split into relevant sections</p>
      <p>I thank you for visting my page. It's a pleasure to have someone take a look and see</p>
    </DetailWriter>
  );
}

export default BasicInfo;
