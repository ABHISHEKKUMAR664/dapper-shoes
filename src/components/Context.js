import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component{
 
    state = {
        products: [
            {
                "_id": "1",
                "title": "Nike Shoes 01",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3167701-b25d-4801-afba-d4440c14d23d/blazer-mid-77-vintage-shoe-dNWPTj.png",
                "description": "Snekers",
                "content": "Snekers",
                "price": 23,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Nike Shoes 02",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/188d76d5-0041-4af6-b45e-9469dadc5489/air-max-90-slide-bPJh33.png",
                "description": "Snekers",
                "content": "Snekers",
                "price": 19,
                "colors": ["red", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "Nike Shoes 03",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7a50d88e-82d5-4ae4-862c-ce8e66f7d3e3/air-force-1-07-craft-shoe-FXtDz5.png",
                "description": "Snekers",
                "content": "Snekers",
                "price": 50,
                "colors": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "Nike Shoes 04",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/18eba018-df9b-4fb7-adcb-a9c13ce34196/nikecourt-legacy-canvas-shoe-0wXxWF.png",
                "description": "Snekers",
                "content": "Snekers",
                "price": 15,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "Nike Shoes 05",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6183202-64b5-4284-93d3-950c7b3aec40/air-zoom-type-shoe-wDkpJf.png",
                "description": "Snekers",
                "content": "Snekers",
                "price": 10,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "Nike Shoes 06",
                "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7005f5cc-1215-41b0-bf81-0ccdadb99947/air-huarache-shoe-fg69qQ.png",
                "description": "Snekers",
                "content": "Snekers",
                "price": 17,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            }
        ],
        cart: [],
        total: 0
        
    };

    
    render() {
        
        return(
            <DataContext.Provider
             >
                {this.props.children}
            </DataContext.Provider>
        )
    }
}