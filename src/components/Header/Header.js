import React from 'react';
import {createStyles, makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {Box} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            flexGrow: 2,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        toolbar: {
            minHeight: 128,
            alignItems: 'flex-end',
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(2),
        },
        icon: {
            width: '150px',
            height: '150px',
            color: 'black'
        },
        icons: {
            position: 'relative',
            display: 'block',
        },
        addIcon: {
            position: 'absolute',
            justifyContent: 'flex-start',
            alignItems: 'center',


        },
        header_resp: {
            flexWrap: "wrap",
        }
    }),
);

export default function HeaderForm(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar item xs={12} position="static"
                    style={{background: "linear-gradient(90.08deg, #FFFFFF 14.89%, #E7EAEE 90.07%)"}}>
                <Toolbar variant="dense" className={classes.toolbar}>
                    <div className={classes.icons}>
                        <AccountBoxIcon className={classes.icon}/>
                    </div>
                    <div display="block" justifyContent="center">
                        <Typography style={{color: 'black',marginLeft:"22px"}} variant="h5" component="h4"><strong>{`${props.userData.first_name} ${props.userData.last_name}`}</strong></Typography>
                        <Box className={classes.header_resp} display="flex" flexWrap justifyContent="flex-start" m={1} p={1}>
                            <Button style={{color: 'black'}}> О себе</Button>
                            <Button style={{color: 'black'}}>Группы</Button>
                            <Button style={{color: 'black'}}>Фото</Button>
                            <Button style={{color: 'black'}}>Подписи</Button>
                            <Button><Link to={"/main/update-profile"} style={{color: 'black'}}>Настройки</Link></Button>
                        </Box>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
