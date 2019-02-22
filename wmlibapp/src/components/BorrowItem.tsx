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
    borrowedon: IForm;
    id: IForm;
    name: IForm;
    mobilenumber: IForm;
    email: IForm;

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

class BorrowItem extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            isbn: { name: '', value: '', errorstate: false },
            borrowedon: { name: '', value: '', errorstate: false },
            id: { name: '', value: '', errorstate: false },
            name: { name: '', value: '', errorstate: false },
            mobilenumber: { name: '', value: '', errorstate: false },
            email: { name: '', value: '', errorstate: false },
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
            case 'borrowedon':
                if (event.target.value != '')
                    this.setState({ borrowedon: { ...this.state.borrowedon, errorstate: false } })
                else
                    this.setState({ borrowedon: { ...this.state.borrowedon, errorstate: true } });
                break;
            case 'id':
                if (event.target.value != '')
                    this.setState({ id: { ...this.state.id, errorstate: false } })
                else
                    this.setState({ id: { ...this.state.id, errorstate: true } });
                break;
            case 'name':
                if (event.target.value != '')
                    this.setState({ name: { ...this.state.name, errorstate: false } })
                else
                    this.setState({ name: { ...this.state.name, errorstate: true } });
                break;
            case 'mobilenumber':
                if (event.target.value != '')
                    this.setState({ mobilenumber: { ...this.state.mobilenumber, errorstate: false } })
                else
                    this.setState({ mobilenumber: { ...this.state.mobilenumber, errorstate: true } });
                break;
            case 'email':
                if (event.target.value != '')
                    this.setState({ email: { ...this.state.email, errorstate: false } })
                else
                    this.setState({ email: { ...this.state.email, errorstate: true } });
                break;
            default: break;
        }

    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Typography variant="h6" gutterBottom>
                    Borrow a Library Item
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
                                label="Id"
                                className={classes.textField}
                                error={this.state.id.errorstate}
                                onBlur={this.handleChange.bind(this)}
                                margin="normal"
                                name='id'
                            />
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <TextField
                                required
                                id="standard-required"
                                label="Name"
                                error={this.state.name.errorstate}
                                className={classes.textField}
                                onBlur={this.handleChange.bind(this)}
                                margin="normal"
                                name='name'
                            />
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <TextField
                                id="standard-full-width"
                                label="Mobile Number"
                                error={this.state.mobilenumber.errorstate}
                                onBlur={this.handleChange.bind(this)}
                                margin="normal"
                                name='mobilenumber'
                            />
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <TextField
                                required
                                id="standard-required"
                                label="Email"
                                error={this.state.email.errorstate}
                                className={classes.textField}
                                onBlur={this.handleChange.bind(this)}
                                margin="normal"
                                name='email'
                            />
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <TextField
                                required
                                id="standard-required"
                                label="Borrowed On"
                                className={classes.textField}
                                error={this.state.borrowedon.errorstate}
                                onBlur={this.handleChange.bind(this)}
                                margin="normal"
                                name='borrowedon'
                                helperText="(DD/MM/YYYY)"
                            />
                        </Grid>
                        <Grid item xs={12} >
                        <Button size="large" variant="contained" color="secondary" className={classes.button} >
                                Borrow 
                           </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>

        );
    }
}


export default withStyles(styles)(BorrowItem);




