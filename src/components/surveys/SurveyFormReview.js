import React from 'react';
import {connect} from 'react-redux';
import {submitSurvey} from "../../actions";
import {withRouter} from "react-router-dom";

const SurveyFormReview = ({onCancel, formValues, submitSurvey, history}) => {
  return (
    <div>
      <h5>Please Confirm your entries</h5>
      <div>
        <div>
          <label>Survey Title</label>
          <div>{formValues.title}</div>
        </div>
        <div>
          <label>Subject Line</label>
          <div>{formValues.subject}</div>
        </div>
        <div>
          <label>Email Body</label>
          <div>{formValues.body}</div>
        </div>
        <div>
          <label>Recipients</label>
          <div>{formValues.emails}</div>
        </div>
      </div>
      <button className="yellow darken-3 white-text btn-flat" onClick={onCancel}>Back</button>
      <button className="green white-text btn-flat right" onClick={() => submitSurvey(formValues, history)}>
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values}
}

export default connect(mapStateToProps, {submitSurvey})(withRouter(SurveyFormReview));
