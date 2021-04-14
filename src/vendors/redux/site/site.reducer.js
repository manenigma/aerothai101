import SITES_DETAIL from '../../../base/data/sites-detail'

const INITIAL_STATE = SITES_DETAIL

const siteReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default siteReducer