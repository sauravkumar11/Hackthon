import { Box, Grid } from "@mui/material";
import LoginBanner from "../../components/auth/LoginBanner";
import LoginForm from "../../components/auth/LoginForm";

export default function Login() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#F8FAFC",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid container sx={{ width: "100%" }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <LoginBanner />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <LoginForm />
        </Grid>
      </Grid>
    </Box>
  );
}