import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Toggle } from "@/components/ui/toggle"

export function ModeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <Toggle variant="outline" aria-label="Toggle theme" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            {theme === "light" ? (
                <Sun/>
            ) : (
                <Moon/>
            )}
        </Toggle>
    )
}