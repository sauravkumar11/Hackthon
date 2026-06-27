import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";

import { FaHeartbeat } from "react-icons/fa";

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(12px)",
        color: "#000",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* Logo */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexGrow: 1,
            }}
          >
            <FaHeartbeat
              size={30}
              color="#2563EB"
            />

            <Typography
              variant="h5"
              fontWeight={700}
              color="primary"
            >
              DigiHealth AI
            </Typography>
          </Box>

          {/* Menu */}

          <Button color="inherit">Home</Button>

          <Button color="inherit">Features</Button>

          <Button color="inherit">About</Button>

          <Button color="inherit">Contact</Button>

          <Button
            variant="contained"
            sx={{
              ml: 2,
              borderRadius: 3,
              px: 3,
            }}
          >
            Login
          </Button>

        </Toolbar>
      </Container>
    </AppBar>
  );
}