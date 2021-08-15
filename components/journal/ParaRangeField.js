import React from "react";
import { Field } from "react-final-form";
import { Grid, Typography, TextField, IconButton } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { EN_DASH } from "../../constants/special_char";

const PARA_TYPE = {
  START: "startPara",
  END: "endPara",
}

const ParaRangeField = ({ index, paragraph, setStartPara, setEndPara, deleteParaRange, count }) => {
  return (
    <Grid container style={{ marginBottom: 10, marginTop: 10 }}>
      {ParaField(PARA_TYPE.START, index, paragraph, setStartPara)}
      <Typography variant="h5" style={{ paddingLeft: 20, paddingRight: 20 }}>
        {EN_DASH}
      </Typography>
      {ParaField(PARA_TYPE.END, index, paragraph, setEndPara)}
      {DeleteButton(index, count, deleteParaRange)}
    </Grid>
  );
};

const ParaField = (paraType, index, paragraph, setFunction) => {
  return (
    <Grid item>
      <Field>
        {props => (
          <div>
            <TextField
              name={paraType}
              type="text"
              required={paraType === PARA_TYPE.START}
              placeholder={getPlaceHolder(paraType)}
              value={getValue(paraType, paragraph)}
              onChange={(e) => setFunction(index, e.target.value)}
            />
          </div>
        )}
      </Field>
    </Grid>
  )
}

const DeleteButton = (index, count, deleteParaRange) => {
  return (
    <Grid item>
      <div style={{ width: 50 }}>
        {count > 1 && <IconButton onClick={() => deleteParaRange(index)}>
          <DeleteIcon />
        </IconButton>}
      </div>
    </Grid>);
}

const getValue = (paraType, paragraph) => {
  switch (paraType) {
    case PARA_TYPE.START:
      return paragraph.start;
    case PARA_TYPE.END:
      return paragraph.end;
    default:
      return "";
  }
}

const getPlaceHolder = (paraType) => {
  switch (paraType) {
    case PARA_TYPE.START:
      return "Start";
    case PARA_TYPE.END:
      return "End";
    default:
      return "";
  }
}

export default ParaRangeField;
