import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const JobCategory = () =>{
    let [allrole, updateRole] = useState([]);
    const getrole =() =>{
        fetch("https://easytohire.in/testapi/myapi/alllrole")
        .then(response=>response.json())
        .then(roleArray=>{
            updateRole(roleArray);
        })
    }
    useEffect(()=>{
        getrole();
    },[])
    let[keyword, pickKeyword] = useState("");
    const PER_PAGE = 20;
    const [currentPage, setCurrentPage] = useState(0);
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage)
    }
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(allrole.length / PER_PAGE);
    return(
        <div className="container mt-4">
            <div className="row mb-5">
                <div className="col-lg-8 text-center">
                    <h3 className="text-warning"><i className="fa fa-database"></i>
                     Manage Job Categories : {allrole.length} </h3>
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
            <div className="row">
                {
                    allrole.slice(offset,offset + PER_PAGE).map((role, index)=>{
                        if(role.rolename.toUpperCase().match(keyword.toUpperCase()))
                        return(
                            <div className="col-lg-3 mb-4" key={index}>
                                <p className="shadow p-2"> {role. rolename} </p>
                            </div>
                        )
                    })
                }
            </div>
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

export default JobCategory;