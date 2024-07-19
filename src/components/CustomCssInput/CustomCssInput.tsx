import { styled, TextField } from "@mui/material";

interface ICustomCssInputProps {
  label: string;
}

const CustomCssInput = ({ label }: ICustomCssInputProps) => {
  const CustomCssInput = styled(TextField)({
    width: "70%",
    "& label.Mui-focused": {
      color: "#68C5DB",
    },
    "& label": { color: "#0197F6" },
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: "#0197F6",
    },
    "& .MuiFilledInput-underline:before": {
      borderBottomColor: "#0197F6",
    },
    "& .MuiFilledInput-root": {
      // backgroundColor: "#448FA3", // Background color for filled variant
      "&:hover": {
        // backgroundColor: "#0197F6",
      },
      "& .Mui-focused": {
        color: "#0197F6",
      },
    },
    "& .MuiInputBase-input": {
      color: "#fff", // Text color for better contrast with the background
    },
  });
  return <CustomCssInput label={label} variant="filled" />;
};

export default CustomCssInput;
