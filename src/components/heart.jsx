import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faHeartRegular, faHeartSolid);

class Heart extends Component {
  render() {
    let iconStyle = "far";
    if (!this.props.liked) iconStyle = "fas";
    return (
      <FontAwesomeIcon
        icon={[iconStyle, "heart"]}
        onClick={this.props.onClick}
        style={{ cursor: "pointer" }}
      />
    );
  }
}

export default Heart;
