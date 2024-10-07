import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const CompanyList = () => {
    let [allcompany, updateCompany] = useState([]);
    const getCompany = () => {
        fetch("https://easytohire.in/testapi/myapi/alllcompany")
            .then(response => response.json())
            .then(companyArray => {
                updateCompany(companyArray);
            })
    }

    useEffect(() => {
        getCompany();
    }, []);
    let[keyword, pickKeyword] = useState("");
    const PER_PAGE = 8;
    const [currentPage, setCurrentPage] = useState(0);
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage)
    }
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(allcompany.length / PER_PAGE);
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-lg-8 text-center">
                    <h3 className="text-primary mb-4">
                        <i className="fa fa-building"></i> Manage Company : {allcompany.length}
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
                <div>
                    <table className="table table-bordered text-start">
                        <thead>
                            <tr>
                                <th> Name </th>
                                <th> Email </th>
                                <th> Password </th>
                                <th> Mobile </th>
                                <th> City </th>
                                <th> Address </th>
                                <th> PAN </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allcompany.slice(offset,offset + PER_PAGE).map((company, index) => {
                                    if(company.fullname.toLowerCase().match(keyword.toLowerCase()))
                                    return (
                                        <tr key={index}>
                                            <td> {company.fullname} ({company.type}) </td>
                                            <td> {company.email} </td>
                                            <td> {company.password} </td>
                                            <td> {company.mobile} </td>
                                            <td> {company.city} </td>
                                            <td> {company.address} </td>
                                            <td> {company.pan} </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
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
            </div>
    )

}

export default CompanyList;