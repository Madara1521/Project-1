import {Field} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import React from "react";

const maxLength10 = maxLengthCreator(10)

let AddNewPostForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field name={'newPostText'} component={Textarea} placeholder={'Post message'}
             validate={[required, maxLength10]} />
    </div>
    <div>
      <button>Add post</button>
    </div>
  </form>;
}

export default AddNewPostForm