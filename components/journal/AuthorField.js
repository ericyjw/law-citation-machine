import React from "react";
import { Field } from "react-final-form";
import { Grid, TextField } from "@material-ui/core";

function AuthorField() {
  return (
    <Grid
      container
      style={{ justifyContent: "space-between", marginBottom: 20 }}
    >
      <Grid item>
        <Field
          style={{ width: 300 }}
          required
          fullWidth
          name="firstName"
          component={TextField}
          type="text"
          placeholder="First Name"
        />
      </Grid>
      <Grid item>
        <Field
          style={{ width: 300 }}
          fullWidth
          name="middleNametle"
          component={TextField}
          type="text"
          placeholder="Middle Name"
        />
      </Grid>
      <Grid>
        <Field
          style={{ width: 300 }}
          required
          fullWidth
          name="lastName"
          component={TextField}
          type="text"
          placeholder="Last Name"
        />
      </Grid>
    </Grid>
  );
}

export default AuthorField;
