import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './style.css'
import { InlineTextField } from '../../components'
import {
  updateDashboardName
} from './actions'

const mapStateToProps = ({ dashboards, router }) => {
  const id = router.location.pathname.slice(-1)
  return ({ value: dashboards[id] ? dashboards[id].name : null })
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  submit: name => dispatch(
    updateDashboardName(name, ownProps.location.pathname.slice(-1))
  )
})

const InlineTextFieldContainer =
  withRouter(connect(mapStateToProps, mapDispatchToProps)(InlineTextField))

export default InlineTextFieldContainer