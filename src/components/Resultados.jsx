const Resultados = ({ clima, noEncontro }) => {
    const mostrarComponente = noEncontro ? (<p className="text-center mb-0">No se encontraron resultados</p>) : (<>
        <h3>{clima.name}</h3>
        <p></p></>
        )
    return (
        <div className="my-3 Formulario py-3 px-2">
            {mostrarComponente}
        </div>
    );
};

export default Resultados;