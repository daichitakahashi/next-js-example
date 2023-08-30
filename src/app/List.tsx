"use client"

import * as React from 'react';

const data = {list: []}

const useList = () => {
    if (data.list.length === 0) {
        throw fetch("http://localhost:3000/api/list").
            then((resp) => resp.json()).
            then((d) => {
                console.log(d)
                data.list = d.list as [];
            })
    }
    return data.list;
}

export const List = () => {
    const list = useList();

    return (
        <div>
            {list.map((v, i) => <p key={`list-${i}`}>{v}</p>)}
        </div>
    )
}
