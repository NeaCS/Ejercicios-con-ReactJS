import React from "react";
import { useState } from 'react';
import data from "../helpers/data.json"
import CrudForm from "./CrudForm.js";
import CrudTable from "./CrudTable"


const CrudApp = () => {
    const [bd, setBd] = useState(data.initaldb)

  
    return (
    <div>
        <h2>CRUD APP</h2>
        <CrudForm/>
        <CrudTable data={bd}/>
    </div>
        
    
  );
};

export default CrudApp;
