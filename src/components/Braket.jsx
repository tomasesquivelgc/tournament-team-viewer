import React from 'react';
import { Card, CardContent, Typography, Grid, Box, CardMedia } from '@mui/material';
import brackets from '../data/brackets';
import teams from '../data/teams';

const BracketsDisplay = () => {
  // Helper function to get team details based on name
  const getTeamByName = (teamName) => {
    return teams.find((team) => team.name === teamName);
  };

  return (
    <Box sx={{ padding: '20px' }}>
      {/* Iterate over each round */}
      {Object.entries(brackets).map(([round, teamsInRound]) => (
        <Box key={round} sx={{ marginBottom: '30px' }}>
          <Typography variant="h4" component="h2" sx={{ marginBottom: '20px' }}>
            {round}
          </Typography>
          <Grid container spacing={3}>
            {/* Map over the teams in each round */}
            {teamsInRound.map((teamName, index) => {
              const team = getTeamByName(teamName);
              if (!team) return <Typography key={index}>Team {teamName} not found</Typography>;

              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={team.id}>
                  <Card sx={{ height: '100%' }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={team.logo}
                      alt={`${team.name} logo`}
                    />
                    <CardContent>
                      <Typography variant="h6" component="div" textAlign="center">
                        {team.name}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default BracketsDisplay;
