import { Layout } from "components/Layout";

export const WorksPage = () => {
  return (
    <Layout title="Works">
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-5 col-md-8 col-sm-12">
            <div className="card text-white bg-danger mb-3 ">
              <div className="card-body">
                <h1 className="card-title">Dive into Internet of Things</h1>
                <a
                  className="border border-light btn btn-danger"
                  href="?page=dive-into-iot"
                >
                  View Work
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="card text-white bg-success mb-3 ">
              <div className="card-body">
                <h1 className="card-title">.NET Stack</h1>
                <a
                  className="border border-light btn btn-success"
                  href="?page=dotnet-stack"
                >
                  View Work
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="card text-white bg-info mb-3 ">
              <div className="card-body">
                <h1 className="card-title">GoLang Stack</h1>
                <a
                  className="border border-light btn btn-info  text-white"
                  href="?page=golang-stack"
                >
                  View Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
