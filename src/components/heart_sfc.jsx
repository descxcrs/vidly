import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faHeartRegular, faHeartSolid);

const Heart = (props) => {
  const { liked, onClick } = props;

  let iconStyle = "far";
  if (!liked) iconStyle = "fas";

  return (
    <FontAwesomeIcon
      icon={[iconStyle, "heart"]}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    />
  );
};

export default Heart;
