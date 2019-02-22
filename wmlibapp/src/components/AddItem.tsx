import * as React from 'react';
import {StyleRules, Theme, withStyles} from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface IProps {
    classes?: any;
}

interface IForm {
    name : string,
    value : any,
    errorstate : boolean
}
interface IState {
    isbn : IForm;

    title : IForm;
    sector : IForm;
    authors : IForm;
    publicationdate : IForm;
    publisher : IForm;
    noofpages : IForm;
    libraryitem : string;
    formsItems:any[];
    alertOpen:boolean
}

const styles = (theme : Theme) : StyleRules => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    },
    dense: {
        marginTop: 19
    },
    menu: {
        width: 200
    },
    button: {
        margin: theme.spacing.unit,
        textTransform: 'none'
    },
    root: {
        flexGrow: 1,
        maxWidth: 600,
        padding: theme.spacing.unit * 2
    }
});

const libraryitem = [
    {
        value: 'Book',
        label: 'Book'
    }, {
        value: 'DVD',
        label: 'DVD'
    }
];

class AddItem extends React.Component < IProps,
IState > {
    constructor(props : {}) {
        super(props);
        this.state = {
            isbn: {
                name: '',
                value: '',
                errorstate: false
            },
            title: {
                name: '',
                value: '',
                errorstate: false
            },
            sector: {
                name: '',
                value: '',
                errorstate: false
            },
            authors: {
                name: '',
                value: '',
                errorstate: false
            },
            publicationdate: {
                name: '',
                value: '',
                errorstate: false
            },
            publisher: {
                name: '',
                value: '',
                errorstate: false
            },
            noofpages: {
                name: '',
                value: '',
                errorstate: false
            },
            libraryitem: 'Book',
            formsItems:[],
            alertOpen:false
        }
    }
    
    handleClickOpen = () => {
        this.setState({ alertOpen: true });
      };
    
      handleClose = () => {
        this.setState({ alertOpen: false });
      };

    handleAdd(event : React.MouseEvent < HTMLInputElement >) {
        let autharray:string[]=this.state.authors.value.split(',');
        if(this.state.isbn.value!=''){
        let addBook = {
            "LibraryItem": {
                "itemId": 0,
                "isbn": this.state.isbn.value,
                "title": this.state.title.value,
                "publicationDate": this.state.publicationdate.value,
                "sector": this.state.sector.value
            },
            "publisher": this.state.publisher.value,
            "authors": autharray,
            "numberOfPages": this.state.noofpages.value
        };
        
        this
        .postData('/v1/book', addBook)
        .then(data => {
            console.log(data);
           this.handleClickOpen();
        }) // JSON-string from `response.json()` call
        .catch(error => console.error(error));
    }
    }
    handleChange(event : React.FocusEvent < HTMLInputElement >) {

        switch (event.target.name) {

            case 'isbn':
                if (event.target.value != '') 
                    this.setState({
                        isbn: {
                            ...this.state.isbn,
                            value:event.target.value,
                            errorstate: false
                        }
                    })
                else 
                    this.setState({
                        isbn: {
                            ...this.state.isbn,
                            value:event.target.value,
                            errorstate: true
                        }
                    });
                break;
            case 'title':
                if (event.target.value != '') 
                    this.setState({
                        title: {
                            ...this.state.title,
                            value:event.target.value,
                            errorstate: false
                        }
                    })
                else 
                    this.setState({
                        title: {
                            ...this.state.title,
                            value:event.target.value,
                            errorstate: true
                        }
                    });
                break;
            case 'sector':
                if (event.target.value != '') 
                    this.setState({
                        sector: {
                            ...this.state.sector,
                            value:event.target.value,
                            errorstate: false
                        }
                    })
                else 
                    this.setState({
                        sector: {
                            ...this.state.sector,
                            value:event.target.value,
                            errorstate: true
                        }
                    });
                break;
                break;
            case 'authors':
                if (event.target.value != '') 
                    this.setState({
                        authors: {
                            ...this.state.authors,
                            value:event.target.value,
                            errorstate: false
                        }
                    })
                else 
                    this.setState({
                        authors: {
                            ...this.state.authors,
                            value:event.target.value,
                            errorstate: true
                        }
                    });
                break;
                break;
            case 'publicationdate':
                if (event.target.value != '') 
                    this.setState({
                        publicationdate: {
                            ...this.state.publicationdate,
                            value:event.target.value,
                            errorstate: false
                        }
                    })
                else 
                    this.setState({
                        publicationdate: {
                            ...this.state.publicationdate,
                            value:event.target.value,
                            errorstate: true
                        }
                    });
                break;
                break;
            case 'publisher':
                if (event.target.value != '') 
                    this.setState({
                        publisher: {
                            ...this.state.publisher,
                            value:event.target.value,
                            errorstate: false
                        }
                    })
                else 
                    this.setState({
                        publisher: {
                            ...this.state.publisher,
                            value:event.target.value,
                            errorstate: true
                        }
                    });
                break;
            case 'noofpages':
                if (event.target.value != '') 
                    this.setState({
                        noofpages: {
                            ...this.state.noofpages,
                            value:event.target.value,
                            errorstate: false
                        }
                    })
                else 
                    this.setState({
                        noofpages: {
                            ...this.state.noofpages,
                            value:event.target.value,
                            errorstate: true
                        }
                    });
                break;
                break;
            default:
                break;
        }

    }

    postData(url = '', data = {}) {
        // Default options are marked with *
        return fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "omit", // include, *same-origin, omit
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        }).then(response => response.json()); // parses response to JSON
    }



    render() : JSX.Element {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Typography variant="h6" gutterBottom>
                    Add a Library Item
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
                                    className: classes.menu
                                }
                            }}
                                helperText="Please select a Library Item "
                                margin="normal">
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
                                onBlur={this
                                .handleChange
                                .bind(this)}
                                margin="normal"
                                name='isbn'/>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <TextField
                                required
                                id="standard-required"
                                label="Title"
                                className={classes.textField}
                                error={this.state.title.errorstate}
                                onBlur={this
                                .handleChange
                                .bind(this)}
                                margin="normal"
                                name='title'/>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <TextField
                                required
                                id="standard-required"
                                label="Sector"
                                error={this.state.sector.errorstate}
                                className={classes.textField}
                                onBlur={this
                                .handleChange
                                .bind(this)}
                                margin="normal"
                                name='sector'/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="standard-full-width"
                                label="Authors"
                                error={this.state.authors.errorstate}
                                helperText="Comma seperated values"
                                onBlur={this
                                .handleChange
                                .bind(this)}
                                fullWidth
                                margin="normal"
                                name='authors'/>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <TextField
                                required
                                id="standard-required"
                                label="Publication Date"
                                error={this.state.publicationdate.errorstate}
                                className={classes.textField}
                                onBlur={this
                                .handleChange
                                .bind(this)}
                                margin="normal"
                                name='publicationdate'
                                helperText="(YYYY-MM-DD)"/>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <TextField
                                required
                                id="standard-required"
                                label="Publisher"
                                className={classes.textField}
                                error={this.state.publisher.errorstate}
                                onBlur={this
                                .handleChange
                                .bind(this)}
                                margin="normal"
                                name='publisher'/>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <TextField
                                required
                                id="standard-required"
                                label="No Of Pages"
                                className={classes.textField}
                                error={this.state.noofpages.errorstate}
                                onBlur={this
                                .handleChange
                                .bind(this)}
                                margin="normal"
                                name='noofpages'/>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                size="large"
                                variant="contained"
                                color="secondary"
                                onClick={this
                                .handleAdd
                                .bind(this)}
                                className={classes.button}>
                                Add
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                <Dialog
                open={this.state.alertOpen}
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">{"WMLIB 2.0"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                   Book was saved successfully!
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose} color="primary" autoFocus>
                    Ok
                  </Button>
                </DialogActions>
              </Dialog>
            </div>

        );
    }
}

export default withStyles(styles)(AddItem);
