import React from 'react'
import {Link} from 'react-router-dom'

function StudentData({id, name, eng, maths, sci, ict, soc, bdt, rme, twi}) {
    return (
        <tr>
            <td>
            <Link to={`/ViewStudent/${id}`}>{name}</Link>
            </td>
            <td>{eng}</td>
            <td>{maths}</td>
            <td>{sci}</td>
            <td>{ict}</td>
            <td>{soc}</td>
            <td>{bdt}</td>
            <td>{rme}</td>
            <td>{twi}</td>
            
        </tr>
    )
}

export default StudentData
