import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <span
          className="helper-text red-text"
          data-error="wrong"
          data-success="right"
        >
          {error}
        </span>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    // console.log(meta);
    // property touched
    return (
      <div className="row">
        <div className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">create</i>
              <label htmlFor="icon_prefix">{label}</label>
              <input {...input} autoComplete="off" />
              <div>{this.renderError(meta)}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // 이벤트
  onSubmit = formValues => {
    // event.preventDefault();
    // console.log(formValues);
    this.props.onSubmit(formValues);
  }

  render() {
    // console.log(this.props);
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} label="제목 입력" />
        <Field name="description" component={this.renderInput} label="설명두" />
        <button className="waves-effect waves-light btn">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.title) {
    errors.title = '제목 입력 까묵지마ㅇㅇ';
  }
  if (!formValues.description) {
    errors.description = '설명두';
  }
  return errors;
};

export default reduxForm({
  form: 'streamForm',
  validate
})(StreamForm);


