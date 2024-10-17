import React from "react";
import { Typography } from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";
import ProductPerformance from "../dashboard/components/ProductPerformance";
import ListPatients from "../dashboard/components/ListPatients";

const HomePage = () => {
  return (
    <PageContainer title="Home" description="page d'accueil">
      {/* <DashboardCard title="Home">
        <Typography>WELCOME DR. Anne </Typography>
      </DashboardCard> */}

      <ListPatients />
    </PageContainer>
  );
};

export default HomePage;
