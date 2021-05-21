import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { TextField, Checkbox, Radio } from "final-form-material-ui";
import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  InputLabel,
  FormControlLabel,
  Icon,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import AuthorFields from "../components/journal/AuthorField";
import ParagraphField from "../components/journal/ParagraphField";
import PageRangeField from "../components/journal/PageRangeField";

const Journal = () => {

  if (typeof window === "undefined") {
    return <h1>Error</h1>
  }
  
  const classes = useStyles();

  const [formField, setFormField] = useState({
    name: "",
    authors: [
      {
        firstName: "",
        middleName: "",
        lastName: "",
      },
    ],
    publicationYear: "",
    journalName: "",
    volNum: "",
    xxx: "",
    paraRanges: [{ start: "", end: "" }],
    pageRanges: [{ start: "", end: "" }],
  });

  const addAuthor = () => {
    setFormField({
      ...formField,
      authors: [
        ...formField.authors,
        {
          firstName: "",
          middleName: "",
          lastName: "",
        },
      ],
    });
  };

  const addPara = () => {
    setFormField({
      ...formField,
      paraRanges: [...formField.paraRanges, { start: "", end: "" }],
    });
  };

  const addPage = () => {
    setFormField({
      ...formField,
      pageRanges: [...formField.pageRanges, { start: "", end: "" }],
    });
  };

  return (
    <div style={{ padding: 16, minWidth: 600 }}>
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        Journal / Article
      </Typography>

      <Form
        onSubmit={() => console.log("submit!")}
        validate={() => console.log("validating")}
        render={({ handleSubmit, reset, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper elevation={3} style={{ padding: 20 }}>
              <Grid container alignItems="flex-start" spacing={2}>
                {/* ===== Name ===== */}
                <label className={classes.label}>Journal / Article Name</label>
                <Grid style={{ padding: 0 }} item xs={12}>
                  <Field
                    style={{}}
                    required
                    fullWidth
                    name="title"
                    component={TextField}
                    type="text"
                    placeholder="Journal/Article Name"
                  />
                </Grid>

                {/* ===== Authors ===== */}
                <label className={classes.label}>Author(s)</label>
                {formField.authors.map((item, idx) => {
                  return <AuthorFields key={idx} />;
                })}
                <Grid container>
                  <Button
                    style={{ marginTop: 10 }}
                    variant="contained"
                    color="secondary"
                    onClick={addAuthor}
                  >
                    Add Author
                  </Button>
                </Grid>

                {/* ===== Year of Publication ===== */}
                <label className={classes.label}>Year of Publication</label>
                <Grid style={{ padding: 0 }} item xs={12}>
                  <Field
                    required
                    name="year"
                    component={TextField}
                    type="text"
                    placeholder="Year"
                  />
                </Grid>
                {/* ===== Journal Name ===== */}
                <label className={classes.label}>Journal Name</label>
                <Grid style={{ padding: 0 }} item xs={12}>
                  <Field
                    required
                    fullWidth
                    name="journalName"
                    component={TextField}
                    type="text"
                    placeholder="Journal Name"
                  />
                </Grid>
                {/* ===== Volume Number ===== */}
                <label className={classes.label}>Volume Number</label>
                <Grid style={{ padding: 0 }} item xs={12}>
                  <Field
                    required
                    name="volNum"
                    component={TextField}
                    type="text"
                    placeholder="Volume Number"
                  />
                </Grid>
                {/* ===== XXX ===== */}
                <label className={classes.label}>XXX</label>
                <Grid style={{ padding: 0 }} item xs={12}>
                  <Field
                    required
                    name="xxx"
                    component={TextField}
                    type="text"
                    placeholder="Cannot read from the image"
                  />
                </Grid>
                {/* ===== Paragraph ===== */}
                <label className={classes.label}>Paragraph(s)</label>
                {formField.paraRanges.map((item, idx) => {
                  return <ParagraphField key={idx} />;
                })}
                <Grid container>
                  <Button
                    style={{ marginTop: 10 }}
                    variant="contained"
                    color="secondary"
                    onClick={addPara}
                  >
                    Add Paragraph
                  </Button>
                </Grid>
                {/* ===== Page Range ===== */}
                <label className={classes.label}>Page Range(s)</label>
                {formField.pageRanges.map((item, idx) => {
                  return <PageRangeField key={idx} />;
                })}
                <Grid container>
                  <Button
                    style={{ marginTop: 10 }}
                    variant="contained"
                    color="secondary"
                    onClick={addPage}
                  >
                    Add Page Range
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </form>
        )}
      />
    </div>
  );
};

const useStyles = makeStyles({
  label: {
    height: 48,
    paddingTop: 20,
  },
});

export default Journal;
