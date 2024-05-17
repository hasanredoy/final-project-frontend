/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet";

const CustomHelmet = ({title}) => {
  return (
    <Helmet>
    <meta charSet="utf-8" />
    <title>BiStro BoSs | {title}</title>
  </Helmet>
  );
};

export default CustomHelmet;