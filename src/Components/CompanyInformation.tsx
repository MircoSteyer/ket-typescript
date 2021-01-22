import React from 'react';
import ComponentHeader from "./ComponentHeader";
import {createStyles, Grid, makeStyles, Theme, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => createStyles({
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
    },
    columnGrid: {
        border: "2px solid brown"
    },
    insideGrid: {
        border: "1px solid green",
        padding: 16
    },
    outerContainer: {
        border: "3px dotted blue"
    },
    nestedContainerOutside: {
        border: "2px solid salmon",
        padding: "8px 8px 8px 0px"
    },
    nestedContainerInside: {
        padding: "8px 8px 8px 0px"
    }
}))

const CompanyInformation = () => {

    const classes = useStyles()

    return (
        <div>
            <ComponentHeader title={"About Us"}/>
            <div className={classes.root}>
                <Grid container className={classes.outerContainer}>
                    <Grid container xs={12} md={6} className={classes.columnGrid} direction={"column"} justify={"space-between"}>
                        <Grid item container className={classes.insideGrid}>
                            <Typography color={"primary"} variant={"h3"} gutterBottom>
                                Less code. More speed.
                            </Typography>
                            <Typography variant={"h6"}>
                                This page is a simple attempt at creating something myself and learning Material UI while doing so.
                            </Typography>
                        </Grid>
                        <Grid item container className={classes.insideGrid}>
                            <Grid item container xs={6} className={classes.nestedContainerOutside}>
                                <Grid item container className={classes.nestedContainerInside} direction={"column"}>
                                    <Typography color={"primary"} variant={"h4"}>
                                        300+
                                    </Typography>
                                    <Typography color={"primary"}>
                                        300+ years of development experience.
                                    </Typography>
                                </Grid>
                                <Grid item container className={classes.nestedContainerInside} direction={"column"}>
                                    <Typography color={"primary"} variant={"h4"}>
                                        12+
                                    </Typography>
                                    <Typography color={"primary"}>
                                        12 + months is how many months a year has. Not eleven. Not even necessarily 12. No, it is 12 or more!
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item container xs={6} className={classes.nestedContainerOutside}>
                                <Grid item container className={classes.nestedContainerInside} direction={"column"}>
                                    <Typography color={"primary"} variant={"h4"}>
                                        45+
                                    </Typography>
                                    <Typography color={"primary"}>
                                        45 + Happy employees eating lunch every day.
                                    </Typography>
                                </Grid>
                                <Grid item container className={classes.nestedContainerInside} direction={"column"}>
                                    <Typography color={"primary"} variant={"h4"}>
                                        99%
                                    </Typography>
                                    <Typography color={"primary"}>
                                        99% of our customers enjoyed our time together. But more than one house isn't very feasible.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container xs={12} md={6} className={classes.columnGrid} direction={"column"} justify={"space-between"}>
                        <Grid item container className={classes.insideGrid}>
                            <img src="static/images/logo.jpg" alt="There's supposed to be our logo here. Seems like that didn't work out as expected."/>
                        </Grid>
                        <Grid item container className={classes.insideGrid}>
                            2ND GRID
                            <br/>
                            2ND GRID
                            <br/>
                            2ND GRID
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default CompanyInformation;
