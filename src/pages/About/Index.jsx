import React,{useLayoutEffect} from 'react'
import {  useNavigate,Outlet } from 'react-router-dom'

export default function About() {
    const navigate=useNavigate();

    useLayoutEffect(()=>{
        navigate("/about/history", { replace: true });
    },[])
  return (

    <>
    <Outlet/>
    </>
  )
}
