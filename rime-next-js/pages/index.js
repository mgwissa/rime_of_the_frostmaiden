import { CardMedia } from '@mui/material';

import Layout from '../components/layout/layout.component';
import Header from '../components/header/header';

export default function Index() {
  return (
    <CardMedia
            component="img"
            sx={{ width: 450 }}
            image="/earth_genasi.png"
            alt="Sandstone"
            className="hero-image"
          />
  )
}
