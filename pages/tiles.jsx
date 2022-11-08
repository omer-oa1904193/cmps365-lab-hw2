import { useRouter } from "next/router";
import TileGrid from "../components/TileGrid";
import { useState, useEffect } from 'react';
import { Link } from "@mui/material";

export default function Tiles() {
    const router = useRouter();
    const level = Number(router.query.level ?? 1);

    const [levelWon, setLevelWon] = useState(false)
    return <div className="page">
        <header>
            <h1>Level {level}</h1>
            {levelWon ?
                <Link href={`?level=${level + 1}`}><h3>Level {level + 1} &gt;</h3></Link>
                : <></>
            }
        </header>
        <TileGrid level={level} onLevelWon={() => { setLevelWon(true) }}></TileGrid>
    </div>
}