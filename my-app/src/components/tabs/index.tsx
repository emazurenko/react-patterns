import {memo} from "react";
import {withToggleButton} from "../withToggleButton";
import {ButtonWithLabel} from "../buttonWithLabel";
import "./style.scss";

interface TabsType {
  onChange: (tab: boolean) => void;
}

export const Tabs = memo<TabsType>(({onChange}) => {
  const Toggle = withToggleButton
    ({title: 'Set mode:', textOn: 'users', textOff: 'form', onToggle: onChange})
    (ButtonWithLabel);

  return (
      <div className="tabs">
        <Toggle/>
      </div>
  );
});