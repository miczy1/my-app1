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
        this.setState((prevState) => ({
            formData: {
                ...prevState.formData,
                [name]: value,
            }
            }))
    }

    render(){
        const {cars, formData} = this.state
        return(
            <div className="App">
                <h1>Car List</h1>
                <form>
                    <input
                        type="text"
                        name="brand"
                        value={formData.brand}
                        onChange={this.handleChange}
                        placeholder="Brand"
                    />
                    <input
                        type="text"
                        name="model"
                        value={formData.model}
                        onChange={this.handleChange}
                        placeholder="Model"
                    />
                    <input
                        type="text"
                        name="registrationNumber"
                        value={formData.registrationNumber}
                        onChange={this.handleChange}
                        placeholder="Registration Number"
                    />
                    <input
                        type="text"
                        name="color"
                        value={formData.color}
                        onChange={this.handleChange}
                        placeholder="color"
                    />
                    <input
                        type="text"
                        name="year"
                        value={formData.year}
                        onChange={this.handleChange}
                        placeholder="year"
                    />
                    <input
                        type="text"
                        name="engine"
                        value={formData.engine}
                        onChange={this.handleChange}
                        placeholder="Engine"
                    />
                </form>
            </div>
        )
    }
}

export default App;