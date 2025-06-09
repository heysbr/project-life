import React from 'react'

import loginLady from "../../components/images/login-lady.svg";
import Image from 'next/image';
import OtpPage from '@/Pages/OtpPage/OtpPage';
import Container from '@/components/Container/Container';

export default function page() {
  return (
    <Container >
      <OtpPage/>
    </Container>
  )
}
