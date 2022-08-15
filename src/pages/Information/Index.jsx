import React, { useLayoutEffect } from 'react';
import { useNavigate,Outlet } from 'react-router-dom';
import Culture from '../Culture/Index';

export default function Information() {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    navigate("/information/culture", { replace: true });
  }, []);
  return (
    <Outlet/>
  );
}
