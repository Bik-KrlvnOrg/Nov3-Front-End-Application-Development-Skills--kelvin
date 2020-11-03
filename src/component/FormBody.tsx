import React from "react";
import { useForm } from "react-hook-form";
const FormBody = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: any) => {
    console.log("post", data);
  };

  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* image upload */}
              <div className="row form-group">
                <div className="col">
                  <select
                    name="documentType"
                    className="form-control"
                    ref={register}
                  >
                    <option>Document Type</option>
                  </select>
                </div>
                <div className="col">
                  <button
                    style={{ backgroundColor: "#F9E5E5" }}
                    className="btn-light form-control"
                  >
                    Proceed
                  </button>
                </div>
              </div>
              {/* end image upload */}

              {/* firstName */}
              <div className="form-group">
                <div className="text-danger p-2">
                  {errors.firstName && errors.firstName.message}
                </div>
                <input
                  ref={register({ required: "firstname required" })}
                  type="text"
                  name="firstName"
                  className="form-control"
                  placeholder="firstName *"
                />
              </div>

              {/* lastname */}
              <div className="form-group">
                <div className="text-danger p-2">
                  {errors.lastName && errors.lastName.message}
                </div>
                <input
                  ref={register({ required: "lastname required" })}
                  type="text"
                  name="lastName"
                  className="form-control"
                  placeholder="lastName *"
                />
              </div>

              <button className="btn-danger form-control">Proceed</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormBody;
