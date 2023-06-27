import React, { useState } from "react";

const Contact = () => {
  const [data, setdata] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setdata((preval) => {
      return { ...preval, [name]: value };
    });
  };
  const formsubmit = (e) => {
    e.preventDefault();
  alert(`my name is ${data.fullname} , my mobile number is ${data.phone} , my email is ${data.email} and message is ${data.msg}`)
  };
  return (
    <React.Fragment>
      <div className="my-5">
        <h1 className="text-center">Contact us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formsubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  value={data.email}
                  name="email"
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Enter your name
                </label>
                <input
                  type="text"
                  class="form-control"
                  onChange={InputEvent}
                  id="exampleFormControlInput1"
                  value={data.fullname}
                  name="fullname"
                  placeholder="type your name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  phone number
                </label>
                <input
                  type="number"
                  onChange={InputEvent}
                  class="form-control"
                  id="exampleFormControlInput1"
                  value={data.phone}
                  name="phone"
                  placeholder="mobile number"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  onChange={InputEvent}
                  value={data.msg}
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
