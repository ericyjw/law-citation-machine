import React from "react";

const ParaRangeSection = () => {
  const classes = useStyles();

  return (
    <div>
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
    </div>
  );
};

const useStyles = makeStyles({
    label: {
      height: 48,
      paddingTop: 20,
    },
  });

export default ParaRangeSection;
