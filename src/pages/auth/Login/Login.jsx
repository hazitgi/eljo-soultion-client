import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../../../assets/images/logo/bri/br_logo.png";
import Sideimg from "../../../assets/images/frame_img.png";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../../redux/aactions/user.action";
export default function Login({ setIsLoggedIn }) {
  const [isLoggedIn, setIsLoggedInLocal] = useState(false);
  const navigate = useNavigate();
  const [email, setEmail] = useState("hazitgi@gmail.com");
  const [password, setPassword] = useState("12345678");
  const dispatch = useDispatch();
  const login = () => {
    const payload = { email, password };
    dispatch(userLogin(payload)).then((res) => {
      if (res.type.endsWith("fulfilled")) {
        localStorage.setItem("isLoggedIn", true);
        setIsLoggedIn(true);
        setIsLoggedInLocal(true);
        navigate("/qc/qualitychecklist");
      }
    });
  };

  const { loading } = useSelector((state) => state?.user);
  return (
    <div className="login_bg">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12 no-padding hide_for_mobile">
          <div className="left_main_container">
            <div className="">
              <img
                src={Sideimg}
                alt="Login_Frame_Image"
                className="login_image_control"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 no-padding">
          <div className="right_main_container">
            <div className="right_main_logo">
              <img
                src={logo}
                alt="Login_Frame_Image"
                className="login_image_control"
              />
            </div>
            <div className="welcome_text">Welcome Back!</div>
            <div className="sign_text">Let’s sign in you</div>

            <form>
              <div className="row">
                <div className="col-lg-8 col-md-10 col-sm-12 custom_feild_sizes">
                  <div className="did-floating-label-content">
                    <input
                      className="did-floating-input"
                      type="text"
                      placeholder=""
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className="did-floating-label">Email</label>
                  </div>
                  <div className="did-floating-label-content mb_small">
                    <input
                      className="did-floating-input"
                      type="password"
                      placeholder=""
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label className="did-floating-label">Password</label>
                  </div>
                  <div className="mt-3">
                    <button
                      disabled={loading}
                      className="btn btn-primary w-100"
                      onClick={login}
                    >
                      {!loading ? "Login" : "Loading.."}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
