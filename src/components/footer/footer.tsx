import React from "react";

import "./footer.scss";

interface IProps {
  store?: any;
}

const Footer: React.FC<IProps> = ({ store }) => {
  return (
    <div className="footerd">
      <p>footer</p>
    </div>
  );
};

export default Footer;
