import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import React from "react";
import {required} from "../../utils/validators/validators";

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea}
               validate={[required]}
               name={'newMessageBody'} placeholder={'Enter your message'}/>
      </div>
      <div>
        <button>Add message</button>
      </div>
    </form>
  )
}

export default AddMessageForm