import { useUrlQueryRouter } from "hooks/UrlQueryRouter";
import { BsCircleFill } from "react-icons/bs";

export const Header = () => {
  const router = useUrlQueryRouter();

  const getPageAnchorClassName = (name: string): string => {
    switch (router.currentPage.toLowerCase()) {
      case name:
        return "nav-link active border border-light bg-light text-primary";
      default:
        return "nav-link active border border-light bg-light";
    }
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <BsCircleFill style={{ color: "red" }} />{" "}
          <strong>Rafiul Islam</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ border: "none" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav nav-pills">
            <li className="nav-item">
              <a className={getPageAnchorClassName("works")} href="?page=works">
                Works
              </a>
            </li>
            <li className="nav-item">
              <a
                className={getPageAnchorClassName("timeline")}
                href="?page=timeline"
              >
                Timeline
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
