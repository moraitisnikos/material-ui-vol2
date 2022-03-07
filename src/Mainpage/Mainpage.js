import * as React from 'react';
import { makeStyles } from "@mui/styles";
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Box, grid } from '@mui/system';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import lizard from './lizard.jpg'
import { createTheme, ThemeProvider} from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import Modal from '@mui/material/Modal';
import { purple } from '@mui/material/colors';




const useStyles = makeStyles({
    field:{
        marginTop: 20,
        marginBottom: 20,
        display: 'block',
    },
    title: {
        paddingTop: 20,
        textDecoration: 'underline',
        paddingBottom: 20,
    },
    cards:{
        display:'flex',
        gap: 10,
        justifyContent: 'center',
    },

})

const theme = createTheme({
    typography: {
        body2: {
            fontFamily: 'Sansita Swashed'
        }
    },
})

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,    
  };

const btnstyle = {
    position: 'relative',
    top: '50%',
    left: '50%'
}
const btnstyleModal = {
    position: 'relative',
    top: '50%',
    left: '30%',
    marginTop: 10,
}
const finaly = {
    marginTop: 5,
    position: 'relative'
}

export default function Mainpage(){

    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [first, setFirst] = React.useState();
    const [last, setLast] = React.useState();

    return(
        <ThemeProvider theme={theme}>

                <Box
                sx={{
                    display:'flex',
                    gap: 50,
                    justifyContent: 'space-evenly',
                    backgroundColor: 'purple',
                    color: 'white',
                }}>
                    <Typography variant='body1' component='p'>
                        Home
                    </Typography>
                    <Typography variant='body1' component='p'>
                        About
                    </Typography>
                    <Typography variant='body1' component='p'>
                        Help
                    </Typography>
                </Box>
            <Container  maxWidth="lg">

                <Typography
                    variant="body1"
                    align="center"
                    gutterBottom
                    className={classes.title}
                    color= {purple[400]}
                >
                    Material UI
                </Typography>


                <Box className={classes.cards}>
                    <Card sx={{ maxWidth: 345, marginBottom: 10 }}>
                        <CardMedia
                            component="img"
                            height="250"
                            image={lizard}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button className={classes.btn} size="small" variant="outlined">Share</Button>
                            <Button size="small" variant="outlined">Learn More</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345, marginBottom: 10 }}>
                        <CardMedia
                            component="img"
                            height="250"
                            image={lizard}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant="outlined">Share</Button>
                            <Button size="small" variant="outlined">Learn More</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345, marginBottom: 10 }}>
                        <CardMedia
                            component="img"
                            height="250"
                            image={lizard}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Lizard
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" variant="outlined">Share</Button>
                            <Button size="small" variant="outlined">Learn More</Button>
                        </CardActions>
                    </Card>
                </Box>
                
                <form> 
                    <TextField
                    className={classes.field}
                    fullWidth
                    variant="outlined"
                    label="First name"
                    onChange={(e) => setFirst(e.target.value)}
                    />

                    <TextField
                    className={classes.field}
                    fullWidth
                    variant="outlined"
                    label="Last name"
                    onChange={(e) => setLast(e.target.value)}

                    />

                    <TextField
                    className={classes.field}
                    fullWidth
                    variant="outlined"
                    label="Email"
                    />

                    <Button
                    sx={finaly}
                    variant="contained"
                    color='secondary'
                    type='submit'
                    endIcon={<SendIcon/>}
                    onClick={() => {
                        alert('Thank you ' + first + " " + last + ' hope to see you again' );
                    }}
                    >
                        Submit
                    </Button>
                </form>

                <Button sx={btnstyle} variant="contained" color='secondary' onClick={handleOpen}>Log in</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" marginBottom={2}>
                        Log in details
                    </Typography>
                    <TextField
                    mb={2}
                    fullWidth
                    label='Username'
                    />
                    <TextField
                    fullWidth
                    label='Password'
                    type="password"
                    />
                    <Button style={btnstyleModal} variant="outlined">Outlined</Button>
                    </Box>
                </Modal>
            </Container>
        </ThemeProvider>
    )
}