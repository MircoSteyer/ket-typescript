import React from 'react';
import {createStyles, Grid, makeStyles, Theme, Typography} from "@material-ui/core";
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ComponentHeader from "./ComponentHeader";

const useStyles = makeStyles((theme: Theme) => createStyles({
    box: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
/*        border: "3px solid"*/
    },
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
    }
}))

const CompanyFeatures = () => {
    const classes = useStyles()
    return (
        <>
            <div className={classes.root}>
                <ComponentHeader title={"Angebot"}/>
                <Grid container justify={"center"} spacing={4}>
                    <Grid container item xs={12} sm={6} md={3} justify={"space-evenly"}>
                        <Grid container item className={classes.box}>
                            <LocalShippingIcon color={"primary"} fontSize={"large"}/>
                            <Typography variant={"h4"} gutterBottom>
                                Ums Haus
                            </Typography>
                            <Typography align={"center"}>
                                Erdarbeiten mit Blick auf alle notwendigen Maßnahmen die anfallen werden und können, wie zum Beispiel
                                Fundamentaushub, Herstellung von Baugruben, Entwässerung, Bodenbeschaffenheitsanalysen,
                                Treffen von Vorbereitungsmaßnahmen und Durchführung von Gründungen.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} sm={6} md={3} justify={"space-evenly"}>
                        <Grid item className={classes.box}>
                            <LocalShippingIcon color={"primary"} fontSize={"large"}/>
                            <Typography variant={"h4"} gutterBottom>
                                Kanalbau
                            </Typography>
                            <Typography align={"center"}>
                                Bauen sie auf unsere Erfahrungen mit der Herstellung von Ver- und Entsorgungsleitungen,
                                beginnend vom Haus bis zur Grundstücksgrenze.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} sm={6} md={3} justify={"space-evenly"}>
                        <Grid item className={classes.box}>
                            <LocalShippingIcon color={"primary"} fontSize={"large"}/>
                            <Typography variant={"h4"} gutterBottom>
                                Außenanlagen
                            </Typography>
                            <Typography align={"center"}>
                                Wir übernehmen die Gestaltung Ihrer Außenanlagen, bzgl. Pflasterarbeiten von Einfahrten, Zuwegungen,
                                Terrassen und Hauseingänge. Pflasterarbeiten sollen nicht nur optisch ansprechend, sondern auch
                                pflegeleicht sein. Wir helfen beim verschönern Ihrer Grundstücke.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container item xs={12} sm={6} md={3} justify={"space-evenly"}>
                        <Grid item className={classes.box}>
                            <LocalShippingIcon color={"primary"} fontSize={"large"}/>
                            <Typography variant={"h4"} gutterBottom>
                                Erdarbeiten
                            </Typography>
                            <Typography align={"center"}>
                                Ob kleinere Erdarbeiten oder größere – für unsere Firma kein Problem!
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>

    );
};

export default CompanyFeatures;
