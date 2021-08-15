import React from "react";
import { Field } from "react-final-form";
import { Grid, TextField, IconButton } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

const NAME_TYPE = {
  FIRST_NAME: "firstName",
  MIDDLE_NAME: "middleName",
  LAST_NAME: "lastName"
}

const AuthorField = ({ author, index, setFirstName, setMiddleName, setLastName, deleteAuthor, count}) => {
  return (
    <Grid
      container
      style={{ justifyContent: "space-between", marginBottom: 10, marginTop: 10 }}
    >
      {NameField(NAME_TYPE.FIRST_NAME, index, author, setFirstName)}
      {NameField(NAME_TYPE.MIDDLE_NAME, index, author, setMiddleName)}
      {NameField(NAME_TYPE.LAST_NAME, index, author, setLastName)}
      {DeleteButton(index, count, deleteAuthor)}
    </Grid>
  );
};

const NameField = (nameType, index, author, setFunction) => {
  return (
    <Grid item xs={3}>
      <Field style={{ width: 300 }}>
        {props => (
          <div>
            <TextField
              fullWidth
              name={nameType}
              type="text"
              required={nameType !== NAME_TYPE.MIDDLE_NAME}
              placeholder={getPlaceHolder(nameType)}
              value={getValue(nameType, author)}
              onChange={(e) => setFunction(index, e.target.value)}
            />
          </div>
        )}
      </Field>
    </Grid>
  )
}

const DeleteButton = (index, count, deleteAuthor) => {
  return (
    <Grid item>
      <div style={{ width: 50 }}>
        {count > 1 && <IconButton onClick={() => deleteAuthor(index)} >
          <DeleteIcon />
        </IconButton>}
      </div>
    </Grid>);
}

const getValue = (nameType, author) => {
  switch (nameType) {
    case NAME_TYPE.FIRST_NAME:
      return author.firstName;
    case NAME_TYPE.MIDDLE_NAME:
      return author.middleName;
    case NAME_TYPE.LAST_NAME:
      return author.lastName;
    default:
      return "";
  }
}

const getPlaceHolder = (nameType) => {
  switch (nameType) {
    case NAME_TYPE.FIRST_NAME:
      return "First Name";
    case NAME_TYPE.MIDDLE_NAME:
      return "Middle Name";
    case NAME_TYPE.LAST_NAME:
      return "Last Name";
    default:
      return "";
  }
}

export default AuthorField;
