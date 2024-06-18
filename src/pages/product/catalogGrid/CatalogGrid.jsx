import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import CategoryCard from "../../../components/molecules/CategoryCard";
import CatalogCard from "../../../components/molecules/CatalogCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function CatalogList() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid>
          <CatalogCard name={"Dining Table"} price={"$ 5692"} />
        </Grid>
        <Grid>
          <CatalogCard name={"Dining Table"} price={"$ 5692"} />
        </Grid>
        <Grid>
          <CatalogCard name={"Dining Table"} price={"$ 5692"} />
        </Grid>
        <Grid>
          <CatalogCard name={"Dining Table"} price={"$ 5692"} />
        </Grid>
        <Grid>
          <CatalogCard name={"Dining Table"} price={"$ 5692"} />
        </Grid>
        <Grid>
          <CatalogCard name={"Dining Table"} price={"$ 5692"} />
        </Grid>
        <Grid>
          <CatalogCard name={"Dining Table"} price={"$ 5692"} />
        </Grid>
        <Grid>
          <CatalogCard name={"Dining Table"} price={"$ 5692"} />
        </Grid>
        <Grid>
          <CatalogCard name={"Dining Table"} price={"$ 5692"} />
        </Grid>
        <Grid>
          <CatalogCard name={"Dining Table"} price={"$ 5692"} />
        </Grid>
        <Grid>
          <CatalogCard name={"Dining Table"} price={"$ 5692"} />
        </Grid>
      </Grid>
    </Box>
  );
}
