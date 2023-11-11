import React, { useState, setStatus } from 'react';
//import Card from "react-bootstrap/Card"
//import Spiner from "../../compoments/Spiner/Spiner"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { BsFiletypePdf } from 'react-icons/bs'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import './Register.css';

const Register = () => {

  const [inputdata, setInputData] = useState({

    fname: "",
    lname: "",
    email: "",
    contact: "",
    gender: "",
    location: "",
    emploi: "",
    departement: ""
  });
  const [status, setStatus] = useState("Active");
  const options = [
    { value: 'Active', label: 'Active' },
    { value: 'InActive', label: 'InActive' },
  ];

  // setInput Value
  const setInputValue = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputdata, [name]: value })
  }
  const setStausValue = (e) => {
    setStatus(e.value)
  }
  // submit userdata
  const submitUserData = (e) => {
    e.preventDefault();


    const { fname, lname, email, contact, location, emploi } = inputdata;

    if (fname === "") {
      toast.error("first name is Required")
    } else if (lname === "") {
      toast.error("Email is Required !")
    }
    else if (!email.includes('@')) {
      toast.error("entre Valid Email")
    } else if (contact === "") {
      toast.error("Mobile is Required")
    } else if (contact.length > 10) {
      toast.error("Entre Valid Mobile!")

    } else if (location === "") {
      toast.error("location is Required !")

    } else if (emploi === "") {
      toast.error("entre")
    }
    else {
      toast.success(" Registraction succesful")
    }


  }
  {/*const data = new FormData();
  data.append('fname',fname)
  data.append('lname',lname)
  data.append('contact', contact)
  data.append('gender',gender)
  data.append('status',status)
  data.append('location',location)
data.append('emploi',emploi)*/}

  return (
 

    <div className="container">


      <h2 className='text-center mt-1' > Enregistrez les coordonnées</h2>
      <div class="card shadow mt-6 p-3">
        <div className='profile_div text-center'>
          <img src="/man.png" alt="img" />
        </div>

        <form className='mt-3 p-3'>

          <div className='row'>
            <div class="mb-3 col-lg-6 col-md-2 col-6">
              <label for="exampleInputEmail1" class="form-label">Prénom</label>
              <input type="text" name=" fname" value={inputdata.fname} onChange={setInputValue} class="form-control" id="exampleInputEmail1" />

            </div>
            <div class="mb-4 col-lg-6 col-md-4 col-6">
              <label for="exampleInputEmail1" class="form-label">Nom</label>
              <input type="text" name='lname' value={inputdata.lname} onChange={setInputValue} class="form-control" id="exampleInputEmail1" />

            </div>
            <div class="mb-4 col-lg-6 col-md-4 col-6">
              <label for="exampleInputEmail1" class="form-label">Contact</label>
              <PhoneInput
                    country={"tn"}
                    id="exampleInputEmail1"
                    style={{width:"100%"}}
                    value={inputdata.contact}
                    onChange={
                      setInputValue
                    }
                />
              
            </div>

            <div class="mb-4 col-lg-6 col-md-4 col-6">
              <label for="exampleInputEmail1" class="form-label">Email</label>
              <input type="email" name="email" value={inputdata.email} onChange={setInputValue} class="form-control" id="exampleInputEmail1" />
            </div>
            <div class="mb-4 col-lg-6 col-md-4 col-6">
              <label for="exampleInputEmail1" class="form-label">Localisation</label>
              <input type="text" name="location" value={inputdata.location} onChange={setInputValue} class="form-control" id="exampleInputEmail1" />
            </div>

            <div class="mb-4 col-lg-6 col-md-4 col-6">
              <label for="exampleInputEmail1" class="form-label">emploi</label>
              <input type="email" name=" emploi" value={inputdata.emploi} onChange={setInputValue} class="form-control" id="exampleInputEmail1" />
            </div>
            <div class="mb-4 col-lg-6 col-md-2 col-6">
              <label for="selection">Département</label>
              <select id="selection" name="departement" value={inputdata.departement} onChange={setStausValue} class="form-control">
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
              <label for="exampleInputEmail1" name="gender" class="form-label">Définir le genre   &nbsp;</label>
              <br></br>
              <div class="form-check-inline ">
                <input class="form-check-input " type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="femme" />
                <label for="blankRadio1" class="form-check-label ">Femme</label>
              </div>
              <div class="form-check-inline ">
                <input class="form-check-input " type="radio" name="blankRadio" id="blankRadio2" value="option2" aria-label="homme" />
                <label for="blankRadio2" class="form-check-label">Homme</label>
              </div>
            </div>


           
              <div class="mb-3">
              <label
                  className='flex items-center gap-1 text-base text-ascent-1 hover:text-ascent-1 cursor-pointer'
                  htmlFor='vgifUpload'>
                  <input
                    type='file'
                    data-max-size='5120'
                    className='hidden'
                    style={{display:"none"}}
                    id='vgifUpload'
                    accept='.pdf'
                  />
                  <BsFiletypePdf />
                  <span style={{marginLeft:"5px"}}>Joindre CV</span>
              </label>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">Soumettre</button>

        </form>
      </div>
      <ToastContainer position='top-center' />
    </div>
  )
}



export default Register