/**
 * Copyright (C) NextGen Technology Solutions, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Written by NextGen <info@ngstek.com>, Jan 2020
 */

 const initialState = {
	bannersList: [],
	bannersCount: 0
};

const LoginReducer = (state = initialState, action) => {
	const newState = { ...state };
	switch (action.type) {
		case 'SET_AD_BANNERS_LIST_RES':
			if (action.data.statusCode == '0000') {
				newState.bannersList = action.data.statusResult.bannersList;
				newState.bannersCount = action.data.statusResult.bannersCount;
			} else if (action.data.statusCode == '9997') {
				newState.bannersList = [];
				newState.bannersCount = 0;
			}
			break;
	}
	return newState;
}
export default LoginReducer;