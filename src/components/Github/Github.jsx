import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData()
    
    // const [data, setData] = useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data =>{
    //         setData(data)
    //     })
    // },[])

    return (
        <div className='bg-gray-600 text-center text-white mx-5 text-3xl p-3'>Github follower :{data.followers}
        <img src={data.avatar_url} width={300}></img></div>
    )
}

export default Github

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/ajaytanwar56')
    return response.json() 
}
