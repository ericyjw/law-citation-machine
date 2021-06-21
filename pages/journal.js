import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { Typography, Paper, Grid, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import AuthorFields from "../components/journal/AuthorField";
import ParagraphField from "../components/journal/ParagraphField";
import PageRangeField from "../components/journal/PageRangeField";

import { submitFormToServer } from "../services/journalService";

const Journal = () => {
  if (typeof window === "undefined") {
    return <h1>Error</h1>;
  }

  const classes = useStyles();

  const [formField, setFormField] = useState({
    authors: [
      {
        firstName: "",
        middleName: "",
        lastName: "",
      },
    ],
    paraRanges: [{ start: "", end: "" }],
    pageRanges: [{ start: "", end: "" }],
  });

  const [range, setRange]= useState("paragraph")

  /* ===== Author Name ===== */
  const addFirstName = (index, firstName) => {
    const author = formField.authors[index];
    author.firstName = firstName;

    formField.authors[index] = author;
    setFormField((prevState) => {
      return {
        ...prevState,
        authors: [...prevState.authors],
      };
    });
  };

  const addMiddleName = (index, middleName) => {
    const author = formField.authors[index];
    author.middleName = middleName;

    formField.authors[index] = author;
    setFormField((prevState) => {
      return {
        ...prevState,
        authors: [...prevState.authors],
      };
    });
  };

  const addLastName = (index, lastName) => {
    const author = formField.authors[index];
    author.lastName = lastName;

    formField.authors[index] = author;
    setFormField((prevState) => {
      return {
        ...prevState,
        authors: [...prevState.authors],
      };
    });
  };

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

  /* ===== Paragraph ===== */
  const setStartPara = (index, paraNum) => {
    const para = formField.paraRanges[index];
    para.start = paraNum;

    setFormField({
      ...formField,
      paraRanges: [...formField.paraRanges],
    });
  };

  const setEndPara = (index, paraNum) => {
    const para = formField.paraRanges[index];
    para.end = paraNum;

    setFormField({
      ...formField,
      paraRanges: [...formField.paraRanges],
    });
  };

  const addPara = () => {
    setFormField({
      ...formField,
      paraRanges: [...formField.paraRanges, { start: "", end: "" }],
    });
  };

  /* ===== Page Range ===== */
  const setStartPage = (index, pageNum) => {
    const page = formField.pageRanges[index];
    page.start = pageNum;

    setFormField({
      ...formField,
      pageRanges: [...formField.pageRanges],
    });
  };

  const setEndPage = (index, pageNum) => {
    const page = formField.pageRanges[index];
    page.end = pageNum;

    setFormField({
      ...formField,
      pageRanges: [...formField.pageRanges],
    });
  };

  const addPage = () => {
    setFormField({
      ...formField,
      pageRanges: [...formField.pageRanges, { start: "", end: "" }],
    });
  };

  const onSubmit = async (values) => {
    submitFormToServer({ ...formField, ...values });
  };

  return (
    <div style={{ padding: 16, minWidth: 600 }}>
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        Journal / Article
      </Typography>
      <Paper elevation={3} style={{ padding: 20 }}>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <Grid container alignItems="flex-start" spacing={2}>
                {/* ===== Name ===== */}
                <label className={classes.label}>Journal / Article Name</label>
                <Grid style={{ padding: 0 }} item xs={12}>
                  <Field name="title" type="text">
                    {({ input }) => (
                      <TextField
                        required
                        fullWidth
                        placeholder="Journal/Article Name"
                        inputProps={input}
                      />
                    )}
                  </Field>
                </Grid>

                {/* ===== Authors ===== */}
                <label className={classes.label}>Author(s)</label>
                {formField.authors.map((item, idx) => {
                  return (
                    <AuthorFields
                      key={idx}
                      index={idx}
                      setFirstName={addFirstName}
                      setMiddleName={addMiddleName}
                      setLastName={addLastName}
                    />
                  );
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
                  <Field name="year">
                    {({ input }) => (
                      <TextField
                        required
                        type="date"
                        placeholder="Year"
                        inputProps={input}
                      />
                    )}
                  </Field>
                </Grid>

                {/* ===== Journal Name ===== */}
                <label className={classes.label}>Journal Name</label>
                <Grid style={{ padding: 0 }} item xs={12}>
                  <Field name="journalName" type="text">
                    {({ input }) => (
                      <TextField
                        required
                        fullWidth
                        type="text"
                        placeholder="Journal Name"
                        inputProps={input}
                      />
                    )}
                  </Field>
                </Grid>

                {/* ===== Volume Number ===== */}
                <label className={classes.label}>Volume Number</label>
                <Grid style={{ padding: 0 }} item xs={12}>
                  <Field name="volNum">
                    {({ input }) => (
                      <TextField
                        required
                        type="number"
                        placeholder="Volume Number"
                        inputProps={input}
                      />
                    )}
                  </Field>
                </Grid>

                {/* ===== First Page of Journal Article ===== */}
                <label className={classes.label}>First Page of Journal Article</label>
                <Grid style={{ padding: 0 }} item xs={12}>
                  <Field name="firstPage">
                    {({ input }) => (
                      <TextField
                        required
                        type="number"
                        placeholder="First Page"
                        inputProps={input}
                      />
                    )}
                  </Field>
                </Grid>

                {/* <label className={classes.label}>Range</label>
                <Grid style={{ padding: 0 }} item xs={12}>
                  <label>
                    <Field
                      component="input"
                      type="radio"
                      value="paragraph"
                      onClick={() => setRange("paragraph")}
                    />
                    Paragraph
                  </label>
                </Grid>
                <Grid style={{ padding: 0 }} item xs={12}>
                  <label>
                    <Field
                      component="input"
                      type="radio"
                      value="page"
                      onClick={() => setRange("page")}
                    />
                    Page
                  </label>
                </Grid> */}

                {/* ===== Paragraph ===== */}
                <label className={classes.label}>Paragraph(s)</label>
                {formField.paraRanges.map((_, idx) => {
                  return (
                    <ParagraphField
                      key={idx}
                      index={idx}
                      setStartPara={setStartPara}
                      setEndPara={setEndPara}
                    />
                  );
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
                  return (
                    <PageRangeField
                      key={idx}
                      index={idx}
                      setStartPage={setStartPage}
                      setEndPage={setEndPage}
                    />
                  );
                })}
              </Grid>
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
              <Grid container>
                <Button
                  style={{ marginTop: 20 }}
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Submit
                </Button>
              </Grid>
              {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
            </form>
          )}
        />
      </Paper>
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
