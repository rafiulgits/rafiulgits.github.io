import { useUrlQueryRouter } from "hooks/UrlQueryRouter";
import { HomePage } from "pages/Home";
import { TimelinePage } from "pages/Timeline";
import { WorksPage } from "pages/Works";

const WORK_PAGE = "works";
const TIMELINE_PAGE = "timeline";

function App() {
  const router = useUrlQueryRouter();

  switch (router.currentPage.toLowerCase()) {
    case WORK_PAGE:
      return <WorksPage />;
    case TIMELINE_PAGE:
      return <TimelinePage />;
    default:
      return <HomePage />;
  }
}

export default App;
