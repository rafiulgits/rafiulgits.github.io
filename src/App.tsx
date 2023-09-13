import { useUrlQueryRouter } from "hooks/UrlQueryRouter";
import { HomePage } from "pages/Home";
import { TimelinePage } from "pages/Timeline";
import { WorksPage } from "pages/Works";
import { useEffect } from "react";

const WORK_PAGE = "works";
const TIMELINE_PAGE = "timeline";

function App() {
  useEffect(() => {
    window.location.replace("http://rafiul.xyz");
  }, []);

  return <></>;
}

export default App;
