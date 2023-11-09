import React from 'react'
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

import './tables.css'
import  Dropdown from 'react-bootstrap/Dropdown';

import Badge  from 'react-bootstrap/Badge';

const Tables = () => {
  return (
    <>
      <div className='container'>
        <Row>
          <div className='col mt-0'>
            <Card className="col mt-0" >
              <Table className='align-items-center' responsive="sm">
                <thead className='thead-dark'>
                  <tr className='table-dark'>
                    <th>ID</th>
                    <th>FullName</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>&nbsp;&nbsp;&nbsp;Status</th>
                    <th>Profile</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Ichrak Ben Saad</td>
                    <td>ichrak@gmail.com</td>
                    <td>F</td>
                    <td className='d-flex algin-items-center'>
                    <Dropdown className="text-center" >
                      <Dropdown.Toggle className='dropdown_btn' id="dropdown-basic">
                        <Badge bg="primary" >
                          Active <i class="fa-solid fa-angle-down"></i>

                        </Badge>

                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>Active</Dropdown.Item>
                        <Dropdown.Item>InActive</Dropdown.Item>
                      </Dropdown.Menu>
                      
                    </Dropdown>
                    </td>
                    <td className='img_parent'>
                      <img src="/man.png" alt=""/>

                    </td>
                    <td>
                    <Dropdown className="text-center" >
                      <Dropdown.Toggle className='dropdown_btn' id="dropdown-basic">
                        <Badge bg="primary" >
                          <i class="fa-solid fa-ellipsis-vertical"></i>

                        </Badge>

                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>
                          <i class="fa-solid fa-eye" style={{color:"green"}}></i><span> View</span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <i class="fa-solid fa-pen-to-square" style={{color:"blue"}}></i><span> Edit</span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <i class="fa-solid fa-trash" style={{color:"red"}}></i><span>Delete</span>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                      
                    </Dropdown>
                    </td>

                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Roua Hfaiedh</td>
                    <td>Roua@gmail.com</td>
                    <td>F</td>
                    <td className='d-flex algin-items-center'>
                    <Dropdown className="text-center" >
                      <Dropdown.Toggle className='dropdown_btn' id="dropdown-basic">
                        <Badge bg="primary" >
                          Active <i class="fa-solid fa-angle-down"></i>

                        </Badge>

                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>Active</Dropdown.Item>
                        <Dropdown.Item>InActive</Dropdown.Item>
                      </Dropdown.Menu>
                      
                    </Dropdown>
                    </td>
                    <td className='img_parent'>
                      <img src="/man.png" alt=""/>

                    </td>
                    <td>
                    <Dropdown className="text-center" >
                      <Dropdown.Toggle className='dropdown_btn' id="dropdown-basic">
                        <Badge bg="primary" >
                          <i class="fa-solid fa-ellipsis-vertical"></i>

                        </Badge>

                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item>
                          <i class="fa-solid fa-eye" style={{color:"green"}}></i><span> View</span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <i class="fa-solid fa-pen-to-square" style={{color:"blue"}}></i><span> Edit</span>
                        </Dropdown.Item>
                        <Dropdown.Item>
                        <i class="fa-solid fa-trash" style={{color:"red"}}></i><span>Delete</span>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                      
                    </Dropdown>
                    </td>

                  </tr>
                </tbody>
              </Table>

            </Card>
          </div>
        </Row>
      </div>
    </>
  )
}

export default Tables
