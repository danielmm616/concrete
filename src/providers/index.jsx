import { RequisitionsProvider } from "./RequisitionsContext";

const Providers = ({ children }) => {
  return <RequisitionsProvider>{children}</RequisitionsProvider>;
};

export default Providers;
