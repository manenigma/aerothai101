import React from "react";
import { connect } from "react-redux";

import Card from "../components/card.component";

import { selectEquipmentsSection } from "../vendors/redux/equipment/equipment.selector";
import { selectSitesArray, selectTower } from '../vendors/redux/site/site.selector'

import ButtonSeclector from '../components/button.selector'

const PreventiveMaintenance = ({ equipmentsSection, sitesArray, towers }) => {
	console.log(sitesArray)

	return (
		<div className="pmi-container">
			<div className="header">Preventive Maintenance</div>
			<ButtonSeclector />
			<div className="items-container">
				{sitesArray.map((siteObj) => {
					// console.log(siteObj)

					const { id, abbreviation, name, imageUrl } = siteObj;
					return <Card key={id} heading={[name, abbreviation]} imageUrl={imageUrl} details={siteObj.towers} />;
				})}
			</div>
			{/* <div className="items-container">
				{equipmentsSection.map((equipment) => {
					// console.log(equipment)
					const { id, ...ohterProps } = equipment;
					return <Card key={id} ohterProps={ohterProps}/>;
				})}
			</div> */}
			<div className="footer">&#169; ce.se.</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		equipmentsSection: selectEquipmentsSection(state),
		sitesArray: selectSitesArray(state),
		towers: selectTower(state)
	};
};

export default connect(mapStateToProps)(PreventiveMaintenance);
