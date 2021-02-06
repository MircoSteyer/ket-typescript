import React from 'react';
import ComponentHeader from "./ComponentHeader";
import {createStyles, Grid, makeStyles, Theme, Typography} from "@material-ui/core";
import logo from "../logo.jpg"

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
/*        border: "3px solid",*/
        margin: "0 auto",
        maxWidth: "1236px",
        padding: "0px 64px 48px 64px",
        [theme.breakpoints.down("xs")]: {
            padding: "0px 16px 24px 16px"
        },
        [theme.breakpoints.up("sm")]: {
            padding: "0px 64px 32px 64px"
        },
        [theme.breakpoints.up("md")]: {
            padding: "0px 64px 48px 64px"
        }
    },
    columnGrid: {
/*        border: "2px solid brown"*/
    },
    insideGrid: {
/*        border: "1px solid green",*/
        padding: 16,
    },
    outerContainer: {
/*        border: "3px dotted blue"*/
    },
    nestedContainerOutside: {
/*        border: "2px solid salmon",*/
/*        padding: "8px 8px 8px 0px"*/
    },
    nestedContainerInside: {
/*        padding: "8px 8px 8px 0px"*/
    }
}))

const CompanyInformation = () => {

    const classes = useStyles()

    return (
        <div id={"about"}>
            <ComponentHeader title={""}/>
            <div className={classes.root}>
                <Grid container className={classes.outerContainer}>
                    <Grid container item xs={12} md={6} className={classes.columnGrid} direction={"column"} justify={"space-between"}>
                        <Grid item container className={classes.insideGrid}>
                            <Typography color={"primary"} variant={"h3"} gutterBottom>
                                Wir baggern alles.
                            </Typography>
                            <Typography variant={"h6"}>
                                Sie geben uns den Auftrag. Wir erledigen es!
                            </Typography>
                        </Grid>
                        <Grid item container className={classes.insideGrid}>
                            <Grid item container xs={12} sm={6} className={classes.nestedContainerOutside}>
                                <Grid item container className={classes.nestedContainerInside} direction={"column"}>
                                    <Typography color={"primary"} variant={"h4"}>
                                        Kompetent
                                    </Typography>
                                    <Typography color={"primary"}>
                                        300 + Irgendetwas. Überlegt euch irgendwelche Kennzahlen, aber haltet den Text kurz.
                                    </Typography>
                                </Grid>
                                <Grid item container className={classes.nestedContainerInside} direction={"column"}>
                                    <Typography color={"primary"} variant={"h4"}>
                                        Zuverlässig
                                    </Typography>
                                    <Typography color={"primary"}>
                                        12 + Irgendetwas. Überlegt euch irgendwelche Kennzahlen, aber haltet den Text kurz.
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item container xs={12} sm={6} className={classes.nestedContainerOutside}>
                                <Grid item container className={classes.nestedContainerInside} direction={"column"}>
                                    <Typography color={"primary"} variant={"h4"}>
                                        45+
                                    </Typography>
                                    <Typography color={"primary"}>
                                        45 + Irgendetwas. Überlegt euch irgendwelche Kennzahlen, aber haltet den Text kurz.
                                    </Typography>
                                </Grid>
                                <Grid item container className={classes.nestedContainerInside} direction={"column"}>
                                    <Typography color={"primary"} variant={"h4"}>
                                        99%
                                    </Typography>
                                    <Typography color={"primary"}>
                                        99% Irgendetwas. Überlegt euch irgendwelche Kennzahlen, aber haltet den Text kurz.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} md={6} className={classes.columnGrid} direction={"column"} justify={"space-between"} >
                        <Grid item container className={classes.insideGrid}>
                            <img src={`${process.env.PUBLIC_URL}/static/images/logo.jpg`} height={"100%"} width={"100%"} alt="Hier sollte eigentlich unser Logo stehen. Scheint, als wäre etwas schief gelaufen."/>
                        </Grid>
                        <Grid item container className={classes.insideGrid}>
                            <Typography color={"primary"} variant={"h3"} gutterBottom>
                                Gesucht - Geplant - Getan!
                            </Typography>
                            <Typography variant={"h6"}>
                                Ein zuverlässiger Regionalpartner an ihrer Seite!
                            </Typography>
                            {/*<Typography variant={"h6"}>
                                Vielleicht noch was cooles, warum der Kunde davon profitiert, zu uns zu kommen. Was weiß denn ich.
                            </Typography>*/}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default CompanyInformation;
