import { createSlice } from "@reduxjs/toolkit";

/** create reducer */
export const QuestionReducer = createSlice({
    name: 'questions',
    initialState : {
        queue: [],
        answers : [],
        trace : 0
    },
    reducers:{
        startExamAction : (state, action) =>{
            let {question,answers}  = action.payload
            return {
                ...state,
                queue : question,
                answers
            }
        },
        moveNextAction : (state) => {
            return {
                ...state,
                trace : state.trace + 1
            }
        },
        movePrevAction : (state) => {
            return {
                ...state,
                trace : state.trace - 1
            }
        },
       
        resetAllAction : () => {
            return {
                queue: [],
                answers : [],
                trace : 0
            }
        }
    
    }
})
export const { startExamAction, moveNextAction, movePrevAction, resetAllAction } = QuestionReducer.actions;
//, resetAllAction
export default QuestionReducer.reducer;