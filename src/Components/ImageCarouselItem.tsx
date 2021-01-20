import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import {Button, Hidden, Paper} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {AlbumCardContent} from "../Types";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            justifyContent: "center",
            [theme.breakpoints.up("sm")] : {
                minWidth: 300,
                maxHeight: 600}
            /*display: "flex",
            position: "relative",
            height: 700,
            maxWidth: 345,*/

        },
        cardMedia: {
            height: 0,
            paddingTop: "56.25%",

/*            position: "absolute",
            height: "100%",
            width: "100%",
            top: 0,
            right: 0,
            [theme.breakpoints.up("sm")] : {
                minWidth: 250,}*/
        },
        cardContent: {
            position: 'absolute',
            bottom: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            alignItems: "center",
            justifyContent: "center"
        },
        cardActions: {
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translate(-50%, -50%)"
        },
    }),
)

type CarouselItemProps = {
    card: AlbumCardContent
}

const ImageCarouselItem: React.FC<CarouselItemProps> = ({card}) => {

    const classes = useStyles()

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.cardMedia}
                       image={card.media}
                       title="Image title"/>
            <CardContent className={classes.cardContent}>
                <Hidden xsDown>
                    <Typography gutterBottom variant="h5" component="h2" align={"center"}>
                        {card.heading}
                        TEST
                        TEST
                    </Typography>
                    <Typography align={"center"}>
                        {card.description}
                    </Typography>
                </Hidden>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button>
                    Contact
                </Button>
            </CardActions>
        </Card>
/*        <Card className={classes.card}>
            <CardMedia className={classes.cardMedia}
                       image={card.media}
                       title="Image title">
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {card.heading}
                    </Typography>
                    <Typography>
                        {card.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button>
                        Contact
                    </Button>
                </CardActions>
            </CardMedia>

        </Card>*/
    )
}

export default ImageCarouselItem
