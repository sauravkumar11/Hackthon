import { Box, Typography } from "@mui/material";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Splash.css";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/welcome");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <Box className="splash-container">

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: .8,
          type: "spring"
        }}
      >

        <FavoriteRoundedIcon
          sx={{
            fontSize: 90,
            color: "#2563EB"
          }}
        />

      </motion.div>

      <motion.h1
        initial={{ opacity:0,y:20 }}
        animate={{ opacity:1,y:0 }}
        transition={{ delay:.3 }}
      >
        DigiHealth AI
      </motion.h1>

      <Typography
        sx={{
          mt:1,
          color:"#64748B"
        }}
      >
        Smart Health. Smarter Care.
      </Typography>

      <div className="loader"/>

    </Box>
  );
}