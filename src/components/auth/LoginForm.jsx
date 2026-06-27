import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        maxWidth: 430,
        mx: "auto",
        px: 4,
        py: 8,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Typography variant="h4" fontWeight={700}>
        Welcome Back 👋
      </Typography>

      <Typography color="text.secondary" mt={1}>
        Sign in to continue
      </Typography>

      <Stack spacing={3} mt={5}>
        <TextField
          fullWidth
          label="Mobile Number"
          placeholder="+91 9876543210"
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
        />

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
          />

          <Link
            underline="none"
            sx={{ cursor: "pointer" }}
          >
            Forgot Password?
          </Link>
        </Box>

        <Button
          size="large"
          variant="contained"
          onClick={() => navigate("/dashboard")}
          sx={{
            py: 1.5,
            borderRadius: 4,
          }}
        >
          Login
        </Button>

        <Button
          variant="outlined"
          size="large"
          sx={{
            py: 1.5,
            borderRadius: 4,
          }}
        >
          Continue with OTP
        </Button>

        <Typography textAlign="center">
          Don't have an account?{" "}
          <Link
            underline="none"
            sx={{
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Register
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
}