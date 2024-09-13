import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login () {
  const [errorMessage, setErrorMessage] = useState(''); 
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        emailOrUsername: formData.emailOrUsername,
        password: formData.password,
      });
      const { token } = response.data;
      localStorage.setItem("token", token);
      navigate('/home');
    } catch (error) {
      setErrorMessage("Invalid email/username or password");
    }
  };

  return (
    <>
      <div class="login-register-area mt-no-text">
        <div class="container custom-area">
          <div class="row">
            <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-custom">
              <div class="login-register-wrapper">
                <div class="section-content text-center mb-5">
                  <h2 class="title-4 mb-2">Login</h2>
                  <p class="desc-content">
                    Please login using account detail bellow.
                  </p>
                </div>
                <form action="#" method="post" onSubmit={handleSubmit}>
                  <div class="single-input-item mb-3">
                    <input
                      type="email"
                      placeholder="Email or Username"
                      name="emailOrUsername"
                      value={formData.emailOrUsername}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="single-input-item mb-3">
                    <input
                      type="password"
                      placeholder="Enter your Password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                  {errorMessage && <p className="text-danger">{errorMessage}</p>}
                  <div class="single-input-item mb-3">
                    <div class="login-reg-form-meta d-flex align-items-center justify-content-between">
                      <div class="remember-meta mb-3">
                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="rememberMe"
                          />
                          <label class="custom-control-label" for="rememberMe">
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <a href="#" class="forget-pwd mb-3">
                        Forget Password?
                      </a>
                    </div>
                  </div>
                  <div class="single-input-item mb-3">
                    <button class="btn flosun-button secondary-btn theme-color rounded-0" 
                    onClick={handleSubmit}>
                      Login
                    </button>
                  </div>
                  <div class="single-input-item">
                    <a href="register.html">Creat Account</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
