import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { SidebarTab } from '../components'
import * as sidebarActionCreators from '../redux/modules/sidebar'

class SidebarTabContainer extends Component {
	getTodoCount (tabName) {
		if (tabName === 'All Todos') {
			return this.props.allTodosArray.size
		} else if (tabName === 'Completed') {
			return this.props.allTodosArray.filter((ele) => ele.get('isDone') === true).size
		} else {
			return this.props.allTodosArray.filter((ele) => ele.get('isDone') === false).size
		}
	}
	render () {
		return <SidebarTab 
			tabName={this.props.tabName}
			todoCount={this.getTodoCount(this.props.tabName)}
			updateActivated={this.props.updateActivated}
			isActivated={this.props.activated === this.props.tabName}/>
	}
}

function mapStateToProps ({sidebar, todos}) {
  return {
  	activated: sidebar.get('activated'),
  	allTodosArray: todos.get('allTodosArray'),
  }
}

function mapDispatchToProps (dispatch) {
	return bindActionCreators(sidebarActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarTabContainer)