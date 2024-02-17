import React, { useState, useEffect } from "react";

const Resultados = ({ clima, noEncontro }) => {
    const [gradosCelcius, setGradosCelcius] = useState("");

    useEffect(() => {
        if (clima && clima.main && clima.main.temp) {
            const celcius = convertirAKelvinACelsius(clima.main.temp);
            setGradosCelcius(celcius + ' °C');
        }
    }, [clima]);

    const convertirAKelvinACelsius = (kelvin) => {
        return (kelvin - 273.15).toFixed(2);
    };

    const mostrarComponente = noEncontro ? (
        <div className="my-3 Formulario py-3 px-2">
            <p className="text-center mb-0">No se encontraron resultados</p>
        </div>
    ) : (
        <div className="my-3 Formulario py-3 px-2">
            <h3>{clima.name}</h3>
            <p className="text-end">Temperatura: {gradosCelcius}</p>
            {clima.weather && clima.weather.length > 0 && (
                <p className="text-end">Descripción del clima: {clima.weather[0].description}</p>
            )}
        </div>
    );

    return mostrarComponente;
};

export default Resultados;