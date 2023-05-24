import { combineReducers, configureStore } from '@reduxjs/toolkit';
import  QuestionRedcuer  from './QuestionReducer'
import  ResultReducer  from './ResultReducer'
const rootReducer = combineReducers({
    questions: QuestionRedcuer,
    results: ResultReducer
})
export default configureStore({ reducer : rootReducer});