import React, {FC, useState} from "react";
import {ButtonProps} from "../button";

interface WithToggleButtonProps {
  initState?: boolean;
  title?: string;
  textOn: string;
  textOff: string;
  onToggle: (toggle: boolean) => void;
}

export const withToggleButton =
    ({title, initState, textOn, textOff, onToggle}: WithToggleButtonProps) =>
        (ButtonComponent: FC<ButtonProps>) =>
            ({...props}: ButtonProps) => {
              const [isOnState, setState] = useState<boolean>(initState !== undefined ? initState : true);
              const handleToggle = () => {
                const newState = !isOnState
                setState(newState);
                onToggle(newState);
              };

              return (
                  <ButtonComponent {...props} title={title} onClick={handleToggle}>
                    {isOnState ? textOn : textOff}
                  </ButtonComponent>);
            }
