import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useEffect, useMemo, type PropsWithChildren } from "react";
import { selectTheme } from "@/app/app-slice.ts";
import { useAppSelector } from "@/common/hooks";

export const AppThemeProvider = ({ children }: PropsWithChildren) => {
    const theme = useAppSelector(selectTheme);
    const muiTheme = useMemo(
        () => createTheme({ palette: { mode: theme } }),
        [theme],
    );

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    return (
        <ThemeProvider theme={muiTheme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
