import React from "react";
import { Field } from "react-final-form";
import { Grid, Typography, TextField } from "@material-ui/core";

const PageRangeField = ({ index, setStartPage, setEndPage }) => {
  return (
    <Grid container style={{ marginBottom: 20 }}>
      <Grid item>
        <Field
          // required
          name="startPara"
          component={TextField}
          type="text"
          placeholder="Start"
          onChange={(e) => setStartPage(index, e.target.value)}
        />
      </Grid>
      <Typography variant="h5" style={{ paddingLeft: 20, paddingRight: 20 }}>
        -
      </Typography>
      <Grid>
        <Field
          // required
          name="endPara"
          component={TextField}
          type="text"
          placeholder="End"
          onChange={(e) => setEndPage(index, e.target.value)}
        />
      </Grid>
    </Grid>
  );
};

export default PageRangeField;
