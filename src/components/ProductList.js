import React from 'react';
import axios from 'axios';
// API calls
// axios, cancel
// fetch - native to browser

// functional component
// best practices, use a lot of functional components
const ProductWidget = ({product}) => (
    <article class="card">
        <header>{product.name}</header>
        <p>Price: {product.price}</p>
        <p>Weight: {product.weight}</p>
        <p>Year: {product.weight}</p>
    </article>
)

const Loading = () => (
    <div>
        <h2>Loading.....</h2>
    </div>
)

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            products: []
        }
    }

    //es8 promises, async await
    // REACT is not a good place to make API calls
    // REACT is a view library
    // API should be done on redux thunk/saga/redux-observable
    async componentDidMount() {
        // hardcoding url here/good showing
        // .env, environment settings
        this.setState({loading: true})
        try {
           const response = await axios.get('http://localhost:7070/delayed/api/products')
           this.setState({
               products: response.data,
               loading: false
           })
        }catch(error){
            //todo: this.setState with response.statusCode, status
        }
    }

    render() {
        return (
            <div>
                <h2>Product List</h2>

                {
                    this.state.loading? <Loading />:
                            <div class="flex flex-4">
                            {
                                this.state.products.map ( product => (
                                    <ProductWidget key={product.id} product={product} />
                                ))
                            }
                            </div>

                }
                
            </div>
        )
    }
}

export default ProductList;