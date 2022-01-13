import React, { useEffect, useState } from "react";
import "./CardSystemHome.scss";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";

const CardSystemHome = (props) => {
  var useTag = props.sistema.content.svg;
  const [locationactual, Setlocation] = useState("");
  let location = useLocation();
  useEffect(() => {
    Setlocation(location);
  }, [location]);

  if (props.sistema.content.visible !== "true") {
    return "";
  }

  if (props.sistema.content.clientId === "psgpa" && locationactual.pathname === "/") {
    return (
      <Link to={`/configuracoes`} className={`${props.size && props.size === "sm" ? "small-card" : ""} sistema-card2`}>
        <div className="sistema-card__img">
          <div className="iconsistemhome" dangerouslySetInnerHTML={{ __html: useTag }} />
        </div>
        <div className="sistema-card__descricao">{props.sistema.content.description}</div>
      </Link>
    );
  }

  if (!props.sistema.content.url) {
    return (
      <div className={`${props.size && props.size === "sm" ? "small-card" : ""} sistema-card2`}>
        <div className="sistema-card__img">
          <div className="iconsistemhome" dangerouslySetInnerHTML={{ __html: useTag }} />
        </div>
        <div className="sistema-card__descricao">{props.sistema.content.description}</div>
      </div>
    );
  }

  return (
    <a
      href={props.sistema.content.url}
      className={`${props.size && props.size === "sm" ? "small-card" : ""} sistema-card2`}
    >
      <div className="sistema-card__img">
        <div className="iconsistemhome" dangerouslySetInnerHTML={{ __html: useTag }} />
      </div>
      <div className="sistema-card2__descricao">{props.sistema.content.description}</div>
    </a>
  );
};

export default CardSystemHome;
