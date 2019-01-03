// 일단은 함수형으로
// 클베로 전환
import React, { Component } from 'react';

// 폼 수입
import { Field, reduxForm } from 'redux-form';


 
class StreamCreate extends Component {
	renderError({ error, touched }) {
	 if(touched && error) {
		 return (
		 <span className="helper-text red-text" data-error="wrong" data-success="right">
			 {error}
		 </span>
		 )
	 }
 }

  renderInput = ({ input, label, meta }) => {
		console.log(meta);
		// property touched
    return (
      <div className="row">
        <div className="col s12">
          <div className="row">
            <div className="input-field col s12">
             <i className="material-icons prefix">account_circle</i>
              <label for="icon_prefix">{label}</label>
							
              <input {...input} 
							autoComplete="off"
							/>
							<div>{this.renderError(meta)}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

	// 이벤트 
	onSubmit(formValues){
		// event.preventDefault();
		console.log(formValues);
	}

  render() {
    // console.log(this.props);
    return (
      <form
			onSubmit={this.props.handleSubmit(this.onSubmit)}
			>
        <Field
          name="title"
          component={this.renderInput}
          label="ㅇ"
        />
        <Field
          name="description"
          component={this.renderInput}
          label="ㄴ"
        />
				<a className="waves-effect waves-light btn">Submit</a>
      </form>
			
    );
  }
}

const validate = formValues => {
	const errors = {}
	if(!formValues.title) {
		errors.title = '제목을 입력해주세요'
	}
	if(!formValues.description){
		errors.description = '설명을 입력해주세요'
	}
	return errors;
};

export default reduxForm({
  form: 'streamCreate',
	validate
})(StreamCreate);
