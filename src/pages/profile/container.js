import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import { fetchTrending } from '../../redux/trending/actions'
import Component from './component'

const mapStateToProps = ({ user }) => ({
  profile: user.profile
})

// function mapDispatchToProps (dispatch) {
//   return {
//     fetchTrending: () => dispatch(fetchTrending())
//   }
// }

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Component)
