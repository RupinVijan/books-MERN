import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "../assets/css/login.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Signup() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [Loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const res = await fetch("http://localhost:8080/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const resData = await res.json();
    if (resData.status) {
      localStorage.setItem("userToken", resData.userToken);
      Swal.fire({
        icon: "success",
        title: "Signup Success!",
        text: resData.msg,
      });
      setformData({
        name: "",
        email: "",
        password: "",
      });
      window.location = "/order";
    } else {
      Swal.fire({
        icon: "error",
        title: resData.error,
        text: resData.msg,
      });
    }
    setLoading(false);
  };
  useEffect(() => {
    if (Loading) {
      let timerInterval;
      Swal.fire({
        title: "Loading!",
        html: "I will close in <b></b> milliseconds.",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft();
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
    }
  }, [Loading]);
  return (
    <>
      <Navbar />
      <div className="login-body">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-2"></div>
            <div className="col-lg-6 col-md-8 login-box">
              <div className="col-lg-12 login-key">
                <i className="bi bi-key"></i>
              </div>
              <div className="col-lg-12 login-title">Signup</div>
              <div className="col-lg-12 login-form">
                <div className="col-lg-12 login-form">
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label className="form-control-label">Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setformData({ ...formData, name: e.target.value });
                        }}
                        className="form-control"
                        Required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-control-label">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setformData({ ...formData, email: e.target.value });
                        }}
                        className="form-control"
                        Required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-control-label">PASSWORD</label>
                      <input
                        type="password"
                        value={formData.password}
                        onChange={(e) => {
                          setformData({
                            ...formData,
                            password: e.target.value,
                          });
                        }}
                        className="form-control"
                        Required
                      />
                    </div>

                    <div className="col-lg-12 loginbttm">
                      <div className="col-lg-6 login-btm login-text"></div>
                      <div className="col-lg-6 login-btm login-button">
                        <button
                          type="submit"
                          className="btn btn-outline-primary"
                        >
                          LOGIN
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-3 col-md-2"></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
