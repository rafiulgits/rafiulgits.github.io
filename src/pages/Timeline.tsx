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
                  <h3>LogiQbits (Co-Founder)</h3>
                  <p>
                    <a className="a-none" href="https://logiqbits.com">
                      www.logiqbits.com
                    </a>
                  </p>
                  <p>
                    <a className="a-none" href="https://shopap.io">
                      www.shopap.io
                    </a>
                  </p>
                </li>
                <li className="event" data-date="Jan 2020 - Jul 2020">
                  <h3>Cefalo Bangladesh Limited</h3>
                  <p>Trainee Software Engineeer</p>
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
