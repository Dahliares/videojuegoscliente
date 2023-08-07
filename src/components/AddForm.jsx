import React from 'react'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddForm.css';

export function AddForm() {

  const form = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();

    let data = new FormData(form.current);


    fetch('http://localhost:5555/add', {
      method: 'POST',
      body: data,

    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        alert("Juego guardado correctamente");
        navigate('/');
      })
      .catch(err => console.log(err))

  }


  return (
    <div className="form-container">

      <form id="Addform" ref={form} encType="multipart/form-data" >
        <fieldset className="form">
          <legend>Datos del nuevo juego</legend>

          <label htmlFor="nombre">Nombre:</label>
          <input type="text" name="nombre" id="nombre" required />

          <label htmlFor="saga">Saga:</label>
          <input type="text" name="saga" id="saga" />

          <label htmlFor="saga">Consola:</label>
          <select name="consola" id="consola" defaultValue="">
            <option value="">Elige consola</option>
            <option value="PS1">PlayStation 1</option>
            <option value="PS2">PlayStation 2</option>
            <option value="PS3">PlayStation 3</option>
            <option value="PS4">PlayStation 4</option>
            <option value="SWITCH">switch</option>
            <option value="WII">Wii</option>
          </select>

          <label htmlFor="tipo">Tipo:</label>
          <input type="text" name="tipo" id="tipo" />

          <label htmlFor="formato">Formato:</label>
          <input type="text" name="formato" id="formato" />

          <label htmlFor="idioma">Idioma:</label>
          <input type="text" name="idioma" id="idioma" />

          <label htmlFor="estado">Estado:</label>
          <input type="text" name="estado" id="estado" />

          <label htmlFor="compania">Compañía:</label>
          <input type="text" name="compania" id="compania" />

          <label htmlFor="comentarios">Comentarios:</label>
          <textarea name="comentarios" id="comentarios" rows="4"/>

          <label htmlFor="file">Carátula:</label>
          <input type='file' name='file' id='file' />

          <input className='btn' type="submit" onClick={handleSubmit} id="button" value="Añadir juego" />

        </fieldset>
      </form>
    </div>
  )
}

