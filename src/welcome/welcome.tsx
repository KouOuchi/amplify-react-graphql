import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NotStartedRoundedIcon from '@mui/icons-material/NotStartedRounded';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Box display="flex" justifyContent="center">
        <img width="200" height="200" src="/image/kougu_bako.png" />
      </Box>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        日進工具
      </Typography>
      <Typography variant="h5" component="div">
        NS 工具箱 App(仮)
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Version : 2024-4-12-A
      </Typography>
      <Typography variant="body2">
        工具ケースのQRコードから<br/>工具寿命を簡単管理!<br/>
      </Typography>
    </CardContent>
    <CardActions>
      <a href="../toolapp/main">
        <Button size="small">開始<NotStartedRoundedIcon/></Button>
      </a>
    </CardActions>
    <br/>
  </React.Fragment>
);

export default function Welcome() {
  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid item>
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">{card}</Card>
        </Box>
      </Grid>
    </Grid>
  );
}
