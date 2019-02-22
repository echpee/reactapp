import * as React from 'react';

import '../lib/common.ts';

import {StyleRules, Theme, withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

interface IWMProps {
    classes?: any;
}

interface IState {
    result : IAPIResponse;
    isLoading : boolean,
    error : string
}

const CustomTableCell = withStyles((theme : Theme) : StyleRules => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    body: {
        fontSize: 14
    }
}))(TableCell);

const styles = (theme : Theme) : StyleRules => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3
    },

    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default
        }
    }
});

class GenerateReport extends React.Component < IWMProps,
IState > {
    constructor(props : any) {
        super(props);
        this.state = {
            result: {
                meta: {
                    code: 0,
                    message: ''
                },
                data: []
            },
            isLoading: false,
            error: ""
        }
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch("/v1/report/inventory/borrowed/1")
            .then(response => response.json())
            .then(data => this.setState({result: data, isLoading: false}))
            .catch(error => this.setState({error, isLoading: false}));

    }

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <Typography variant="h6" gutterBottom>
                    Reports
                </Typography>
                <Grid container spacing={24}>
                    <Grid item xs={8}>
                        <Paper className={classes.root}>
                            <Table className={classes.table}>
                                <TableHead>
                                    <TableRow>
                                        <CustomTableCell>ISBN</CustomTableCell>
                                        <CustomTableCell >Tttle</CustomTableCell>
                                        <CustomTableCell numeric>Days</CustomTableCell>
                                        <CustomTableCell numeric>Library Item</CustomTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this
                                        .state
                                        .result
                                        .data
                                        .map((row, index) => {
                                            return (

                                                <TableRow className={classes.row} key={index}>
                                                    <CustomTableCell component="th" scope="row">
                                                        {row.isbn}
                                                    </CustomTableCell>
                                                    <CustomTableCell numeric>{row.title}</CustomTableCell>
                                                    <CustomTableCell numeric>{row.days}</CustomTableCell>
                                                    <CustomTableCell numeric>{row.itemtype}</CustomTableCell>
                                                </TableRow>
                                            );
                                        })}
                                </TableBody>
                            </Table>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(GenerateReport);
