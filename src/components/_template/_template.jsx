import { useState } from 'react';

function _template( props ){
    const [hook, setHook] = useState( null );
        return(
        <div>
            <h2>_template</h2>
            <p>Hook: { hook }</p>
            <p>Props: { JSON.stringify( props ) }</p>
        </div>
    );
}

export default _template;