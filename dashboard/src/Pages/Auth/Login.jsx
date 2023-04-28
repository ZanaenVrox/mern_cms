import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import AdminServices from "../../services/AdminServices";
import { notifyError, notifySuccess } from "../../utils/toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Loading, setLoading] = useState(false);

  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const adminEmail = secureLocalStorage.getItem("adminEmail");
    const adminPassword = secureLocalStorage.getItem("adminPassword");
    const adminRememberMe = secureLocalStorage.getItem("adminRememberMe");

    if (adminEmail && adminPassword && adminRememberMe) {
      setEmail(adminEmail);
      setPassword(adminPassword);
      setRememberMe(adminRememberMe);
    } else {
      setEmail("");
      setPassword("");
    }
  }, []);

  const AdminLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    const TimeOut = 0.5;

    AdminServices.loginAdmin({
      email: email,
      password: password,
    })
      .then((res) => {
        if (res) {
          setLoading(false);
          notifySuccess("Login Success!");
          secureLocalStorage.setItem("adminInfo", JSON.stringify(res), {
            expires: TimeOut,
          });
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        setLoading(false);
        notifyError(err ? err.response.data.message : err.message);
      });

    if (rememberMe === false) {
      secureLocalStorage.removeItem("adminRememberMe");
      secureLocalStorage.removeItem("adminPassword");
      secureLocalStorage.removeItem("adminEmail");
    }
  };

  useEffect(() => {
    if (rememberMe === true) {
      secureLocalStorage.setItem("adminEmail", email);
      secureLocalStorage.setItem("adminPassword", password);
      secureLocalStorage.setItem("adminRememberMe", rememberMe);
    }
  }, [rememberMe]);

  return (
    <>
      <Helmet>
        <title>Login | Embrace Pakistan</title>
        <body className="authentication-bg" />
      </Helmet>
      <div className="account-pages pt-sm-5">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-8 col-lg-6 col-xl-5">
              <div className="card">
                <div className="card-body p-4">
                  <div className="text-center mt-2">
                    <div className="text-center">
                      <Link to="/" className="mb-3 d-block auth-logo">
                        <img
                          src="/assets/images/logo-dark.png"
                          alt=""
                          width="120px"
                          height="30.72px"
                          className="logo logo-dark"
                        />
                        <img
                          src="/assets/images/logo-light.png"
                          alt=""
                          width="120px"
                          height="30.72px"
                          className="logo logo-light"
                        />
                      </Link>
                    </div>
                    <p className="text-muted">Login to Embrace Portal</p>
                  </div>
                  <div className="p-2 mt-4">
                    <form onSubmit={(e) => AdminLogin(e)}>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="email">
                          Email
                        </label>
                        <input
                          type="Emauk"
                          className="form-control"
                          id="email"
                          placeholder="Enter email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <div className="float-end">
                          <Link to="#" className="text-muted">
                            Forgot password?
                          </Link>
                        </div>
                        <label className="form-label" htmlFor="userpassword">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="userpassword"
                          placeholder="Enter password"
                          required
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="auth-remember-check"
                          checked={rememberMe === true}
                          onChange={() => setRememberMe(!rememberMe)}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="auth-remember-check"
                        >
                          Remember me
                        </label>
                      </div>
                      <div className="mt-3 text-end">
                        {Loading ? (
                          <>
                            <div
                              className="spinner-border text-primary m-1"
                              role="status"
                            >
                              <span className="sr-only">Loading...</span>
                            </div>
                          </>
                        ) : (
                          <button
                            className="btn btn-primary w-sm waves-effect waves-light"
                            type="submit"
                          >
                            Log In
                          </button>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="mt-5 text-center">
                <p>
                  © Embrace. Crafted with&nbsp;
                  <i className="mdi mdi-heart text-danger" /> by&nbsp;
                  <a
                    href="https://websouls.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Websouls
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* end row */}
        </div>
        {/* end container */}
      </div>
    </>
  );
};

export default Login;
