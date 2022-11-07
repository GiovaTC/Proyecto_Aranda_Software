
import Aside from './components/Aside'
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {

  const baseUrl="https://localhost:44389/api/Catalogo";
  const [data, setData]=useState([]);
  const [modalEditar,setModalEditar]=useState(false);
  const [modalInsertar,setModalInsertar]=useState(false);
  const [modalEliminar,setModalEliminar]=useState(false);
  const [gestorSeleccionado, setGestorSeleccionado]=useState({
    id: '',
    nombre: '',
    descripcion: '',
    categoria:'',
    imagenProducto:''
  })

  const handleChange=e=>{
    const {name, value}=e.target;
    setGestorSeleccionado({
      ...gestorSeleccionado,
      [name]: value
    });
    console.log(gestorSeleccionado);
  }

  const abrirCerrarModalInsertar=()=>{
    setModalInsertar(!modalInsertar);
  }
  
  const abrirCerrarModalEditar=()=>{
    setModalEditar(!modalEditar);
  }

  const abrirCerrarModalEliminar=()=>{
    setModalEliminar(!modalEliminar);
  }

  const peticionesGet=async()=>{
    await axios.get(baseUrl)
    .then(response=>{
      setData(response.data);      
    }).catch(error=>{
      console.log(error);
    })
  }

  const peticionesPost=async()=>{
    delete gestorSeleccionado.id;
    await axios.post(baseUrl, gestorSeleccionado)
    .then(response=>{
      setData(data.concat(response.data)); 
      abrirCerrarModalInsertar();     
    }).catch(error=>{
      console.log(error);
    })
  }

  const peticionesDelete=async()=>{
    await axios.delete(baseUrl+"/"+ gestorSeleccionado.Id)
    .then(response=>{
      setData(data.filter(catalogo=>catalogo.Id !== response.data));
      abrirCerrarModalEliminar();     
    }).catch(error=>{
      console.log(error);
    })
  }

  const peticionesPut=async()=>{
    await axios.put(baseUrl+"/"+gestorSeleccionado.id, gestorSeleccionado)
    .then(response=>{
      var respuesta=response.data;
      var dataAuxiliar=data;
      dataAuxiliar.map(catalogo=>{
        if(catalogo.Id === gestorSeleccionado.id){
          catalogo.Nombre=respuesta.nombre;
          catalogo.Descripcion=respuesta.descripcion;
          catalogo.Categoria=respuesta.categoria;
          catalogo.ImagenProducto=respuesta.imagenProducto;
        }
      })
      abrirCerrarModalEditar();     
    }).catch(error=>{
      console.log(error);
    })
  }
  
  const seleccionarGestor=(catalogo, caso)=>{
    setGestorSeleccionado(catalogo);
    (caso==="Editar")?
    abrirCerrarModalEditar(): abrirCerrarModalEliminar();
  }

  useEffect(()=>{
    peticionesGet();
  },[])
  

  return (
    <div>
      <Header />
      <Aside />
      
      <div className="App">
      <br></br><br></br>   
       <button onClick={()=>abrirCerrarModalInsertar()} className="btn btn-dark">Ingresar Nuevo producto</button>
       <br /><br />
       <table className="table  table-striped" width={" 50%;"} height={50}>
         <thead>
           <tr className='table-light'>
             <th>ID</th>
             <th>Nombre</th>
             <th>Descripcion</th>
             <th>Categoria</th>
             <th>Imagen Producto</th>
             <th>Acciones</th>
           </tr>
         </thead>
        <tbody>
        {data.map(catalogo => (
               <tr className='table-light' key={catalogo.Id}>
                 <td>{catalogo.Id}</td>
                 <td>{catalogo.Nombre}</td>
                 <td>{catalogo.Descripcion}</td>
                 <td>{catalogo.Categoria}</td>
                 <td>{catalogo.ImagenProducto}</td>
                 <td>
                   <button className='btn btn-primary' onClick={()=>seleccionarGestor(catalogo, "Editar")}>Editar</button> {" "}
                   <button className='btn btn-danger' onClick={()=>seleccionarGestor(catalogo, "Eliminar")}>Eliminar</button> 
                 </td>
                 </tr>
     ))}   
        </tbody>
       </table>    
   
       <Modal isOpen={modalInsertar}>
         <ModalHeader>Ingresar - Gestor de Productos Base de Datos</ModalHeader>
         <ModalBody>
           <div className='form-group'>
             <label>Nombre: </label>
             <br />
             <input type="text" className='form-control' name="nombre" onChange={handleChange}/>
             <br />
             <label>Descripción:</label>
             <br />
             <input type="text" className='form-control' name="descripcion" onChange={handleChange}/>
             <br />
             <label>Categoria</label>
             <br />
             <input type="text" className='form-control' name="categoria" onChange={handleChange}/>
             <br />
           </div>
         </ModalBody>
         <ModalFooter>
         <button className='btn btn-primary' onClick={()=>peticionesPost()}>Insertar</button>
         <button className='btn btn-danger' onClick={()=>abrirCerrarModalInsertar()}>Cancelar</button>
         </ModalFooter>
       </Modal>
   
       <Modal isOpen={modalEditar}>
         <ModalHeader>Editar - Gestor de Productos Base de Datos</ModalHeader>
         <ModalBody>
           <div className='form-group'>
             <label>Id: </label>
             <br />
             <input type="text" className='form-control' readOnly value={gestorSeleccionado && gestorSeleccionado.Id}/>
             <br />
             <label>Nombre:</label>
             <br />
             <input type="text" className='form-control' name="nombre" onChange={handleChange} value={gestorSeleccionado && gestorSeleccionado.Nombre} />
             <br />
             <label>Descripción:</label>
             <br />
             <input type="text" className='form-control' name="descripcion" onChange={handleChange} value={gestorSeleccionado && gestorSeleccionado.Descripcion} />
             <br />
             <label>Categoria</label>
             <br />
             <input type="text" className='form-control' name="categoria" onChange={handleChange} value={gestorSeleccionado && gestorSeleccionado.Categoria}/>
             <br />
             
           
           </div>
         </ModalBody>
         <ModalFooter>
         <button className='btn btn-primary' onClick={() => peticionesPut()}>Editar</button> {"  "}
         <button className='btn btn-danger' onClick={( )=> abrirCerrarModalEditar()}>Cancelar</button>
         </ModalFooter>
       </Modal>
   
       <Modal isOpen={modalEliminar}>
         <ModalBody>
           ¿Estas seguro que deseas Eliminar el registro value={gestorSeleccionado && gestorSeleccionado.Nombre}?
         </ModalBody>
         <ModalFooter>
         <button className='btn btn-danger' onClick={()=>peticionesDelete()}>
             Si
           </button>
           <button 
           className='btn btn-secondary'
           onClick={()=>abrirCerrarModalEliminar()}
           >
             No
           </button>
         </ModalFooter>
       </Modal>
     </div>
    </div>
  )
}
