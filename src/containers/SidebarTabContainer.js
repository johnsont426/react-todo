import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { SidebarTab } from '../components'
import * as sidebarActionCreators from '../redux/modules/sidebar'

class SidebarTabContainer extends Component {
	getTodoCount (tabName) {
		if (tabName === 'All Todos') {
			return this.props.allTodosArray.length
		} else if (tabName === 'Completed') {
			return this.props.allTodosArray.filter((ele) => ele.isDone === true).length
		} else {
			return this.props.allTodosArray.filter((ele) => ele.isDone === false).length
		}
	}
	render () {
		return <SidebarTab 
			tabName={this.props.tabName}
			todoCount={this.getTodoCount(this.props.tabName)}
			updateActivated={this.props.updateActivated}
			isActivated={this.props.activated === this.props.tabName}
			closeSidebar={this.props.closeSidebar} />
	}
}

SidebarTabContainer.propTypes = {
	allTodosArray: PropTypes.array.isRequired,
	tabName: PropTypes.string.isRequired,
	updateActivated: PropTypes.func.isRequired,
	activated: PropTypes.string.isRequired,
	closeSidebar: PropTypes.func.isRequired,
}

function mapStateToProps ({sidebar, todos}) {
  return {
  	activated: sidebar.get('activated'),
  	allTodosArray: todos.get('allTodosArray').toJS(),
  }
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators(sidebarActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarTabContainer)