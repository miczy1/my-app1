import React, {Component} from 'react';
import {InputText} from 'primereact/inputtext';
import {Card} from 'primereact/card'
import {Button} from 'primereact/button'
import './App.scss'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            samochody: [],
            marka: '',
            model: '',
            rok: '',
            kolor: '',
            silnik: '',
            blachy: '',
            // oc: '',
            // inspection: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    clearForm = () => {
        this.setState({
            samochody: [],
            marka: '',
            model: '',
            rok: '',
            kolor: '',
            silnik: '',
            blachy: '',
        })
    }

    handleDelete = (index) => {
        const aktSamochody = [...this.state.samochody]
        aktSamochody.splice(index, 1)
        this.setState({samochody: aktSamochody})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {samochody, marka, model, rok, kolor, silnik, blachy} = this.state
        const noweSamochody = {marka, model, rok, kolor, silnik, blachy}
        this.setState({
            samochody: [...samochody, noweSamochody],
            marka: '',
            model: '',
            rok: '',
            kolor: '',
            silnik: '',
            blachy: ''
        })
    }

    render() {
        return (
            <div className="App">
                <header>
                    <h1>Dodaj samochód do bazy</h1>
                </header>
                <form onSubmit={this.handleSubmit}>
                    <Card className="card">
                        <InputText
                            type="text"
                            name="marka"
                            value={this.state.marka}
                            placeholder="Marka"
                            onChange={this.handleChange}
                        />
                        <InputText
                            type="text"
                            name="model"
                            value={this.state.model}
                            placeholder="Model"
                            onChange={this.handleChange}
                        />
                        <InputText
                            type="text"
                            name="rok"
                            value={this.state.rok}
                            placeholder="Rok"
                            onChange={this.handleChange}
                        />
                        <InputText
                            type="text"
                            name="kolor"
                            value={this.state.kolor}
                            placeholder="Kolor"
                            onChange={this.handleChange}
                        />
                        <InputText
                            type="text"
                            name="silnik"
                            value={this.state.silnik}
                            placeholder="Silnik"
                            onChange={this.handleChange}
                        />
                        <InputText
                            type="text"
                            name="blachy"
                            value={this.state.blachy}
                            placeholder="Tablica rejestracyjna"
                            onChange={this.handleChange}
                        />
                        <br/>
                        <Button type="submit" label="DODAJ SAMOCHÓD"/>
                    </Card>
                </form>
                <div>
                    <h2>Baza samochodów</h2>
                    {this.state.samochody.map((car, index) => (
                        <Card className="car-list-card" key={index}>
                            <h3>{car.marka} {car.model}</h3>
                            <ul>
                                <li>Rok produkcji: {car.rok}</li>
                                <li>Kolor: {car.kolor}</li>
                                <li>Silnik: {car.silnik}</li>
                                <li>Tablica rejestracyjna: {car.blachy}</li>
                            </ul>
                            <Button label="USUŃ SAMOCHÓD" onClick={() => this.handleDelete(index)}/>
                        </Card>
                    ))}
                </div>
            </div>
        )
    }

}

export default App;