import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const JobCity = () =>{
    let [allcity, updateCity] = useState([]);
    const getcity =() =>{
        fetch("https://easytohire.in/testapi/myapi/allcity")
        .then(response=>response.json())
        .then(cityArray=>{
            updateCity(cityArray);
        })
    }
    useEffect(()=>{
        getcity();
    },[]);

    let[keyword, pickKeyword] = useState("");
    const PER_PAGE = 20;
    const [currentPage, setCurrentPage] = useState(0);
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage)
    }
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(allcity.length / PER_PAGE);
    return(
        <div className="container mt-4">
            <div className="row mb-5">
                <div className="col-lg-8 text-center">
                    <h3 className="text-warning"><i className="fa fa-map-marker"></i> Job Location : {allcity.length} </h3>
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
                    allcity.slice(offset,offset + PER_PAGE).map((city, index)=>{
                        if(city.cityname.toLowerCase().match(keyword.toLowerCase()))
                        return(
                            <div className="col-lg-2 mb-4" key={index}>
                                <p className="shadow-sm p-2"> {city. cityname} </p>
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

export default JobCity;