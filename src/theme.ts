import {createMuiTheme, Theme} from "@material-ui/core";

export const theme: Theme = createMuiTheme({
    palette: {
        type: 'light',
        background: {
            default: "#F5F5F5"
        },
        primary: {
            main: '#002642',
        },
        secondary: {
            main: '#92140c',
        },
        text: {
            primary: "#002642",
            secondary: "#F5F5F5"
        }
/*        divider: "rgba(146,20,12, 0.5)",*/
    }
})
