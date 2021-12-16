import { Header } from "../../components";

import { DashboardBackground, BodyContainer } from "./styles";

export const Dashboard = () => {
  return (
    <DashboardBackground>
      <Header />
      <BodyContainer></BodyContainer>
    </DashboardBackground>
  );
};
