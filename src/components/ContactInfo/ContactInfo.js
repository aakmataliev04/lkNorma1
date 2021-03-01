import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { useMediaQuery, Grid } from '@material-ui/core'
import './ContactInfo.css'

const useStyles = makeStyles({
	root: {
		maxwidth: 2000,
		disableRipple: true,
		background: 'white'
	},
	root1: {
		//textDecoration: 'underline'
	},
	root2: {
		disableRipple: true
		//textDecoration: 'underline'
	},
	root3: {
		//textDecoration: 'underline'
	},
	root4: {
		//textDecoration: 'underline'
	},
	root5: {
		//textDecoration: 'underline'
	},

	media: {
		maxheight: 1200
	}
})

export default function ContactInfo(props) {
	const classes = useStyles()
	const MobileVersionPlatform = useMediaQuery('(max-width:950px)')
	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardContent className={classes.roott}>
					<Grid item xs={12} sm={12} xl={12} lg={12} md={12} container justify="center">
						<Typography gutterBottom variant="h5" component="h2">
							<p className="mainTitle">Контактная информация</p>
						</Typography>
					</Grid>
					<Grid container direction="row" justify="space-between" alignItems="baseline">
						<Grid item xs={12} sm={4} xl={2} lg={2} md={2}>
							<Typography
								className={classes.root1}
								variant="body1"
								color="textSecondary"
								component="p"
								align="center"
								display="inline"
							>
								<p className="categoryItem">Email/Соц.сети:</p>
								{MobileVersionPlatform && <p className="itemsPlatfrom">{props.userData.email}</p>}
							</Typography>
						</Grid>
						<Grid item xs={12} sm={4} xl={2} lg={2} md={2}>
							<Typography
								className={classes.root2}
								variant="body1"
								color="textSecondary"
								component="p"
								align="center"
								display="inline"
							>
								<p className="categoryItem">Номер телефона:</p>
								{MobileVersionPlatform && <p className="itemsPlatfrom">{props.userData.phone}</p>}
							</Typography>
						</Grid>
						<Grid item xs={12} sm={4} xl={2} lg={2} md={2}>
							<Typography
								className={classes.root3}
								variant="body1"
								color="textSecondary"
								component="p"
								align="center"
								display="inline"
							>
								<p className="categoryItem">Дата рождения:</p>
								{MobileVersionPlatform && <p className="itemsPlatfrom">{props.userData.birthday}</p>}
							</Typography>
						</Grid>
						<Grid item xs={12} sm={4} xl={2} lg={2} md={2}>
							<Typography
								className={classes.root4}
								variant="body1"
								color="textSecondary"
								component="p"
								align="center"
								display="inline"
							>
								<p className="categoryItem">Город:</p>
								{MobileVersionPlatform && <p className="itemsPlatfrom">г.{props.userData.city}</p>}
							</Typography>
						</Grid>
						<Grid item xs={12} sm={4} xl={2} lg={2} md={2}>
							<Typography
								className={classes.root5}
								variant="body1"
								color="textSecondary"
								component="p"
								align="center"
								display="inline"
							>
								<p className="categoryItem">Пол:</p>
								{MobileVersionPlatform && (
									<p className="itemsPlatfrom">
										{props.userData.gender == 'Male' ? 'Мужчина' : 'Женщина'}
									</p>
								)}
							</Typography>
						</Grid>
					</Grid>

					<Grid container direction="row" justify="space-between" alignItems="baseline">
						<Grid item xs={12} sm={2} xl={2} lg={2} md={2}>
							<Typography
								className={classes.root}
								variant="body1"
								color="textSecondary"
								component="p"
								align="center"
								display="inline"
							>
								{!MobileVersionPlatform && <p className="itemsPlatfrom">{props.userData.email}</p>}
							</Typography>
						</Grid>
						<Grid item xs={12} sm={2} xl={2} lg={2} md={2}>
							<Typography
								className={classes.root}
								variant="body1"
								color="textSecondary"
								component="p"
								align="center"
								display="inline"
							>
								{!MobileVersionPlatform && <p className="itemsPlatfrom">{props.userData.phone}</p>}
							</Typography>
						</Grid>
						<Grid item xs={12} sm={2} xl={2} lg={2} md={2}>
							<Typography
								className={classes.root}
								variant="body1"
								color="textSecondary"
								component="p"
								align="center"
								display="inline"
							>
								{!MobileVersionPlatform && <p className="itemsPlatfrom">{props.userData.birthday}</p>}
							</Typography>
						</Grid>
						<Grid item xs={12} sm={2} xl={2} lg={2} md={2}>
							<Typography
								className={classes.root}
								variant="body1"
								color="textSecondary"
								component="p"
								align="center"
								display="inline"
							>
								{!MobileVersionPlatform && <p className="itemsPlatfrom">г.{props.userData.city}</p>}
							</Typography>
						</Grid>
						<Grid item xs={12} sm={2} xl={2} lg={2} md={2}>
							<Typography
								className={classes.root}
								variant="body1"
								color="textSecondary"
								component="p"
								align="center"
								display="inline"
							>
								{!MobileVersionPlatform && <p className="itemsPlatfrom">{props.userData.gender == 'Male' ? 'Мужчина' : 'Женщина'}</p>}
							</Typography>
						</Grid>
					</Grid>
				</CardContent>
			</CardActionArea>
		</Card>
	)
}
