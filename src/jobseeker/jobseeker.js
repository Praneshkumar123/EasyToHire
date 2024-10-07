import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const JobSeeker = () =>{

    let[alluser, updateUser] = useState( [] );
    const getUser = () =>{
        fetch("https://easytohire.in/testapi/myapi/allluser")
        .then(response=>response.json())
        .then(userArray=>{
            updateUser(userArray);
        })
    }

    useEffect(()=>{
        getUser();
    }, []);
    let[keyword, pickKeyword] = useState("");
    const PER_PAGE = 5;
    const [currentPage, setCurrentPage] = useState(0);
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage)
    }
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(alluser.length / PER_PAGE);
    return(
        <div className="container mt-4">
            <div className="row mb-4">
                <div className="col-lg-8 text-center">
                    <h3 className="text-primary"> 
                        <i className="fa fa-user-tie"></i> Manage Job Seeker : {alluser.length}
                    </h3>
                </div>
                <div className="col-lg-4">
                <input 
                    type="text"
                    placeholder="Search..."
                    className="form-control"
                    onChange={obj=>pickKeyword(obj.target.value)}
                />
                </div>
            </div>
            {
                alluser.slice(offset,offset + PER_PAGE).map((user, index)=>{
                    if(
                        user.fullname.toLowerCase().match(keyword.toLowerCase()) ||
                        user.mobile.toString().match(keyword.toLowerCase())
                    )
                    return(
                        <div className="row shadow-sm mb-5" key={index}>
                            <div className="col-lg-3">
                                <b> {user.fullname} </b>
                                <p> Gender : {user.gender} </p>
                                <p> DOB : {user.dob} </p>
                                <p> Experience : {user.totalexp} </p>
                                <p> About : {user.aboutexp} </p>
                            </div>
                            <div className="col-lg-3">
                                <p> Mobile : {user.mobile} </p>
                                <p> e-Mail : {user.email}  ( <b className="text-danger">Verified : {user.active}  </b>) </p>
                                <p> Password : {user.password} </p>
                                <p> Address : {user.address} </p>
                            </div>
                            <div className="col-lg-3">
                                <p> Education : {user.educationname} </p>
                                <p> Year : {user.passingyear} </p>
                                <p> Grade / Marks : {user.grade} </p>
                                <p> Institute : {user.college} </p>
                            </div>
                            <div className="col-lg-3">
                                <b> Skills </b>
                                <p> {user.skill} </p>
                            </div>
                        </div>
                    )
                })
            }
            <div className="mb-4 mt-4">
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination  justify-content-center"}
                    pageClassName={"page-item "}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"active primary"}
                />
            </div>
        </div>
    )

}

export default JobSeeker;