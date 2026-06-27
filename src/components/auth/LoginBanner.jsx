import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

import Banner from "../../assets/images/welcome1.jpg";


export default function LoginBanner() {
  return (
    <Box
      sx={{
        height: "100vh",
        background: "linear-gradient(135deg,#2563EB,#3B82F6)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 6,
      }}
    >
      <motion.img
        src={Banner}
        alt="Healthcare"
        style={{
          width: "80%",
          maxWidth: 500,
        }}
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      />

      <Typography
        variant="h3"
        fontWeight={700}
        mt={4}
      >
        DigiHealth AI
      </Typography>

      <Typography
        mt={2}
        textAlign="center"
        sx={{ opacity: .9 }}
      >
        Securely manage your digital health records,
        medication, AI symptom analysis and hospital access.
      </Typography>
    </Box>
  );
}