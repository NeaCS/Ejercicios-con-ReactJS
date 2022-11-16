import React from 'react'
import { CrudTableRow } from './CrudTableRow'

export default function CrudTable({data}) {
    return (
        <>
            <div>Tabla de datos</div>
            <table>
                <thead>
                    <tr key="">
                        <th>Nombre</th>
                        <th>Constelación</th>
                        {/* para los botones */}
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody> 
                     {data.length ===0 ? <tr><td colSpan="3">Sin datos</td></tr>: data.map(el => <CrudTableRow key={el.id} el={el}/>)}


                </tbody>
                    

            </table>
        </>
    )
}
