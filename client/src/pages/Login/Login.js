import react from "react";
import "./login.css"


const login = () => {
    return (

        <div className="page">
           
            <div className="cover"  >

                <h1 style={{ textAlign: 'center' }}>Login</h1>
                <form>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-6">
      <input type="email" class="form-control" id="inputEmail3" placeholder="Email" />
    </div>
  </div>


  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-6">
      <input type="password" class="form-control" id="inputPassword3" placeholder="Password"/>
    </div>
  </div>


  <div class="col-sm-70 text-center">
    <div class="col-sm-20">
      <button type="submit" class="btn btn-primary">Log in</button>
    </div>
  </div>
</form>
            </div>
            <div class="image-container">
            <img src="/Authentication.gif" alt="GIF de votre choix"></img>
            </div>

        </div>
    )
}

export default login
