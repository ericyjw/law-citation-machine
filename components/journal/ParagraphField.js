import React from "react";
import { TextField } from "final-form-material-ui";
import { Field } from "react-final-form";
import { Grid, Typography } from "@material-ui/core";

function ParagraphField() {
  return (
    <Grid container style={{ marginBottom: 20 }}>
      <Grid item>
        <Field
          required
          name="startPara"
          component={TextField}
          type="text"
          placeholder="Start"
        />
      </Grid>
      <Typography variant="h5" style={{ paddingLeft: 20, paddingRight: 20 }}>
        -
      </Typography>
      <Grid>
        <Field
          required
          name="endPara"
          component={TextField}
          type="text"
          placeholder="End"
        />
      </Grid>
    </Grid>
  );
}

export default ParagraphField;
