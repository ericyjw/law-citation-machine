import React from "react";
import { Field } from "react-final-form";
import { Grid, TextField } from "@material-ui/core";

const AuthorField = () => {
  return (
    <Grid
      container
      style={{ justifyContent: "space-between", marginBottom: 20 }}
    >
      <Grid item>
        <Field name="firstName" type="text">
          {({ input }) => (
            <TextField
              style={{ width: 300 }}
              required
              fullWidth
              placeholder="First Name"
              inputProps={input}
            />
          )}
        </Field>
      </Grid>
      <Grid item>
        <Field name="middleName" type="text">
          {({ input }) => (
            <TextField
              style={{ width: 300 }}
              fullWidth
              placeholder="Middle Name"
              inputProps={input}
            />
          )}
        </Field>
      </Grid>
      <Grid>
        <Field name="lastName" type="text">
          {({ input }) => (
            <TextField
              style={{ width: 300 }}
              required
              fullWidth
              placeholder="Last Name"
              inputProps={input}
            />
          )}
        </Field>
      </Grid>
    </Grid>
  );
};

export default AuthorField;
