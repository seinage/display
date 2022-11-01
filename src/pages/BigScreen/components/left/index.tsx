import { FC } from "react";
import LeftFirst from "@/pages/BigScreen/components/left/leftFirst";
import LeftSecond from "@/pages/BigScreen/components/left/leftSecond";
import LeftThird from "@/pages/BigScreen/components/left/leftThird";

const height={
  first:'5.4rem',
  second:'20rem',
  third:'13.2rem'
}

const Left: FC = (props) => {
  return (
    <>
      <LeftFirst height={height.first}></LeftFirst>
      <LeftSecond height={height.second}></LeftSecond>
      <LeftThird height={height.third}></LeftThird>
    </>
  );
};

export default Left;
