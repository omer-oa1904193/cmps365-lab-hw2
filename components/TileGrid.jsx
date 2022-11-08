import { useRouter } from "next/router";
import { Grid, } from "@mui/material";
import { useEffect, useState } from "react";
import { areSetsEqual, generateEmojis } from "../utils";
import EmojiTile from "./EmojiTile";
import { useStore } from '../store/store';

export default function TileGrid({ level, onLevelWon }) {
    // const { emojis, matchedEmojis, setMatchedEmojis } = useStore();
    
    const [emojis, setEmojis] = useState([]);
    const [selectedEmojis, setSelectedEmojis] = useState([]);
    const [matchedEmojis, setMatchedEmojis] = useState([]);

    useEffect(() => {
        setEmojis(generateEmojis(level*2))
        setSelectedEmojis([])
        setMatchedEmojis([])
    }, [level])

    useEffect(() => {
        if (emojis.length > 0 && areSetsEqual(new Set(emojis), new Set(matchedEmojis)))
            onLevelWon()
    }, [emojis, matchedEmojis, onLevelWon])


    return <Grid sx={{ flexGrow: 1 }} container spacing={3} justifyContent="center" columns={{ xs: 4, sm: 8, md: 12 }}>
        {emojis.map((emoji, index) =>
            <Grid item key={index} xs={2} suppressHydrationWarning={true}>
                <EmojiTile emoji={emoji}
                    pressed={selectedEmojis.includes(index)}
                    matched={matchedEmojis.includes(emoji)}
                    setPressed={(pressed) => {
                        let newSelected;
                        if (pressed)
                            newSelected = [...selectedEmojis, index];
                        else
                            newSelected = [...selectedEmojis.filter((e, i) => i !== index)];
                        if (newSelected.length >= 2) {
                            if (emojis[newSelected[0]] === emojis[newSelected[1]])
                                setMatchedEmojis([...matchedEmojis, emojis[newSelected[0]]])
                            newSelected = [];
                        }
                        setSelectedEmojis(newSelected)
                    }}>
                </EmojiTile>
            </Grid>
        )}
    </Grid>
}