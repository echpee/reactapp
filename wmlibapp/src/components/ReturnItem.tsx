import * as React from 'react';
import { StyleRules, Theme, withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



interface IProps {
    classes?: any;
}


interface IForm {
    name: string,
    value: any,
    errorstate: boolean
}
interface IState {
    isbn: IForm;
    returnedon: IForm;
    libraryitem: string,
}

const styles = (theme: Theme): StyleRules => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,

    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
        textTransform: 'none',
    },
    root: {
        flexGrow: 1,
        maxWidth: 600,
        padding: theme.spacing.unit * 2,
    },


});

const libraryitem = [
    {
        value: 'Book',
        label: 'Book',
    },
    {
        value: 'DVD',
        label: 'DVD',
    }
];

class ReturnItem extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            isbn: { name: '', value: '', errorstate: false },
            returnedon: { name: '', value: '', errorstate: false },
            libraryitem: 'Book'
        }
    }

    handleChange(event: React.FocusEvent<HTMLInputElement>) {

        switch (event.target.name) {

            case 'isbn':
                if (event.target.value != '')
                    this.setState({ isbn: { ...this.state.isbn, errorstate: false } })
                else
                    this.setState({ isbn: { ...this.state.isbn, errorstate: true } });
                break;
            case 'returnedon':
                if (event.target.value != '')
                    this.setState({ returnedon: { ...this.state.returnedon, errorstate: false } })
                else
                    this.setState({ returnedon: { ...this.state.returnedon, errorstate: true } });
                break;
                default: break;
        }

    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Typography variant="h6" gutterBottom>
                    Return a Library Item
              </Typography>
                <form className={classes.container} noValidate autoComplete="off">
                    <Grid container spacing={32}>
                        <Grid item xs={8} sm={3}>
                            <TextField
                                id="standard-select-libraryitem"
                                select
                                label="Select"
                                className={classes.textField}
                                value={this.state.libraryitem}
                                SelectProps={{
                                    MenuProps: {
                                        className: classes.menu,
                                    },
                                }}
                                helperText="Please select a Library Item "
                                margin="normal"
                            >
                                {libraryitem.map(option => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <TextField
                                required
                                id="standard-required"
                                label="ISBN"
                                error={this.state.isbn.errorstate}
                                className={classes.textField}
                                onBlur={this.handleChange.bind(this)}
                                margin="normal"
                                name='isbn'
                            />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                        <TextField
                            required
                            id="standard-required"
                            label="Returned On"
                            className={classes.textField}
                            error={this.state.returnedon.errorstate}
                            onBlur={this.handleChange.bind(this)}
                            margin="normal"
                            name='returned'
                            helperText="(DD/MM/YYYY)"
                        />
                    </Grid>
                       
                        <Grid item xs={12} >
                        <Button size="large" variant="contained" color="secondary" className={classes.button} >
                                Return
                           </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>

        );
    }
}

export default withStyles(styles)(ReturnItem);

