import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid } from '@mui/material';
import headcatImage from './Pictures/headcat2.jpg';

export default function MediaCard() {
    return (
      <Grid container spacing={2} justifyContent="center"> {/* Responsive Grid container */}
        {/* First Card */}
        <Grid item xs={12} sm={6} md={4}> {/* Responsive Grid item */}
          <Card sx={{ maxWidth: 345, margin: 'auto' }}>
            <CardMedia
              sx={{ height: 300, width: '100%' }}
              image={headcatImage}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Cat
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Cat is my favorite pet in this world.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
  
        {/* Second Card */}
        <Grid item xs={12} sm={6} md={4}> {/* Responsive Grid item */}
          <Card sx={{ maxWidth: 345, margin: 'auto' }}>
            <CardMedia
              sx={{ height: 300, width: '100%' }}
              image={headcatImage}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Cat
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Cats are truly amazing creatures!
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    );
  }