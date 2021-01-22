import React from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        heroContent: {
            padding: theme.spacing(4, 0, 0),
}
    }),
)

type ComponentHeaderProps = {
    title: string
}

const ComponentHeader: React.FC<ComponentHeaderProps> = ({title}) => {

    const classes = useStyles()

    return (
        <div className={classes.heroContent}>
            <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    {title}
                </Typography>
            </Container>
        </div>
    );
};

export default ComponentHeader;
