import { useContext } from "react";
import  { AuthContext } from "../../FirebseProvider/FirebaseProvider";
import { useForm } from "react-hook-form"

const Register = () => {
  const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const {email,password} = data;
    creatUser(email,password)
    .then(result =>{ 
      })
  }


const {creatUser} = useContext(AuthContext)
    // console.log(creatUser)
    return (
        <div>
             <div>
              <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 justify-center items-start mx-auto my-40">
                <h1 className="text-4xl justify-center mx-auto">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered"  />
          {errors.email && <span className="text-red-600
          ">E-mail is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered" />
          {errors.password && <span className="text-red-600
          ">Password is required</span>}
          <div className="form-control mt-6">
         <input className="btn btn-primary" type="Submit" />
        </div>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
       
      </form>
    </div>
        </div>
        </div>
    );
};

export default Register;