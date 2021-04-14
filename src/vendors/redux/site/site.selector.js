import { createSelector } from "reselect";

export const selectSitesObject = (state) => {
	return state.sites;
};

export const selectSitesArray = createSelector([selectSitesObject], (site) => {
	// console.log(site)
	return Object.keys(site).map((key) => {
		return site[key];
	});
});

export const selectTower = createSelector([selectSitesObject], (site) => {
	// console.log(site)
	return Object.keys(site).map((key) => site[key].towers);
});
