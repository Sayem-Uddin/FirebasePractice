


const Login = () => {
    return (
        <div>
              <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 justify-center items-start mx-auto my-40">
                <h1 className="text-4xl justify-center mx-auto">Log In</h1>
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
       
        </div>
      </form>
    </div>
        </div>
    );
};

export default Login;