import React, { useState } from "react";

const Form = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);

  const addData = (e) => {
    
    if (fname === "") {
        alert("First Name is required");
    }
    else if (lname === "") {
        alert("Last Name is required");
    }
    else if (email === "") {
        alert("Email is required");
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
        alert("Incorrect email format");
    }
    else if (password === "") {
        alert("Password is required");
    } else if (password.length < 6) {
        alert("Password must have a minimum 6 characters");
    }
    else {
        setData([...data, { fname, lname, email, password }]);
    setFname("");
    setLname("");
    setEmail("");
    setPassword("");
    }
    

    
    e.preventDefault();
  };

  return (
    <div>
      <form>
        <div className="form">
          <input
            type="text"
            className="fname"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            placeholder="First Name"
            
          />
          <input
            type="text"
            className="lastName"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
            placeholder="Last Name"
          />
          <input
            type="email"
            className="emailId"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            className="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button
            type="submit"
            onClick={addData}
            className="submitBtn"
            id="submitBtn"
          >
            Submit
          </button>
        </div>
      </form>
      <div>
        {data.map((element, index) => {
          return (
            <div key={index} className="data_val">
                <label>First Name : {element.fname}</label>
                <label>Last Name : {element.lname}</label>
                <label>Email : {element.email}</label>
                <label>Password : {element.password}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Form;
