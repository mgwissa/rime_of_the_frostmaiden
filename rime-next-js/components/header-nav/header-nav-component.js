import Link from "next/link";

import { Button, CardMedia } from "@mui/material";

const HeaderNav = () => {
  return (
    <div className="header-nav">
      <CardMedia
          component="img"
          sx={{ width: 200 }}
          image="/logo.png"
          alt="D&D"
        />
        <ul className="header-links">
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/notes">
              Notes
            </Link>
          </li>
          <li>
            <Link href="https://www.dndbeyond.com/profile/Miiiiike/characters/63068909" rel="noreferrer" target="_blank">
              Character Sheet
            </Link>
          </li>
          <li>
            <Link href="https://www.dndbeyond.com/classes/warlock" rel="noreferrer" target="_blank">
              Class
            </Link>
          </li>
          <li>
            <Link href="/backstory_sandstone.pdf" rel="noreferrer" target="_blank">
              Backstory
            </Link>
          </li>
        </ul>
    </div>
  );
}

export default HeaderNav;

// const HeaderNav = () => {
//   return (
//     <div className="header-nav">
//       <ul className="header-links">
//         <li>
//           <Link href="/">
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link href="/notes">
//             Notes
//           </Link>
//         </li>
//         <li>
//           <Link href="https://www.dndbeyond.com/profile/Miiiiike/characters/63068909" rel="noreferrer" target="_blank">
//             Character Sheet
//           </Link>
//         </li>
//         <li>
//           <Link href="https://www.dndbeyond.com/classes/warlock" rel="noreferrer" target="_blank">
//             Class
//           </Link>
//         </li>
//         <li>
//           <Link href="/backstory">
//             Backstory
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default HeaderNav