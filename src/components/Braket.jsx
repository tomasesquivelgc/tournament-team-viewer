import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  CardMedia,
  Modal,
  Paper,
  IconButton,
  CardActionArea 
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import brackets from '../data/brackets';
import teams from '../data/teams';

const BracketsDisplay = () => {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [open, setOpen] = useState(false);

  const getTeamByName = (teamName) => teams.find((team) => team.name === teamName);

  const handleCardClick = (team) => {
    setSelectedTeam(team);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTeam(null);
  };

  return (
    <Box
      sx={{
        padding: '20px',
        backgroundColor: '#f0f2f5', // Light background color for the app
        minHeight: '100vh',
      }}
    >
      {Object.entries(brackets).map(([round, teamsInRound]) => (
        <Box key={round} sx={{ marginBottom: '30px' }}>
          <Typography variant="h4" component="h2" sx={{ marginBottom: '20px', textAlign: 'center' }}>
            {round}
          </Typography>
          <Grid container spacing={3} justifyContent="center"> {/* Center the cards */}
            {teamsInRound.map((teamName, index) => {
              const team = getTeamByName(teamName);
              if (!team) return <Typography key={index}>Team {teamName} not found</Typography>;

              return (
                <Grid item xs={12} sm={6} md={4} lg={3} key={team.id}>
                  <Card
                    sx={{
                      height: '100%',
                      cursor: 'pointer',
                      transition: 'transform 0.3s',
                      '&:hover': {
                        transform: 'scale(1.05)', // Add hover effect
                      },
                    }}
                    onClick={() => handleCardClick(team)}
                  >
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

      {selectedTeam && (
        <Modal open={open} onClose={handleClose} aria-labelledby="team-modal-title">
          <Paper
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80%',
              maxWidth: 800,
              padding: '20px',
              outline: 'none',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="h5" id="team-modal-title">
                {selectedTeam.name}
              </Typography>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Typography variant="h6" sx={{ marginTop: '20px', marginBottom: '10px' }}>
              Players:
            </Typography>
            <Grid container spacing={2}>
              {Object.entries(selectedTeam.players).map(([role, player]) => (
                <Grid item xs={12} sm={6} md={4} key={role}>
                  <Paper
                    sx={{
                      padding: '10px',
                      textAlign: 'center',
                      backgroundColor: '#f5f5f5',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      transition: 'background-color 0.3s',
                      '&:hover': {
                        backgroundColor: '#e0e0e0',
                      },
                    }}
                  >
                    <CardActionArea
                      onClick={() => window.open(player.playerProfileLink, '_blank')}
                    >
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        {role.toUpperCase()}
                      </Typography>
                      <Typography variant="body1">{player.playerName}</Typography>
                      <Typography variant="body2" color="textSecondary">
                        Character: {player.character}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        Rank: {player.rank}
                      </Typography>
                    </CardActionArea>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Modal>
      )}
    </Box>
  );
};

export default BracketsDisplay;
