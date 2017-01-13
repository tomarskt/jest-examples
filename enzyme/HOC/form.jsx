import React from 'react'
import { Field, reduxForm} from 'redux-form'

const Form = props => (
  <form {...props}>
    <Field component="input" name="title" />
    <Field component="textarea" name="description" />
  </form>
)

export default reduxForm({
  form: 'foo',
})(Form)