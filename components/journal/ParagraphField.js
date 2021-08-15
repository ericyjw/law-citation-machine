import React from "react";
import { Field } from "react-final-form";
import { Grid, Typography, TextField } from "@material-ui/core";
import { EN_DASH } from "../../constants/special_char";

const ParagraphField = ({ index, setStartPara, setEndPara }) => {
  return (
    <Grid container style={{ marginBottom: 20 }}>
      <Grid item>
        <Field
          // required
          name="startPara"
          component={TextField}
          type="text"
          placeholder="Start"
          onChange={(e) => setStartPara(index, e.target.value)}
        />
      </Grid>
      <Typography variant="h5" style={{ paddingLeft: 20, paddingRight: 20 }}>
        {EN_DASH}
      </Typography>
      <Grid>
        <Field
          name="endPara"
          component={TextField}
          type="text"
          placeholder="End"
          onChange={(e) => setEndPara(index, e.target.value)}
        />
      </Grid>
    </Grid>
  );
};

export default ParagraphField;
