import LogoImage from "../../assets/images/Inter-orange.png";
import { LogoContainer } from "./styles";

interface LogoProps {
  width: number;
  height: number;
  alt: string;
}
export const Logo = ({ alt, height, width }: LogoProps) => {
  return (
    <LogoContainer alt={alt} height={height} src={LogoImage} width={width} />
  );
};
