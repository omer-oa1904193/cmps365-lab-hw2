import { Button, Grid, Paper, Typography } from "@mui/material";
import { useRef } from "react";
import { randomNumber } from "../utils";

export default function EmojiTile({ emoji, matched, pressed, setPressed }) {
    const angle = useRef(randomNumber(0, 360))
    return <>
        <Button variant={pressed ? "contained" : "outlined"}
            color={matched ? "success" : "primary"}
            disabled={matched}
            onClick={() => setPressed(!pressed)} >
            <Typography align="center" fontSize={30} sx={{ transform: `rotate(${angle.current}deg)` }}>{emoji}</Typography>
        </Button>
    </>
}