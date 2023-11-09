import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import './Home.css'
import { useNavigate } from 'react-router-dom'
import Tables from '../../compoments/Tables/Tables';
import Spinner from 'react-bootstrap/Spinner';
import Spiner from "../../compoments/Spiner/Spiner"





const Home = () => {
  const [showspin, setShowSpin] = useState(true)
  const navigate = useNavigate();
  const adduser = () => {
    navigate('/register')
  }
  useEffect(() => {
    setTimeout(() => {
      setShowSpin(false)
    }, 300)
  }, [])


  return (

    <>


      <div className='contanier'>
        <div className='main_div'>

          {/*search add btn*/}
          <div className='search_add mt-4 d-flex justify-content-between'>
            <div className='search col-lg-4'>
              <Form className='d-flex'>
                <Form.Control
                  type='search'
                  placeholder='Rechercher'
                  className='me-2'
                  aria-label='Search'
                />
                <Button variant='success' className='search_btn'>Recherche</Button>

              </Form>

            </div>

            {/*export, gender,status*/}
            <div class="container">
              <div class="row">
                <div class="col">
                  <div className='filter_div mt-5 d-flex justify-content-betwen flex-wrap'>

                    <div className='export_csv'>
                      <div class='element-gauche-btn'>
                        <Button className='export_btn'>Export to CSV</Button>

                      </div>
                    </div>
                    <div class="element-droit-btn">
                      <div className='add_btn' >
                        <Button variant='primary'> <i class="fa-solid fa-plus"></i>&nbsp; Ajouter candidature</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='filter_div mt-5 d-flex justify-content-betwen flex-wrap'>
            <div class='element-a-left'>
              <div className='filter_gender'>
                <div className='filter'>
                  <h3> Filter par gender</h3>
                  <div className='gender d-flex justify-content-around'>
                    <Form.Check
                      type={"radio"}
                      label={'All'}
                      name="gender"
                      value={"ALL"}
                      defaultChecked
                    />
                    <Form.Check
                      type={"radio"}
                      label={'Femme'}
                      name="gender"
                      value={"ALL"}
                      defaultChecked
                    />
                    <Form.Check
                      type={"radio"}
                      label={'Homme'}
                      name="gender"
                      value={"ALL"}
                      defaultChecked
                    />
                  </div>
                </div>
              </div>
            </div>
            {/*short by value*/}

            {/* short by value */}
       
            <div class='element-a-center'>
              <div className="filter_newold">
                <h3>Short par valeur</h3>
                <Dropdown className='text-center'>
                  <Dropdown.Toggle className='dropdown_btn' id="dropdown-basic">
                    <i class="fa-solid fa-sort"></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item >Nouveau</Dropdown.Item>
                    <Dropdown.Item >Ancien</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
           
            {/*filter by status*/}
            <div class="element-droit">
              <div className='filter_status' >
                <div className='status'>
                  <h3> Filtrer par statut</h3>
                  <div className='status_radio d-flex justfiy-cotent-around '>

                    <Form.Check
                      type={"radio"}
                      label={'All'}
                      name="gender"
                      value={"ALL"}
                      defaultChecked
                    />

                    <Form.Check
                      type={"radio"}
                      label={'Active'}
                      name="gender"
                      value={"ALL"}
                      defaultChecked
                    />

                    <Form.Check
                      type={"radio"}
                      label={'InActive'}
                      name="gender"
                      value={"ALL"}
                      defaultChecked
                    />

                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
        {
          showspin ? <Spiner /> : <Tables />
        }

      </div>

    </>
  )

}

export default Home

