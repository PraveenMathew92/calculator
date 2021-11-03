import { actionHandlers } from './../constants/ActionHandlers';

export const createReducer = (initialState = {}, handlers = actionHandlers) => (
	 (state = initialState, action) => (
		(actionHandlers.hasOwnProperty(action.type))?
			actionHandlers[action.type](state, action):
		state
	)
)