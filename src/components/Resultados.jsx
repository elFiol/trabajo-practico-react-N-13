const Resultados = ({ clima, noEncontro }) => {
    const mostrarComponente = noEncontro ? (
        <div className="my-3 Formulario py-3 px-2">
            <p className="text-center mb-0">No se encontraron resultados</p>
        </div>
    ) : (
        <div className="my-3 Formulario py-3 px-2">
            <h3>{clima.name}</h3>
            <p></p>
        </div>
    );

    return mostrarComponente;
};

export default Resultados;