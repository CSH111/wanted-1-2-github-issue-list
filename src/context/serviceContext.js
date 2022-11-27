import { createContext, useContext } from "react";

const ServiceContext = createContext(null);

export const useService = () => useContext(ServiceContext);

export const Provider = ({ children, services }) => {
  // const getIssues = services.getIssues.bind(services);
  // const getIssueDetail = services.getIssueDetail.bind(services);
  // const getIssueComments = services.getIssueComments.bind(services);

  // const value = { getIssues, getIssueDetail, getIssueComments };
  return <ServiceContext.Provider value={services}>{children}</ServiceContext.Provider>;
};
