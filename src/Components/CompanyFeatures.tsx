import React from 'react';
import {createStyles, Grid, makeStyles, Theme, Typography} from "@material-ui/core";
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import Container from "@material-ui/core/Container";
import ComponentHeader from "./ComponentHeader";

const useStyles = makeStyles((theme: Theme) => createStyles({
    box: {
        height: 200,
        width: 250,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: 2
    },
    root: {
        margin: "0 auto",
        maxWidth: "1236px",
        border: "3px solid",
        padding: "96px 64px",
        [theme.breakpoints.down("xs")]: {
            padding: "48px 16px"
        },
        [theme.breakpoints.up("sm")]: {
            padding: "64px 64px"
        },
        [theme.breakpoints.up("md")]: {
            padding: "96px 64px"
        }
    }
}))

const CompanyFeatures = () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.root}>
                <ComponentHeader title={"Features"}/>
                <Grid container justify={"center"}>
                    <Grid container xs={12} sm={6} md={4} justify={"space-evenly"}>
                        <Grid item className={classes.box}>
                            <LocalShippingIcon color={"primary"} fontSize={"large"}/>
                            <Typography variant={"h4"} gutterBottom>
                                Kanalbau
                            </Typography>
                            <Typography align={"center"}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, repudiandae.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} sm={6} md={4} justify={"space-evenly"}>
                        <Grid item className={classes.box}>
                            <LocalShippingIcon color={"primary"} fontSize={"large"}/>
                            <Typography variant={"h4"} gutterBottom>
                                Erdbau
                            </Typography>
                            <Typography align={"center"}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, repudiandae.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} sm={6} md={4} justify={"space-evenly"}>
                        <Grid item className={classes.box}>
                            <LocalShippingIcon color={"primary"} fontSize={"large"}/>
                            <Typography variant={"h4"} gutterBottom>
                                Tiefbau
                            </Typography>
                            <Typography align={"center"}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, repudiandae.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>

    );
};

export default CompanyFeatures;
