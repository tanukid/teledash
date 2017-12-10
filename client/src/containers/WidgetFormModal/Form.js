import React from 'react'
import {
  FormGroup,
  Classes,
  InputGroup,
  Button,
  Intent
} from '@blueprintjs/core'
import { connect } from 'react-redux'
import {
  addWidget,
  writeWidgetForm,
} from './actions'

const Form = ({
  types,
  submit,
  onFormChange,
  widgetForm
}) => (
    <div className={`${Classes.DIALOG_BODY} ${Classes.DARK}`}>
      <form onSubmit={(event) => {
        event.preventDefault()
        submit({ ...widgetForm })
      }}
      >
        <FormGroup
          className={`${Classes.DARK}`}
          label="Name"
          labelFor="name"
          required
        >
          <InputGroup
            className={`${Classes.DARK}`}
            onChange={onFormChange}
            id="name"
            name="name"
            placeholder="Enter name..."
          />
        </FormGroup>
        <FormGroup
          className={`${Classes.DARK}`}
          label="Type"
          labelFor="type"
          required
        >
          <div className={`${Classes.DARK} ${Classes.FILL} ${Classes.SELECT}`}>
            <select
              onChange={onFormChange}
              defaultValue=""
              name="type"
            >
              <option defaultValue>Choose type...</option>
              <option value="video">Video</option>
              <option value="line_graph">Line Graph</option>
              <option value="map">Map</option>
            </select>
          </div>
        </FormGroup>
        <div className={`${Classes.DIALOG_FOOTER} ${Classes.DARK}`}>
          <div className={`${Classes.DIALOG_FOOTER_ACTIONS} ${Classes.DARK}`}>
            <Button
              text="Cancel"
            />
            <Button
              type="submit"
              intent={Intent.PRIMARY}
              text="Save"
            />
          </div>
        </div>
      </form>
    </div >
)

const mapDispatchToProps = dispatch => ({
  submit: formData => dispatch(addWidget(formData)),
  onFormChange: ({ target }) => {
    const { name, value } = target
    dispatch(writeWidgetForm({ [name]: value }))
  }
})

const mapStateToProps = ({ widgetForm }) => ({
  widgetForm
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)