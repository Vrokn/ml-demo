import { Alert, IconButton, Snackbar } from "@mui/material";
import { createContext, useContext, useState, ReactNode } from "react";
import CloseIcon from '@mui/icons-material/Close';

interface SnackbarContextProps {
  isVisible: boolean;
  text: string;
  type: "success" | "info" | "warning" | "error";
  showSnackbar: (text: string, type: "success" | "info" | "warning" | "error") => void;
  clearSnackbar: () => void;
}

export const SnackbarContext = createContext<SnackbarContextProps | undefined>(undefined);

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};

export const SnackbarProvider: React.FC<{ children: ReactNode; }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState('');
  const [type, setType] = useState<"success" | "info" | "warning" | "error">('success');

  const clearSnackbar = () => {
    setIsVisible(false);
    setType('success');
    setText('');
  };

  const showSnackbar = (text: string, type: "success" | "info" | "warning" | "error") => {
    setText(text);
    setType(type);
    setIsVisible(true);
  };

  const lines = text.split('\n').map((line, i) => <div key={i}>{line}</div>);

  return (
    <SnackbarContext.Provider value={{ isVisible, text, type, showSnackbar, clearSnackbar }}>
      {children}
      <Snackbar
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        open={isVisible}
        autoHideDuration={1000}
        transitionDuration={{ appear: 10, enter: 200, exit: 10 }}
        onClose={clearSnackbar}
      >
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              onClick={clearSnackbar}
            >
              <CloseIcon />
            </IconButton>
          }
          severity={type}
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {lines}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};