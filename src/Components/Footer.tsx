import React from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Copyright from "./Copyright";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: theme.palette.primary.main
        },
        footer: {
            margin: "0 auto",
            maxWidth: "1236px",
            padding: "24px 64px 48px 64px",
            [theme.breakpoints.down("xs")]: {
                padding: "12px 0px 24px 0px"
            },
            [theme.breakpoints.up("sm")]: {
                padding: "16px 0px 32px 0px"
            },
            [theme.breakpoints.up("md")]: {
                padding: "24px 0px 48px 0px"
            }
        },
        typography: {
            fontSize: 12,
            color: theme.palette.background.default
        },
        header: {
            color: theme.palette.background.default
        },
        container: {
            padding: 20
        }
    }),
)

const Footer = () => {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <footer className={classes.footer}>
                <Typography className={classes.header} variant="h6" align="center" gutterBottom>
                    Impressum
                </Typography>
                {/*            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Hier würde vermutlich das Impressum landen, Copyright und keine Ahnung was noch.
            </Typography>*/}
                <Grid container>
                    <Grid className={classes.container} xs={12} sm={6} md={3}  container item alignItems={"center"} direction={"column"}>
                        <Typography className={classes.typography} align={"center"}>
                            KET PEGAU UG (haftungsbeschränkt) & Co KG
                            <br/>
                            04523 Pegau, Klostergasse 25
                            <br/>
                            Tel.: 034296 740927
                            <br/>
                            E-Mail: info@ket-pegau.de
                        </Typography>
                    </Grid>
                    <Grid className={classes.container} xs={12} sm={6} md={3}  container item alignItems={"center"} direction={"column"}>
                        <Typography className={classes.typography} align={"center"}>
                            Geschäftsführer: Roland Steyer
                            <br/>
                            Handelsregister-Nr.: HRA 18586
                            <br/>
                            USt.id.Nr.: DE328624166
                            <br/>
                            Info §34i GewO
                        </Typography>
                    </Grid>
                    <Grid className={classes.container} xs={12} sm={6} md={3}  container item alignItems={"center"} direction={"column"}>
                        <Typography className={classes.typography} align={"center"}>
                            Erlaubnisbehörde:
                            <br/>
                            Landratsamt Landkreis Leipzig
                            <br/>
                            IHK zu Leipzig, Geschäftsbereich Dienstleistungen
                            <br/>
                            Identnummer 0000846186
                            <br/>
                            <a style={{textDecoration: "none", color:"inherit"}} target={"_blank"} href="https://www.firmen-in-sachsen.de/sites/fitsa/welcome.aspx">www.firmen-in-sachsen.de</a>
                        </Typography>
                    </Grid>
                    <Grid className={classes.container} xs={12} sm={6} md={3}  container item alignItems={"center"} direction={"column"}>
                        <Typography className={classes.typography} align={"center"}>
                            Bankverbindung:
                            <br/>
                            Leipziger Volksbank
                            <br/>
                            IBAN: DE 53 8609 5604 0307 4483 94
                            <br/>
                            BIC: GENODEF1LVB
                        </Typography>
                    </Grid>
                </Grid>
                <Copyright/>
            </footer>
        </div>

    );
};

export default Footer;
