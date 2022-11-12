export function Overview() {
  return (
    <section className="resume">
      <h1>Overview</h1>

      <h2>Positions</h2>

      <ul className="Overview__List">
        <li>
          <span className="spacer">
            <i className="fa fa-angle-right"></i>
          </span>
          <a href="https://www.glassdoor.com">Glassdoor</a> ~ Company Reviews and Conversation
          <ul>
            <li>
              <span className="spacer">
                <i className="fa fa-angle-right"></i>
              </span>
              Lead Software Engineer, November 2022–Present
            </li>

            <li>
              <span className="spacer">
                <i className="fa fa-angle-right"></i>
              </span>
              Senior Front End Engineer, July 2020–November 2022
            </li>
          </ul>
        </li>

        <li>
          <span className="spacer">
            <i className="fa fa-angle-right"></i>
          </span>
          <a href="https://www.instructure.com">Instructure</a> ~ Educational Technology Company
          <ul>
            <li>
              <span className="spacer">
                <i className="fa fa-angle-right"></i>
              </span>
              Senior Software Engineer, August 2018–June 2020
            </li>

            <li>
              <span className="spacer">
                <i className="fa fa-angle-right"></i>
              </span>
              Software Engineer, March 2016–August 2018
            </li>
          </ul>
        </li>

        <li>
          <span className="spacer">
            <i className="fa fa-angle-right"></i>
          </span>
          <a href="https://www.8thlight.com">8th Light</a> ~ Software Development Consultancy
          <ul>
            <li>
              <span className="spacer">
                <i className="fa fa-angle-right"></i>
              </span>
              Software Crafter, December 2012–February 2016
            </li>

            <li>
              <span className="spacer">
                <i className="fa fa-angle-right"></i>
              </span>
              Software Apprentice, June 2012–December 2012
            </li>
          </ul>
        </li>
      </ul>

      <h2>Languages</h2>
      <span className="spacer">
        <i className="fa fa-angle-right"></i>
      </span>
      <ul className="comma-list">
        <li className="comma-list-item">JavaScript</li>
        <li className="comma-list-item">Node.js</li>
        <li className="comma-list-item">Ruby</li>
        <li className="comma-list-item">Clojure</li>
        <li className="comma-list-item">Java</li>
        <li className="comma-list-item">Python</li>
        <li className="comma-list-item">C</li>
        <li className="comma-list-item">Go</li>
      </ul>

      <h2>Libraries, Frameworks, and SDKs</h2>
      <span className="spacer">
        <i className="fa fa-angle-right"></i>
      </span>
      <ul className="comma-list">
        <li className="comma-list-item">React</li>
        <li className="comma-list-item">Webpack</li>
        <li className="comma-list-item">InstUI</li>
        <li className="comma-list-item">Redux</li>
        <li className="comma-list-item">Rails</li>
        <li className="comma-list-item">Sinatra</li>
        <li className="comma-list-item">Android</li>
      </ul>

      <h2>APIs</h2>
      <span className="spacer">
        <i className="fa fa-angle-right"></i>
      </span>
      <ul className="comma-list">
        <li className="comma-list-item">Goodreads</li>
        <li className="comma-list-item">Canvas LMS</li>
        <li className="comma-list-item">Amazon (Product Advertising, S3)</li>
      </ul>

      <h2>Practices</h2>
      <span className="spacer">
        <i className="fa fa-angle-right"></i>
      </span>
      <ul className="comma-list">
        <li className="comma-list-item">BDD/TDD</li>
        <li className="comma-list-item">Clean Code</li>
        <li className="comma-list-item">Agile</li>
      </ul>
    </section>
  )
}
