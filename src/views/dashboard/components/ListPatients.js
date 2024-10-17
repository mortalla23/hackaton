import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  Button,
} from "@mui/material";
import DashboardCard from "../../../components/shared/DashboardCard";

const patients = [
  {
    id: "1",
    photo: "",
    lastname: "Sunil Joshi",
    firstname: "cDown",
    birthdate: "10/10/2023",
    level: "Low",
    pbg: "primary.main",
    budget: "3.9",
  },
  {
    id: "2",
    photo: "",
    lastname: "Andrew McDownland",
    firstname: "Real Homes",
    birthdate: "15/10/2001",
    level: "Medium",
    pbg: "secondary.main",
    budget: "24.5",
  },
];

const ListPatients = () => {
  return (
    <DashboardCard title="Liste des patients">
      <Box sx={{ overflow: "auto", width: { xs: "280px", sm: "auto" } }}>
        <Table
          aria-label="simple table"
          sx={{
            whiteSpace: "nowrap",
            mt: 2,
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  #
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Nom
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Prenom
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" fontWeight={600}>
                  Niveau
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="subtitle2" fontWeight={600}>
                  Exercices
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography>Actions</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.firstname}>
                <TableCell>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    {patient.id}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography variant="subtitle2" fontWeight={600}>
                        {patient.lastname}
                      </Typography>
                      <Typography
                        color="textSecondary"
                        sx={{
                          fontSize: "13px",
                        }}
                      >
                        {patient.birthdate}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography
                    color="textSecondary"
                    variant="subtitle2"
                    fontWeight={400}
                  >
                    {patient.firstname}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    sx={{
                      px: "4px",
                      backgroundColor: patient.pbg,
                      color: "#fff",
                    }}
                    size="small"
                    label={patient.level}
                  ></Chip>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">{patient.budget}k</Typography>
                </TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="primary" href="/patient">
                    Consulter
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </DashboardCard>
  );
};

export default ListPatients;
