import React, {Component} from 'react';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: [],
            formData: {
                brand: '',
                model: '',
                registrationNumber: '',
                color: '',
                year: '',
                engine: '',
            },
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target

    }

    render(){
        return(
            <h1>hello</h1>
        )
    }
}

export default App;