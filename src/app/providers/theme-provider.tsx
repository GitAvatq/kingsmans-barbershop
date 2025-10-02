"use client";
import { ThemeProvider } from "next-themes";
import { ReactNode, useEffect, useState } from "react";

export default function ReactThemeProvider({ children }: { children: ReactNode }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return;

    return (
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
            {children}
        </ThemeProvider>
    );
}
