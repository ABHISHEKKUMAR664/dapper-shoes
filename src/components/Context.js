import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component{
    render(){
        return(
            <DataContext.Provider>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}