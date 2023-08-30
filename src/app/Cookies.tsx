import * as React from 'react';
import { cookies } from 'next/headers';

interface Props {
    cookieStore: ReturnType<typeof cookies>
}

export const Cookies = ({cookieStore}: Props)=> {
    const cookies = cookieStore.getAll()
    if (cookies.length == 0) {
        return <div>no cookies...</div>
    }
    return cookies.map((c, i) => <h4 key={`cookie:${i}`}>{c.name}: {c.value}</h4>)
}