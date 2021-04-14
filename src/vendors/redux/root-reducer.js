import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import equipmentReducer from './equipment/equipment.reducer';
import siteReducer from './site/site.reducer';

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["user"],
};

const rootReducer = combineReducers({
	user: userReducer,
	equipments: equipmentReducer,
	sites: siteReducer,
});

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export default persistedRootReducer;
