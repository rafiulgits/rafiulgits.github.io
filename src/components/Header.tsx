import { BsCircleFill } from "react-icons/bs";
import { useUrlQueryRouter } from "hooks/UrlQueryRouter";

export const Header = () => {
  const router = useUrlQueryRouter();

  const getNavItemClassName = (name: string): string => {
    switch (router.currentPage.toLowerCase()) {
      case name:
        return "nav-link active border border-danger bg-light text-danger";
      default:
        return "nav-link active border border-light bg-light";
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav nav-pills">
            <li className="nav-item">
              <a className={getNavItemClassName("works")} href="?page=works">
                Works
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
