import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import './home.css'

const Home = () => {
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
           <div  className='add_btn'>
            <Button variant='primary'> <i class="fa-solid fa-plus"></i>&nbsp; Ajouter candidature</Button>
           </div>
          </div>
          {/*export, gender,status*/}
          <div className='filter_div mt-5 d-flex justify-content-betwen flex-wrap'>
            <div className='export_csv'>
              <Button className='export_btn'>Export to CSV</Button>
            </div>
            <div className='filter_gender'>
              <div className='filter'>
                <h3>Filter par gender</h3>
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
        </div>
        
      </div>
    </>
  )
}

export default Home
