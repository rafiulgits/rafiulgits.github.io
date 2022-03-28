import { Layout } from "components/Layout";

export const WorksPage = () => {
  return (
    <Layout title="Works">
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 col-md-10 col-sm-12 ">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <h5>IotHub</h5>
                <p>
                  Cloud based IoT system solution. IotHub provides an abstract
                  solution of any IoT infrastructure including Broker system,
                  API management, Authentication, Agent management system, so
                  that it can be extended to any preferable IoT solution like
                  home automation system, supply chain management.
                </p>
                <figure className="text-end">
                  <a
                    className="a-none"
                    href="https://rafiulgits.github.io/IotHub/"
                  >
                    - Read Documentation
                  </a>
                </figure>

                <div>
                  <span className="badge bg-success m-1">.NET Core</span>
                  <span className="badge bg-warning m-1 text-dark">MQTT</span>
                  <span className="badge bg-success m-1">MongoDB</span>
                  <span className="badge bg-info m-1">SignalR</span>
                  <span className="badge bg-info m-1">React Dashboard</span>
                </div>
              </li>

              <li className="list-group-item mt-3">
                <h5>SenseHome</h5>
                <p>
                  An IoT based Home Automation System. Backed powered by IotHub.
                  SenseHome is my final year project (450 project). I had
                  described our plans and goals in our project proposal.
                  <div className="mt-3">
                    <p>
                      <strong>Reference links</strong>
                    </p>
                    <p>
                      <a
                        className="a-none"
                        href="https://drive.google.com/file/d/1q-Yyigf9ILVsR12tHIJci9bRtRm-f_V7/view?usp=sharing"
                      >
                        Project Proposal
                      </a>
                    </p>
                    <p>
                      <a className="a-none" href="https://github.com/sensehome">
                        Github : Source Codes
                      </a>
                    </p>
                    <p>
                      <a className="a-none" href="https://youtu.be/25vSvGaAhEc">
                        Demonstration Youtube video
                      </a>
                    </p>
                    <p>
                      <a
                        className="a-none"
                        href="https://www.linkedin.com/pulse/sensehome-iot-based-home-automation-system-rafiul-islam/"
                      >
                        Article on Linkedin
                      </a>
                    </p>
                    <p>
                      <a
                        className="a-none"
                        href="https://www.slideshare.net/RafiulIslam34/sensehome-iot-based-home-automation-system"
                      >
                        Slideshare Presentation
                      </a>
                    </p>
                  </div>
                  <div>
                    <span className="badge bg-success m-1">IotHub</span>
                    <span
                      className="badge m-1"
                      style={{ backgroundColor: "#1471bd" }}
                    >
                      Typescript
                    </span>
                    <span
                      className="badge"
                      style={{ backgroundColor: "#2d648f" }}
                    >
                      Python
                    </span>
                    <span className="badge bg-danger m-1">Redis</span>
                    <span
                      className="badge m-1"
                      style={{ backgroundColor: "#f26002" }}
                    >
                      RabbitMQ
                    </span>
                    <span className="badge bg-info m-1">React Native</span>
                  </div>
                </p>
              </li>

              <li className="list-group-item mt-3">
                <h5>MyBebsha</h5>
                <p>
                  MyBebsha is a platform to digitalize small and medium scale
                  business. MyBebsha platform provide online shop solution and
                  point of sale (POS) solution softwares in SaaS model (Software
                  as a Service).
                </p>
                <figure className="text-end">
                  <a className="a-none" href="https://mybebsa.io">
                    - Visit MyBebsha (Development Edition)
                  </a>
                </figure>
                <div>
                  <span className="badge bg-info m-1">Go</span>
                  <span
                    className="badge m-1"
                    style={{ backgroundColor: "#1471bd" }}
                  >
                    Typescript
                  </span>

                  <span className="badge bg-danger m-1">Redis</span>
                  <span
                    className="badge m-1"
                    style={{ backgroundColor: "#f26002" }}
                  >
                    RabbitMQ
                  </span>
                  <span className="badge bg-info m-1">Flutter</span>
                  <span className="badge bg-dark m-1">Microservice</span>
                  <span className="badge bg-dark m-1">OTP</span>
                  <span className="badge bg-dark m-1">Image Service</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};
