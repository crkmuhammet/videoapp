import { Paper,TextField } from "@mui/material";
import React from "react";

class SearchBar extends React.Component{
    state = {
        searchTerm:'',
    }
    handleChange = (event) =>{
        this.setState({
            searchTerm: event.target.value
        })
    }
    handleSubmit = (event) =>{
        const {searchTerm} = this.state;
        const {onFormSubmit} = this.props;

        onFormSubmit(searchTerm);
        event.preventDefault();
    }

    render(){
        return(
            <Paper elevation={6} style={{padding:'25px;'}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                    fullWidth
                    label='Search...'
                    onChange={this.handleChange}
                    />
                </form>
            </Paper>
        )
    }
}

export default SearchBar;