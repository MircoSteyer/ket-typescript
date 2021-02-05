import React from 'react';
import Typography from "@material-ui/core/Typography";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        typography: {
            fontSize: 12,
            color: theme.palette.background.default
        }
    }),
)

const Copyright = () => {

    const classes = useStyles()

    return (
        <Typography className={classes.typography} variant="body2" color="textSecondary" align="center">
            {'Copyright © KET Pegau UG (haftungsbeschränkt) & Co KG, '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
};

export default Copyright;
