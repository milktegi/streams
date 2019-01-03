// 일단은 함수형으로
// 클베로 전환
import React, { Component } from 'react';

// 폼 수입
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
  renderInput({ input, label }) {
    return (
      <div className="row">
        <div className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">mode_edit</i>
              <label>{label}</label>
              <input {...input} />
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

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate);
