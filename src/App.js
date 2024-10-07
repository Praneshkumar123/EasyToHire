import { HashRouter,Routes,Route, Link } from 'react-router-dom';
import MyDashboard from './dashboard';
import CompanyList from './company/company';
import JobCategory from './company/jobcategory';
import JobList from './company/job';
import JobSeeker from './jobseeker/jobseeker';
import JobCity from './company/city';

function App() {
  return (
    <HashRouter>

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow sticky-top">
          <div className="container">
            <a className="navbar-brand"><i className="fa fa-users fa-lg"></i>EasyToHire </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
              <span className="navbar-toggler-icon"></span>
            </button> 
            <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="navbar-nav me-auto">
                <li className="nav-item me-4">
                  <Link className="nav-link active " to="/" ><i className="fa fa-home" ></i> Dashboard</Link>
                </li>
                <li className="nav-item me-4">
                  <Link className="nav-link active " to="/company" ><i className="fa fa-building" ></i> Manage Company</Link>
                </li>
                <li className="nav-item me-4">
                  <Link className="nav-link active " to="/jobseeker" ><i className="fa fa-user-tie" ></i> Job Seeker</Link>
                </li>
                <li className="nav-item me-4">
                  <Link className="nav-link active " to="/category" ><i className="fa fa-database" ></i> Job Categories</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active " to="/jobs" ><i className="fa fa-suitcase" ></i> Manage Jobs</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active " to="/city" ><i className="fa fa-map-marker" ></i> Job Location </Link>
                </li>

                <li className="nav-item ms-5">
                <Link className="nav-link active" onClick={logout}> { localStorage.getItem("fullname")}  - Logout </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>


      <Routes>
        <Route exact path="/" element={<MyDashboard/>}/>
        <Route exact path="/company" element={<CompanyList/>}/>
        <Route exact path="/jobseeker" element={<JobSeeker/>}/>
        <Route exact path="/category" element={<JobCategory/>}/>
        <Route exact path="/jobs" element={<JobList/>}/>
        <Route exact path="/city" element={<JobCity />}/>
        
      </Routes>
    </HashRouter>
  )
}

export default App;

const logout =() =>{
  localStorage.clear(""); // clear all data in local storage
  window.location.reload("");  // reload the page
}
