import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rime of the Frostmaiden</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Oldenburg&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <Link href="/_notes.tsx">
          <Button variant="contained">Notes</Button>
        </Link>
        <div className={styles.hero}>
          <img className={styles.img} src="/earth_genasi.png" alt="Sandstone" />
        </div>
        <div>
          <TextField
            label="New Entry"
            className={styles.newEntry}
            multiline
            rows={4} />
        </div>
        <TextField label="Search Notes" variant="standard" />
        <div>
          <h2>Week 1:</h2>
          <p>brimshander. First town of 10 towns located in Icewind Dale</p>
          <p>Brendan Two - Calidan (the slayer) - Human Bloodhunter</p>
          <p>Tony - Flint Pridebreaker - Hill Dwarf Cleric</p>
          <p>Brendo - Crimnas Cenovath - Triton Sorceror</p>
          <p>Will - Admiral - Hippo Man Fighter</p>
          <p>Tavern - Northlook Inn</p>
          <p>Dwarves in Tavern - Dendual, Gentrick, Noramona (Goblins stole his "product" - Have a pet bear)</p>
          <p>Yetis...</p>
          <p>The ONLY sound the gun makes is "toot toot"</p>
          <p>KBs: 4</p>
        </div>
        <div>
          <h2>Week 2:</h2>
          <p>Innkeeper: Marta Peskryk (teenager)</p>
          <p>Sky is dull pink for 2 days in a row</p>
          <p>Innkeeper song: lady in red cloak that stopped at inn on her way to Lonely Wood. She was alone and very frightened. She paid them with a ring. The wind came through and tossed her around. The parents helped and distracted enough for the woman to get away. The parents were left unconscious</p>
          <p>Little kid outside inn - saying that Masthew is offering 50 gold for clearing out a mine. You can find the town speaker ouaros at the Blue Clam on the west side of town on the water.</p>
          <p>People tied to the pole: get sacrificed for Auril - the god of winter's wrath</p>
          <p>The town has been stuck in an endless winter. The cold is starting to head south. There has been no sun for two years</p>
          <p>The children of Auril - some think they're kind of like a church of Auril</p>
          <p>Townspeaker - Half Orc</p>
          <p>The Gem Mine - 1 miner missing, possibly fell into the underdark</p>
          <p>Brylbore - Fishernman, apparently there is a monster in the water</p>
          <p></p>
        </div>
      </main>
    </div>
  )
}

export default Home
