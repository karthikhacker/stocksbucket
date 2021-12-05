import { combineReducers } from "redux";
import watchlists from "./watchlists";
import ticker from './ticker';
import asset from './asset';
import auth from './auth';
export default combineReducers({
    watchlists,
    ticker,
    asset,
    auth
})