import React,{useState} from 'react';
//import Card from "react-bootstrap/Card"
import './Register.css';

const Register = () => {
  const [inputdata,setInputData] = useState ({
    fname:"",
    lname:"",
    email:"",
    contact:"",
    gender:"",
    location:"",
    departement:""
  });
 


  return (
    <div classNamec="container">


      <h2 className='text-center mt-1' > Enregistrez les coordonnées</h2>
      <div class="card shadow mt-6 p-3">
        <div className='profile_div text-center'>
          <img src="/man.png" alt="img" />
        </div>

        <form className='mt-3 p-3'>

          <div className='row'>
            <div class="mb-3 col-lg-6 col-md-2 col-6">
              <label for="exampleInputEmail1" class="form-label">Prénom</label>
              <input type="text" name=" fname" class="form-control" id="exampleInputEmail1" />

            </div>
            <div class="mb-4 col-lg-6 col-md-4 col-6">
              <label for="exampleInputEmail1" class="form-label">Nom</label>
              <input type="text" name='lname' class="form-control" id="exampleInputEmail1" />

            </div>
            <div class="mb-4 col-lg-6 col-md-4 col-6">
              <label for="exampleInputEmail1" class="form-label">Contact</label>
              <input type="text" name ="contact" class="form-control" id="exampleInputEmail1" placeholder='Entrez le numéro de téléphone' />
            </div>

            <div class="mb-4 col-lg-6 col-md-4 col-6">
              <label for="exampleInputEmail1" class="form-label">Email</label>
              <input type="email" name="email" class="form-control" id="exampleInputEmail1" />
            </div>
            <div class="mb-4 col-lg-6 col-md-4 col-6">
              <label for="exampleInputEmail1" class="form-label">Localisation</label>
              <input type="text" name ="localisation" class="form-control" id="exampleInputEmail1"  />
            </div>
            
            <div class="mb-4 col-lg-6 col-md-4 col-6">
              <label for="exampleInputEmail1" class="form-label">emploi</label>
              <input type="email" name=" emploi" class="form-control" id="exampleInputEmail1" />
            </div>
            <div class="mb-4 col-lg-6 col-md-2 col-6">
              <label for="selection">Département</label>
              <select id="selection" name="departement" class="form-control">
                <option value="">-------</option>

                <option value="">Département Informatique</option>
                <option value="">Département Logistique</option>
                <option value="">Département Achat</option>
                <option value="">Département Magasin Fourniture</option>
                <option value="">Département Import Tissu</option>
                <option value="">Département Placement</option>
                <option value="">Département Technique</option>
                <option value="">Département Placement</option>
                <option value="">Département Patronage</option>
                <option value="">Département Contrôle Tissu</option>
                <option value="">Département Lavage</option>
                <option value="">Département Coupe</option>
                <option value="">Département Finition </option>
                <option value="">Département Qualité</option>
                <option value="">Département Export</option>

              </select>
            </div>

            <div class="mb-4 col-lg-6 col-md-4 col-6">
              <label for="exampleInputEmail1" name="gender" class="form-label">Définir le genre</label>
            <div class="form-check">
              <label for="exampleInputEmail1" class="form-label">Femme</label>
              <input class="form-check-input position-static" type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="dd" />
              </div>
              <div class="form-check">
              <label for="exampleInputEmail1" class="form-label">Homme</label>
              <input class="form-check-input position-static" type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="..." />

            </div>
            </div>

            <div class="mb-3">
              <label for="fichier"> Fichier CV  </label>
              <input type="file" class="form-control-file" id="fichier" />
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Soumettre</button>

        </form>
      </div>
    </div>
  )
}

export default Register
