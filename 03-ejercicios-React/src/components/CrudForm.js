import React, { useState, useEffect } from "react";

const initialForm = {
    name: "",
    constellation: "",
    id: null,
};

const CrudForm = () => {
    const [form, setForm] = useState(initialForm);
    const handleChange = (e) => { };
    const handleSubmit = (e) => { };
    const handleReset = (e) => { };

    return (
        <div>
            <h3>Agregar</h3>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    type="text"
                    name="name"
                    placeholder="nombre"
                    value={form.name}
                />
                <input
                    onChange={handleChange}
                    type="text"
                    name="constellation"
                    placeholder="constelacion"
                    value={form.constallation}
                />
                <input type="submit" value="Enviar" />
                <input onClick={handleReset} type="reset" value="limpiar" />
            </form>
        </div>
    );
};

export default CrudForm;

