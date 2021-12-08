import * as React from 'react';
import ReactDOM from 'react-dom';

import * as Realm from "realm-web";

const REALM_APP_ID = "dnd-ncpcu"; // e.g. myapp-abcde
const app: Realm.App = new Realm.App({ id: REALM_APP_ID });

function App() {
  return (
  <div>
    <p>brimshander. First town of 10 towns located in Icewind Dale</p>
    <p>Brendan Two - Calidan (the slayer) - Human</p>
    <p>Tony - Flint Pridebreaker - Hill Dwarf</p>
    <p>Brendo - Crimnas Cenovath - Triton</p>
    <p>Will - Admiral - Hippo Man</p>
    <p>Tavern - Northlook Inn</p>
    <p>Dwarves in Tavern - Dendual, Gentrick, Noramona (Goblins stole his "product" - Have a pet bear)</p>
    <p>Yetis...</p>
    <p>The ONLY sound the gun makes is "toot toot"</p>
    <p>KBs: 4</p>
    <h2>My Cluster:</h2>
    <p>Sandstone</p>
    <p>S6CXjaLQVgSQ7gM</p>
  </div>
  )
}
// mongodb+srv://Sandstone:S6CXjaLQVgSQ7gM@cluster0.uomwt.mongodb.net/Cluster0?retryWrites=true&w=majority
export default App;