import { useEffect } from "react";
import { useStore } from '../components/state'
// import Router from 'next/router';    Router.push('/');

export default function Get() {

    const setName = useStore(state => state.setName)
    const setCall = useStore(state => state.setCall)

    useEffect(
        async () => {
            setCall(false)
            const res = await fetch('/api/get_villa', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (res.status === 500) {
                console.log(res.text())
            }

            if (res.status === 200) {
                console.log("status 200")
                setName((await res.json()))
            }
        }, []
    )

    return <></>
}