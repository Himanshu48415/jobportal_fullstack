import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
    name:"job",
    initialState:{
        allJobs:[],
        allAdminJobs:[],
        singleJob:null, 
        searchJobByText:"",
        allAppliedJobs:[],
        searchedQuery:"",
    },
    reducers:{
        // actions
        setAllJobs:(state,action) => {
            state.allJobs = action.payload;
        },
        setSingleJob:(state,action) => {
            state.singleJob = action.payload;
        },
        setAllAdminJobs:(state,action) => {
            state.allAdminJobs = action.payload;
        },
        setSearchJobByText:(state,action) => {
            state.searchJobByText = action.payload;
        },
        setAllAppliedJobs:(state,action) => {
            state.allAppliedJobs = action.payload;
        },
        setSearchedQuery:(state,action) => {
            state.searchedQuery = action.payload;
            // Reset filteredJobs when the query is cleared
            if (!action.payload) {
                state.filteredJobs = state.allJobs;
            } else {
                state.filteredJobs = state.allJobs.filter((job) =>
                job.title?.toLowerCase().includes(action.payload.toLowerCase())
                );
            }
        },
        resetFilters: (state) => {
            // Action to reset all filters to default
            state.filteredJobs = state.allJobs;
            state.searchJobByText = "";
            state.searchedQuery = "";
        },
    }
});
export const {
    setAllJobs, 
    setSingleJob, 
    setAllAdminJobs,
    setSearchJobByText, 
    setAllAppliedJobs,
    setSearchedQuery,
    resetFilters
} = jobSlice.actions;
export default jobSlice.reducer;