import { memo} from "react";
import { UserProps } from "./types";
import { CardInfo } from "./parts/cardInfo";
import "./style.scss";

export const MemberCard = memo<UserProps>(({ name, ...props }) => {

  return (
    <div className="member-card">
      <p className="member-card__title">{name}</p>
      <CardInfo {...props}/>
    </div>
  );
});
