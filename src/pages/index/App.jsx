
import React, { useState, useHooks } from 'react';

let App = () => {

    let [name, setName] = useState("robin");
    
    return (
        <div>this is {name} page</div>
    )
}

export default App;