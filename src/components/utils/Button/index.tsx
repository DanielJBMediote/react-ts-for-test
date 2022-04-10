import { useBeforeMount } from "hooks/useMountEffect";
import { IconType } from "react-icons";

export enum ECustomColor {
  SUCCESS = "bg-green-400",
  DANGER = "bg-red-400",
  WARING = "bg-yellow-400",
  INFO = "bg-blue-400",
}

export type EButtonColorGradient = {
  from: string;
  to: string;
};

interface IButtonProps {
  label: string;
  size?: "small" | "medium" | "large";
  icon?: {
    data: IconType;
    position: "left" | "right" | "top" | "bottom";
  };
  customColor?: EButtonColorGradient | ECustomColor;
}

const Button: React.FC<IButtonProps> = ({
  icon,
  label,
  size,
  customColor,
  ...rest
}) => {
  useBeforeMount(() => {
    size = "small";
    handleUpdateIconPosition();
  });

  function handleUpdateIconPosition() {}

  function render(): JSX.Element {
    return <></>;
  }

  return <button {...rest}>{label}</button>;
};

export default Button;
