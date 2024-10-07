import { useState, useEffect } from "react";

const MyDashboard = () =>{
    let [alljob, updateJob] = useState([]);
    const getjob =() =>{
        fetch("https://easytohire.in/testapi/myapi/alljob")
        .then(response=>response.json())
        .then(jobArray=>{
            updateJob(jobArray);
        })
    }

    let [allrole, updateRole] = useState([]);
    const getrole =() =>{
        fetch("https://easytohire.in/testapi/myapi/alllrole")
        .then(response=>response.json())
        .then(roleArray=>{
            updateRole(roleArray);
        })
    }
    
    let [alluser, updateUser] = useState([]);
    const getUser =() =>{
        fetch("https://easytohire.in/testapi/myapi/allluser")
        .then(response=>response.json())
        .then(userArray=>{
            updateUser(userArray);
        })
    }

    let [allcompany, updateCompany] = useState([]);
    const getCompany =() =>{
        fetch("https://easytohire.in/testapi/myapi/alllcompany")
        .then(response=>response.json())
        .then(companyArray=>{
            updateCompany(companyArray);
        })
    }

    useEffect(()=>{
        getUser();
        getCompany();
        getrole();
        getjob();
    },[]);

    return(
        <div className="container mt-4">
            <div className="row text-center">
                <h1 className="text-center mb-5 col-lg-12"> EasyToHire Dashboard</h1>
                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
                    <div className="bg-light rounded text-info shadow-sm pt-4 pb-4">
                        <i className="fa fa-building fa-2x"></i>
                        <h4> {allcompany.length} - Companies </h4>
                    </div>
                </div>

                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
                    <div className="bg-light rounded text-warning shadow-sm pt-4 pb-4">
                        <i className="fa fa-users fa-2x"></i>
                        <h4> {alluser.length} - Job Seeker </h4>
                    </div>
                </div>

                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
                    <div className="bg-light rounded text-success shadow-sm pt-4 pb-4">
                        <i className="fa fa-suitcase fa-2x"></i>
                        <h4> {alljob.length} - Jobs </h4>
                    </div>
                </div>

                <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
                    <div className="bg-light rounded text-primary shadow-sm pt-4 pb-4">
                        <i className="fa fa-database fa-2x"></i>
                        <h4> {allrole.length} - Jobs Categories </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyDashboard;