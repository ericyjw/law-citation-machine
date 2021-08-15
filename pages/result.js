import { Typography, Paper, Grid, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Result = ({ result, clearResult}) => {
  return (
    <div style={{ padding: 16, minWidth: 600 }}>
      <Paper elevation={3} style={{ padding: 20 }}>
        <Typography variant="h3" align="center" component="h1" gutterBottom>
          This is the formatted result:
        </Typography>
        <Typography variant="h4" align="center" component="h1" gutterBottom>
          {result}
        </Typography>
        <Button variant="contained" color="primary" onClick={() => clearResult("")}>
          Clear
        </Button>
      </Paper>
    </div>
  );
};

const useStyles = makeStyles({});

export default Result;
