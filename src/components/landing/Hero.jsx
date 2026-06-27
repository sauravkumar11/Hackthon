import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  Chip
} from "@mui/material";

import {
  ArrowForward,
  HealthAndSafety,

} from "@mui/icons-material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import FamilyImage from "../../assets/images/welcome1.jpg";

export default function Hero() {
  const navigate = useNavigate();

  return (
    
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right,#ffffff,#eef6ff)",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* <Box
sx={{
position:"absolute",
width:350,
height:350,
background:"#2563EB20",
filter:"blur(70px)",
borderRadius:"50%",
right:-100,
top:-120
}}
/> */}

      <Container maxWidth="xl">

        <Grid container spacing={6} alignItems="center">

          {/* LEFT SIDE */}

          <Grid size={{ xs: 12, md: 6 }}>

            <motion.div
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: .8 }}
            >

              <Chip
                icon={<HealthAndSafety />}
                label="AI Powered Healthcare Platform"
                sx={{
                  mb: 3,
                  borderRadius: 5,
                  px: 1
                }}
              />

              <Typography
                variant="h2"
                fontWeight="bold"
                lineHeight={1.2}
              >
                Your Health.
                <br />

                <Box
                  component="span"
                  color="primary.main"
                >
                  Connected.
                </Box>

                <br />

                Smarter.
              </Typography>

              <Typography
                sx={{
                  mt: 3,
                  color: "#555",
                  fontSize: 18,
                  lineHeight: 1.8
                }}
              >
                Store your medical records securely,
                analyze symptoms using AI,
                connect with hospitals,
                and manage your family's health
                in one platform.
              </Typography>

              <Stack
                direction="row"
                spacing={2}
                sx={{ mt: 4 }}
              >

                <Button
                  variant="contained"
                  size="large"
                 onClick={() => navigate("/login")}

                  endIcon={<ArrowForward />}
                 sx={{
borderRadius:20,
px:5,
py:1.7,
fontWeight:700,
textTransform:"none",
fontSize:16,
boxShadow:"0 20px 35px rgba(37,99,235,.30)",

"&:hover":{
transform:"translateY(-4px)"
}
}}
                >
                  Let's Start
                </Button>

                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<PlayCircleIcon />}
                  sx={{
                    borderRadius: 8,
                    px: 4,
                    py: 1.5
                  }}
                >
                  Watch Demo
                </Button>

              </Stack>

              <Grid
                container
                spacing={3}
                sx={{ mt: 5 }}
              >

                <Grid size={{ xs: 6, md: 3 }}>
                  <Typography variant="h5" fontWeight="bold">
                    10K+
                  </Typography>

                  <Typography color="text.secondary">
                    Health Records
                  </Typography>
                </Grid>

                <Grid size={{ xs: 6, md: 3 }}>
                  <Typography variant="h5" fontWeight="bold">
                    98%
                  </Typography>

                  <Typography color="text.secondary">
                    Security
                  </Typography>
                </Grid>

                <Grid size={{ xs: 6, md: 3 }}>
                  <Typography variant="h5" fontWeight="bold">
                    24/7
                  </Typography>

                  <Typography color="text.secondary">
                    Support
                  </Typography>
                </Grid>

                <Grid size={{ xs: 6, md: 3 }}>
                  <Typography variant="h5" fontWeight="bold">
                    15+
                  </Typography>

                  <Typography color="text.secondary">
                    Health Parameters
                  </Typography>
                </Grid>

              </Grid>

            </motion.div>

          </Grid>

          {/* RIGHT SIDE */}

<Grid
  size={{ xs: 12, md: 6 }}
  sx={{
    position: "relative",
  }}
><Box
  sx={{
    position: "absolute",
    top: 80,
    left: 20,
    bgcolor: "#fff",
    p: 2,
    borderRadius: 4,
    boxShadow: "0 15px 40px rgba(0,0,0,.08)",
    zIndex: 5,
  }}
>
  <Typography fontWeight={700}>
    ❤️ Heart Rate
  </Typography>

  <Typography color="text.secondary">
    72 BPM
  </Typography>
</Box>

<Box
  sx={{
    position: "absolute",
    bottom: 70,
    right: 10,
    bgcolor: "#fff",
    p: 2,
    borderRadius: 4,
    boxShadow: "0 15px 40px rgba(0,0,0,.08)",
    zIndex: 5,
  }}
>
  <Typography fontWeight={700}>
    🩺 AI Health Score
  </Typography>

  <Typography color="primary">
    Excellent
  </Typography>
</Box>
            <motion.img
              src={FamilyImage}
              alt="family"
             style={{
width: "100%",
maxWidth: 620,
display: "block",
margin: "auto",
filter: "drop-shadow(0 40px 60px rgba(37,99,235,.15))",
}}
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: .8 }}
            />

          </Grid>

        </Grid>

      </Container>
    </Box>
  );
}


