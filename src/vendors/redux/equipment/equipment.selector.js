import { createSelector } from "reselect";

export const selectEquipments = (state) => {
	return state.equipments
}

export const selectEquipmentsSection = createSelector(
	[selectEquipments],
	(equipment) => {
		return Object.keys(equipment).map((key) => {
			return {
			  id: equipment[key].id,
			  name: key,
			  title: equipment[key].title,
			  imageUrl: equipment[key].imageUrl
			}
		  })
	}
)