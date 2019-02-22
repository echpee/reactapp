import * as React from 'react';
import { StyleRules, Theme, withStyles } from '@material-ui/core/styles';
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
const CustomTableCell = withStyles((theme: Theme): StyleRules => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

const styles = (theme: Theme): StyleRules => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,

      },

      row: {
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.background.default,
        },
      },

});

let id = 0;
function createData(ISBN:String, Title:String, Type:String) {
  id += 1;
  return { id,ISBN, Title, Type };
}

const rows = [
  createData('ISBN1200', "Java Introduction","Book"),
  createData('ISBN1233', "Numerical Analysis","Book"),
  createData('ISBN3333', "Typescript Programming","DVD"),
];

class DisplayItem extends React.Component<IWMProps, any> {
    constructor(props: any) {
        super(props);
    }

   

   

    render() {
        const { classes } = this.props;


        return (
          <div className={classes.root}>
          <Typography variant="h6" gutterBottom>
             Display Items
        </Typography>
              <Grid container spacing={24}>
                  <Grid item xs={8} >
            <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <CustomTableCell>ISBN</CustomTableCell>
                  <CustomTableCell >Title</CustomTableCell>
                  <CustomTableCell >Type</CustomTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => {
                  return (
                    <TableRow className={classes.row} key={row.id}>
                      <CustomTableCell component="th" scope="row">
                        {row.ISBN}
                      </CustomTableCell>
                      <CustomTableCell >{row.Title}</CustomTableCell>
                      <CustomTableCell >{row.Type}</CustomTableCell>

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



export default withStyles(styles)(DisplayItem);

