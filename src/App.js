import './App.css';
import React from 'react';
import axios from 'axios';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [posts,setposts] = useState([]);
  const [photos, setphotos] = useState([]);
  
  const getPost = async () => 
  {
    try {
      
      let URL = "https://jsonplaceholder.typicode.com/posts";
      let response = await axios({ URL, method: 'GET', dataType : 'json', 
      ContentType: 'application/json'});
      setposts( response.data);
    } catch (error) {
      alert('No se porque no salen los posts :c')
    }
  }
  
  const getImg = async () => 
  {
    try {
      let URL1="https://jsonplaceholder.typicode.com/photos";
      let response = await axios({
      URL1, method: 'GET',dataType : 'json',
      ContentType: 'application/json'});
      setphotos(response.data);
    } catch (error) {
      alert('Y tampoco se porque no salen las imagenes :c')
    }
  } 

  return (
    <div className="container">
      <div className='col-md-12'>
      <br></br>
      <br></br>
      <br></br>
      <button className='btn btn-outline-success container' onClick={getPost}>Posts</button>
      <br></br>
      <br></br>
      <button className='btn btn-outline-danger container' onClick={getImg}>Imagenes</button>
    </div>
        <div className='col-md-12'>
          <table className='table text-center'>
              <thead>
                <tr>
                  <th colSpan={3} > </th>
                </tr>
                <tr>
                  <th scope='col'> ID</th>
                  <th scope='col'> Title</th>
                  <th scope='col'> Body</th>
                </tr>
              </thead>
              <tbody>
              {
                posts.map( (data)=> 
                <tr key={"a"+data.userId}>
                  <td key={"b"+data.userId}>{data.id}</td>
                  <td key={"c"+data.userId}>{data.title} </td>
                  <td key={"d"+data.userId}>{data.body}</td>
                </tr>
                )
              }
              </tbody>
          </table>
        </div>
      <div className='row'>
        <div className='col-md-12 header-photo text-center'>Imagenes</div>
      </div>
      <div className='row'>
      {
        photos.map( (data)=> 
        <div key={"1:"+data.albumId} className='col-md-3 bg-info'>
          <p key={"2:"+data.title}> Title: {data.title}</p>
          <img key={"3:"+data.url} src={data.url} 
          alt={"Album ID:"+data.albumId+"ID:"+data.id+"thumbnailUrl:"+data.thumbnailUrl}/>
        </div>
        )
      }
      </div>
    </div>
  );
}

export default App;