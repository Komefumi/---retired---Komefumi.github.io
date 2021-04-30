import FadeIn from "react-fade-in";

import Page from "./components/Defined/Page";
import Banner from "./components/Defined/Banner";
import DetailSection from "./components/Defined/DetailSection";

function App() {
  return (
    <Page>
      <FadeIn>
        <Banner />
        <DetailSection />
      </FadeIn>
    </Page>
  );
}

export default App;
