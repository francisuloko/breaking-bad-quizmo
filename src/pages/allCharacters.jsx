import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { fetchAllCharacters } from '../slices/characters/all';

const allCharacters = () => {
  const { allCharacters } = useSelector((state) => state.allCharacters);
  localStorage.setItem('breakingBadCharacters', JSON.stringify(allCharacters));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCharacters());
  }, []);

  return (
    <Container>
      <div className="d-flex flex-wrap gap-3 align-items-center justify-content-evenly p-5">
        {allCharacters.map((character) => (
          <Card sx={{ maxWidth: 300 }} key={character.char_id}>
            <CardHeader
              avatar={(
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {character.name[0]}
                </Avatar>
              )}
              action={(
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              )}
              title={`${character.name} (${character.nickname})`}
              subheader={character.birthday}
            />
            <CardMedia
              component="img"
              height=""
              image={character.img}
              alt={character.name}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary" className="d-flex flex-wrap">
                {character.occupation.map((job) => (
                  <span className="py-1 px-3 m-1 bg-light border rounded-pill" key={job}>
                    {job}
                  </span>
                ))}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default allCharacters;
