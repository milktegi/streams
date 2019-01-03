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

  render() {
    // console.log(this.props);
    return (
      <form>
        <Field
          name="title"
          component={this.renderInput}
          label="제목을 입력하세요"
        />
        <Field
          name="description"
          component={this.renderInput}
          label="설명을 추가할 수 있습니다"
        />
      </form>
    );
  }
}

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate);
