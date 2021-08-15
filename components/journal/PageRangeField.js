import React from "react";
import { Field } from "react-final-form";
import { Grid, Typography, TextField, IconButton} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import { EN_DASH } from "../../constants/special_char";

const PAGE_TYPE = {
  START: "startPage",
  END: "endPage",
}

const PageRangeField = ({ index, page, setStartPage, setEndPage, deletePageRange, count}) => {
  return (
    <Grid container style={{ marginBottom: 20 }}>
      {PageField(PAGE_TYPE.START, index, page, setStartPage)}
      <Typography variant="h5" style={{ paddingLeft: 20, paddingRight: 20 }}>
        {EN_DASH}
      </Typography>
      {PageField(PAGE_TYPE.END, index, page, setEndPage)}
      {DeleteButton(index, count,  deletePageRange)}
    </Grid>
  );
};

const PageField = (paraType, index, paragraphs, setFunction) => {
  return (
    <Grid item>
      <Field>
        {props => (
          <div>
            <TextField
              name={paraType}
              type="text"
              required={paraType === PAGE_TYPE.START}
              placeholder={getPlaceHolder(paraType)}
              value={getValue(paraType, paragraphs)}
              onChange={(e) => setFunction(index, e.target.value)}
            />
          </div>
        )}
      </Field>
    </Grid>
  )
}

const DeleteButton = (index, count, deletePageRange) => {
  return (
    <Grid item>
      <div style={{ width: 50 }}>
        {count > 1 && <IconButton onClick={() => deletePageRange(index)}>
          <DeleteIcon />
        </IconButton>}
      </div>
    </Grid>);
}

const getValue = (pageType, page) => {
  switch (pageType) {
    case PAGE_TYPE.START:
      return page.start;
    case PAGE_TYPE.END:
      return page.end;
    default:
      return "";
  }
}

const getPlaceHolder = (pageType) => {
  switch (pageType) {
    case PAGE_TYPE.START:
      return "Start";
    case PAGE_TYPE.END:
      return "End";
    default:
      return "";
  }
}

export default PageRangeField;
