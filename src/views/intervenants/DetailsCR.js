import React from "react";
import { Typography } from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";

const DetailsCR = () => {
  return (
    <PageContainer
      title="Details Compte Rendu"
      description="description du compre rendu"
    >
      <DashboardCard title="Compte Rendu Acquis N°34">
        <Typography>This is a sample page</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default DetailsCR;
