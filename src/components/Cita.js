import React from 'react'
import propTypes from 'prop-types'

const Cita = ({cita,eliminarCita}) => (
    <div className='cita'>
        <p>Mascota:<span>{cita.mascota}</span></p>
        <p>Dueño: <span>{cita.propietario}</span></p>
        <p>Fecha:<span>{cita.fecha}</span></p>
        <p>Hora:<span>{cita.hora}</span></p>
        <p>Sintomas:<span>{cita.sintomas}</span></p>
        <button
        className='button eliminar u-full-width'
        onClick={() => eliminarCita(cita.id)}
        >Eliminar &times;</button>
    </div>
)

Cita.propTypes = {
    cita: propTypes.object.isRequired,
    eliminarCita: propTypes.func.isRequired
}

export default Cita
