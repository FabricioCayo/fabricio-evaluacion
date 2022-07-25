import React, {useEffect, useState} from "react"

import informatica from '../assets/images/ingeniería-informática.jpeg'
import medicina from '../assets/images/Medicina.jpeg'
import comercial from '../assets/images/comercial.jpeg'

import FragmentsCarta from "./Fragments/FragmentsCarta.js"
import frag from "./Fragments/Fragments.css"
 
const Carta = () => {
    return (
        <>
        <div className="container" id={frag}>
            <div className="row">
                <center>
                <div className="col-12">
                    <h1>Inicio</h1>
                </div>
                </center>
            </div>
        
        
            <div className="row">
                <div className="col-4">
                    <div className="card" style={{width: "18rem" }}>
                        <img src={informatica} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h2 className="card-title">Ingeniería informatica</h2>
                                <h5 className="card-title">Duracion: 4 Años</h5>
                                <p className="card-text">La ingeniería informática es la rama de la ingeniería que aplica los fundamentos de 
                                la ciencia de la computación, la electrónica y la ingeniería de software, para el desarrollo de soluciones 
                                integrales de cómputo y comunicaciones, 
                                capaces de procesar información de manera automática.</p>

                            </div>
                    </div>
                </div>
            
            
                <div className="col-4">
                    <FragmentsCarta
                        imagen={comercial}
                        titulo="Ingeniería comercial"
                        duracion="Duracion: 4 Años"
                        descripcion="La Ingeniería Comercial es una profesión universitaria orientada hacia la aplicación de un conjunto de 
                        competencias (conocimientos, habilidades y actitudes) que se generan a partir del estudio de las ciencias de la 
                        administración y de la economía"
                    />
                </div>
            
            
                <div className="col-4">
                    <FragmentsCarta
                        imagen={medicina}
                        titulo="Facultad de medicina"
                        duracion="Duracion: 6 Años"
                        descripcion="La carrera de medicina es una licenciatura mejor conocida como medicina general, desarrollando a un 
                        profesionista capaz de realizar diagnósticos, tratar, cuidar y atender clínicamente al ser humano"
                    />
                </div>
            </div>
        </div>
        </>
    )
}

export default Carta;