import React from 'react';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {AlbumCardContent} from "../Types";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        card: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
        },
        cardMedia: {
            paddingTop: '56.25%', // 16:9
        },
        cardContent: {
            flexGrow: 1,
        },
        cardActions: {
            justifyContent: "center",
        }
    }),
)

interface AlbumCardProps {
    albumContents: AlbumCardContent[],
}

const AlbumCard: React.FC<AlbumCardProps> = ({albumContents}) => {

    const classes = useStyles();

    return (
        <>
            {albumContents.map(card => (
                <Grid item key={card.id} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            image={card.media}
                            title="Image title"
                        />
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {card.heading}
                            </Typography>
                            <Typography>
                                {card.description}
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.cardActions}>
                            <Button size="small" color="primary">
                                View
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </>
    );
};

export default AlbumCard
