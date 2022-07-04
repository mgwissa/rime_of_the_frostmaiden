import { Typography, CardMedia, Link } from "@mui/material";

import HeaderNav from '../header-nav/header-nav-component';

const Header = () => {
  return (
    <div>
      <HeaderNav />
        <Typography variant="h1" color="textSecondary">
          Rime of the Frostmaiden
        </Typography>
      </div>
  )
}

export default Header;