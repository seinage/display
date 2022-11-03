import React from 'react';
import RightFirst from "@/pages/BigScreen/components/Right/rightFirst";
import RightSecond from "@/pages/BigScreen/components/Right/rightSecond";
import RightThird from "@/pages/BigScreen/components/Right/rightThird";
import RightFourth from "@/pages/BigScreen/components/Right/rightFourth";

const height={
  first:'7.2rem',
  second:'10.3rem',
  third:'9.6rem',
  fourth:'11.8rem'
}
export default function Right() {
  return (
    <>
      <RightFirst height={height.first}></RightFirst>
      <RightSecond height={height.second}></RightSecond>
      <RightThird height={height.third}></RightThird>
      <RightFourth height={height.fourth}></RightFourth>
    </>
  );
}
