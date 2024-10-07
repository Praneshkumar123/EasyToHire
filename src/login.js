import { useState } from "react";
import swal from "sweetalert";

const Mylogin = () => {
    let [email, pickEmail] = useState("");
    let [password, pickPassward] = useState("");
    let [msg, pickMsg] = useState("Enter Login Details !")

    const loginCheck = () => {
        if (email =="" || password =="") {
            swal("Empty", "Empty email or password", "warning");
        } else {
            pickMsg("Pease Wait Processing");

            let loginData = { email: email, password: password };
            let url = "https://easytohire.in/webapi/login/validateme";
            let postData = {
                headers: { 'Content-Type': 'application/json' },
                method: "POST",
                body: JSON.stringify(loginData)
            };

            fetch(url, postData)
                .then(response => response.json())
                .then(info => {
                    pickMsg( info.message );
                    if(info.status=="SUCCESS"){
                        localStorage.setItem("tokenno", info.tokenno);
                        localStorage.setItem("companyid", info.companyid);
                        localStorage.setItem("fullname", info.name);
                        localStorage.setItem("roletype", info.type);
                        window.location.reload(); // reload the page after success
                    }else{
                        swal("Fail", "Invalid or Not Exists", "warning"); 
                    }
                })
        }
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-xl-4"></div>
                <div className="col-xl-4">
                    <div className="text-center pt-5">
                        <h3> <i className="fa fa-users text-warning"></i>EasyToHire.in</h3>
                        <p>  Hire & deploy For Freshers & Experienced</p>
                        <p className="text-danger text-center"> {msg} </p>
                    </div>
                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-info text-white">
                            <i className="fa fa-lock fa-lg"></i> Login
                        </div>
                        <div className="card-body">
                            <div><p> E-mail Id </p>
                                <input type="text" className="form-control"
                                    onChange={obj => pickEmail(obj.target.value)} /></div>
                            <div className="mb-4">
                                <p> Password </p>
                                <input type="password" className="form-control"
                                    onChange={obj => pickPassward(obj.target.value)} />
                            </div>
                            <div className="text-center card-footer">
                                <button className="btn btn-danger" onClick={loginCheck}> Login <i className="fa fa-arrow-right"></i> </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4"></div>
            </div>

        </div>
    )

}

export default Mylogin;
