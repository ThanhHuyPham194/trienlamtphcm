import React,{useLayoutEffect} from 'react'
import {  useNavigate,Outlet } from 'react-router-dom'

export default function Library() {
    const navigate=useNavigate();

    useLayoutEffect(()=>{
        navigate("/library/gallery", { replace: true });
    },[])
  return (
    <>
    <Outlet/>
    </>
  )
}
