import React, {Component} from 'react';
import { reduxForm, Field } from "redux-form";
import SurveyField from "./SurveyField";
import {Link} from "react-router-dom";
import validateEmails from "../../utils/validateEmails";

class SurveyForm extends Component {
  renderFields() {
    return (
      <div>
        <Field type="text" name="title" label="Survey Title" component={SurveyField}/>
        <Field type="text" name="subject" label="Survey Line" component={SurveyField}/>
        <Field type="text" name="body" label="Email Body" component={SurveyField}/>
        <Field type="text" name="emails" label="Recipients List" component={SurveyField}/>
      </div>
    )
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}


function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'You must provide a title';
  }

  if (!values.subject) {
    errors.subject = 'You must provide a subject';
  }

  if (!values.body) {
    errors.body = 'You must provide a body';
  }

  if (!values.emails) {
    errors.emails = 'You must provide emails';
  }

  errors.emails = validateEmails(values.emails || '');

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false
})(SurveyForm);
