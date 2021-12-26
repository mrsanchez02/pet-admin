import React, { Fragment, useState } from 'react'
import { v4 } from 'uuid';
import propTypes from 'prop-types';

const Formulario = ({crearCita}) => {

    // Hooks
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error, actualizarError] = useState(false);

    // Extraer los valores.
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    //Funcion que se ejecuta cada vez que el usuario escribe en un input.
    const handleChange = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value,
        })
    }

    // Cuando el usuario preciona agregar cita:
    const submitCita = e => {
        e.preventDefault();
        
        //* validar.
        if(
            mascota.trim()==='' || 
            propietario.trim()==='' || 
            fecha.trim()==='' || 
            hora.trim()==='' || 
            sintomas.trim()===''
            ){
                actualizarError(true);
                return;
        }
        //* Eliminar mensaje previo (si existe.)
        actualizarError(false)
        
        //* Asignar ID.
        cita.id = v4();

        //* Crear cita.
        crearCita(cita);
        //* Reiniciar el form.
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
        })

    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>
            {
                error ? <p className='alerta-error'>Todos los campos son obligatorios</p> : null
            }
            <form
                onSubmit={submitCita}
            >
                <label>Nombre mascota</label>
                <input
                    type='text'
                    name='mascota'
                    className='u-full-width'
                    placeholder='Firulais..'
                    onChange={handleChange}
                    value={mascota}
                />
                <label>Nombre del dueño</label>
                <input
                    type='text'
                    name='propietario'
                    className='u-full-width'
                    placeholder='John Doe..'
                    onChange={handleChange}
                    value={propietario}
                />
                <label>Fecha alta</label>
                <input
                    type='date'
                    name='fecha'
                    className='u-full-width'
                    onChange={handleChange}
                    value={fecha}
                />
                <label>Hora</label>
                <input
                    type='time'
                    name='hora'
                    className='u-full-width'
                    onChange={handleChange}
                    value={hora}
                />
                <label>Sintomatología</label>
                <textarea
                    type='text'
                    name='sintomas'
                    className='u-full-width'
                    placeholder='Descripcion sintomas.'
                    onChange={handleChange}
                    value={sintomas}
                />
                <button
                    type='submit'
                    className='u-full-width button-primary'
                >Agregar Cita</button>
            </form>
        </Fragment>
    )
}

Formulario.propTypes = {
    crearCita: propTypes.func.isRequired
}

export default Formulario