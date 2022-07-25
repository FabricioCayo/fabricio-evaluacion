import React, {useEffect, useState} from "react"


const FragmentsCarta = ({imagen, titulo, duracion, descripcion}) => {
    return(
        <>
        <div>
            <div className="row">
                <div className="col-4">
                    <div className="card" style={{width: "18rem"}}>
                        <img src={imagen} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h2 className="card-title">{titulo}</h2>
                                <h5 className="card-title">{duracion}</h5>
                                <p className="card-text">{descripcion}</p>

                            </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default FragmentsCarta