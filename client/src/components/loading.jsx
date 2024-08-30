import { CircularProgress, Grid, Typography } from "@mui/material";

export default function Loading() {

  return (
    <Grid container
    direction="column"
    style={{ 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      minHeight: '200px' }}
  >
    <CircularProgress size={60} /> 
    <Typography variant="h3" textAlign={'center'}>
      Loading...
    </Typography>
    </Grid>
  )
}
