import { useUrlQueryRouter } from "hooks/UrlQueryRouter";
import { DotnetStackPage } from "pages/DotnetStack";
import { GolangStackPage } from "pages/GolangStack";
import { HomePage } from "pages/Home";
import { IoTPage } from "pages/IoT";
import { WorksPage } from "pages/Works";

const WORK_PAGE = "works";
const IOT_PAGE = "dive-into-iot";
const DOTNET_STACK_PAGE = "dotnet-stack";
const GOLANG_STACK_PAGE = "golang-stack";

function App() {
  const router = useUrlQueryRouter();

  switch (router.currentPage.toLowerCase()) {
    case WORK_PAGE:
      return <WorksPage />;
    case IOT_PAGE:
      return <IoTPage />;
    case DOTNET_STACK_PAGE:
      return <DotnetStackPage />;
    case GOLANG_STACK_PAGE:
      return <GolangStackPage />;
    default:
      return <HomePage />;
  }
}

export default App;
