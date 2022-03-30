import { Layout } from "components/Layout";

export const TimelinePage = () => {
  return (
    <Layout title="Timeline">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div id="content">
              <ul className="timeline">
                <li className="event" data-date="2021 - Present">
                  <h3>MyBebsha Startup</h3>
                  <p>
                    MyBebsha platform provide online shop solution and point of
                    sale (POS) solution softwares in SaaS model (Software as a
                    Service).
                  </p>
                  <p>
                    <a className="a-none" href="https://mybebsa.io">
                      Visit MyBebsha Platform
                    </a>
                  </p>
                </li>
                <li className="event" data-date="Jan 2020 - Jul 2020">
                  <h3>Industrial Internship</h3>
                  <p>
                    <a className="a-none" href="https://www.cefalo.com/en/">
                      Cefalo Bangladesh Limited
                    </a>
                  </p>
                  <p>
                    <a
                      className="a-none"
                      href="https://www.linkedin.com/pulse/what-i-have-learnt-from-my-cefalo-internship-rafiul-islam/"
                    >
                      What I have learnt from my Cefalo internship
                    </a>
                  </p>
                </li>
                <li className="event" data-date="2016 - 2020">
                  <h3>Education : Bachelor's Degree</h3>
                  <p>BSC on Software Engineering</p>
                  <p>Shahjalal University of Science and Technology, Sylhet</p>
                </li>
                <li className="event" data-date="2014 - 2015">
                  <h3>Education : Higher Secondary</h3>
                  <p>HSC : Science</p>
                  <p>Comilla Victoria Govt. College</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
