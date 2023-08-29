"use client"

import * as React from 'react';

export const Counter = () => {
    const [count, setCount] = React.useState(0);

    return (<>
    <div>
    Count is <b>{count}</b>
    </div>
    <button onClick={()=>setCount((cur)=>cur+1)}>ADD</button>
    </>);
}
