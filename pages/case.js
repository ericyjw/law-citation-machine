import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import { Typography, Paper, Grid, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import AuthorFields from "../components/journal/AuthorField";
import ParagraphField from "../components/journal/ParaRangeField";
import PageRangeField from "../components/journal/PageRangeField";

import { submitFormToServer } from "../services/journalService";
import { useRouter } from "next/router";
import { useReducer } from "react";

import AppContext from "../context/app-context";
import { useContext } from "react";

import DateFnsUtils from '@date-io/date-fns';
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import moment from "moment";

import Result from "./result";

const Case = () => {
  const classes = useStyles();

  const [formatted, setFormatted] = useState("");
  const [formField, setFormField] = useState({
    authors: [
      {
        firstName: "",
        middleName: "",
        lastName: "",
      },
    ],
    year: moment().format("YYYY"),
    paraRanges: [{ start: "", end: "" }],
    pageRanges: [{ start: "", end: "" }],
  });

  const [range, setRange] = useState("paragraph");

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

  /* ===== Year ===== */
  const handleYearChange = (newYear) => {
    newYear = moment(newYear).format("YYYY")
    console.log("newYear => ", newYear)
    setFormField({
      ...formField,
      year: newYear,
    });
  }

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
    const formatted = await submitFormToServer({ ...formField, ...values });
    setFormatted(formatted);
  };

  return (
    <div>
      {formatted !== ""
        ? <Result result={formatted} clearResult={setFormatted}></Result>
        : <div style={{ padding: 16, minWidth: 600 }}>
          <Typography variant="h4" align="center" component="h1" gutterBottom>
            Case
          </Typography>
          <Paper elevation={3} style={{ padding: 20 }}>
            <Form
              onSubmit={onSubmit}
              render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                  <Grid container alignItems="flex-start" spacing={2}>
                    {/* ===== Name ===== */}
                    <label className={classes.label}>Case Name</label>
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
                    {/* ===== Case Citation ===== */}
                    <label className={classes.label}>Year of Publication</label>
                    <Grid style={{ padding: 0 }} item xs={12}>
                      <Field name="year">
                        {({ input }) => (
                          <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DatePicker
                              value={formField.year}
                              onChange={handleYearChange}
                              views={["year"]}
                              maxDate={new Date()}
                            />

                          </MuiPickersUtilsProvider>
                        )}
                      </Field>
                    </Grid>

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
                  {/* <pre>{JSON.stringify(values, 0, 2)}</pre>
              <pre>{values}</pre> */}
                </form>
              )}
            />
          </Paper>
        </div>
      }
    </div>);


};

const useStyles = makeStyles({
  label: {
    height: 48,
    paddingTop: 20,
  },
});

export default Case;
