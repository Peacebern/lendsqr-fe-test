
// Revised Code after adding validation logic for both email and password fields
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginlogo, logo, login } from "utils/images";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Email is invalid";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (validate()) {
      console.log("Logging in with", { email, password });
      navigate("/users");
    }
  };

  return (
    <main className="login">
      <section className="container_1">
        <span className="logo_mx">
          <img src={loginlogo} alt="Lendsqr_logo" />
        </span>
        <img src={login} alt="login-1" />
      </section>

      <section className="container_2">
        <span className="logo_sx">
          <img src={logo} alt="Lendsqr_logo" />
        </span>

        <form onSubmit={(e) => e.preventDefault()}>
          <h1>Welcome!</h1>
          <h2>Enter details to login</h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error">{errors.password}</p>}

          <Link to="/forgotpassword">Forgot password?</Link>

          <input
            type="button"
            value="LOG IN"
            style={{ color: "white" }}
            onClick={handleLogin}
          />
        </form>
      </section>
    </main>
  );
};

export default Login;


// Original Code before adding validation logic

// import { Link, useNavigate } from "react-router-dom";
// import { loginlogo, logo, login } from "utils/images";


// const Login = () => {
//   const navigate = useNavigate();
//   return (
//     <main className="login">
//       {/* <span className="logo_mx">
//         <img src={loginlogo} alt="Lendsqr_logo" />
//       </span> */}
//       <section className="container_1">
//         {/* <span className="logo_mx">
//           <img src={logo} alt="Lendsqr_logo" />
//         </span> */}
//         <span className="logo_mx">
//           <img src={loginlogo} alt="Lendsqr_logo" />
//         </span>
//         <img src={login} alt="login-1" />
//       </section>
//       <section className="container_2">
//         <span className="logo_sx">
//           <img src={logo} alt="Lendsqr_logo" />
//         </span>
//         <form>
//           <h1>Welcome!</h1>
//           <h2>Enter details to login</h2>
//           <input type="email" placeholder="Email" name="email" id="email" />
//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             id="password"
//           />
//           <Link to="/forgotpassword">forgot password</Link>
//           <input
//             type="button"
//             value="LOG IN"
//             style={{ color: "white" }}
//             onClick={() => navigate("/users")}
//           />
//         </form>
//       </section>
//     </main>
//   );
// };

// export default Login;