import React, {Component} from 'react'
import {InputText} from 'primereact/inputtext'
import {Card} from 'primereact/card'
import {Button} from 'primereact/button'
import {Checkbox} from 'primereact/checkbox'
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
            diesel: false,
            benzyna: false,
            oc: '',
            przeglad: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
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
            diesel: false,
            benzyna: false,
            oc: '',
            przeglad: ''
        })
    }

    handleCheckbox = (e) => {
        const {name, checked} = e.target
        this.setState({
            [name]: checked,
            [name === 'diesel' ? 'benzyna' :'diesel']:false
        })
    }

    handleDelete = (index) => {
        const aktSamochody = [...this.state.samochody]
        aktSamochody.splice(index, 1)
        this.setState({samochody: aktSamochody}
        )
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {samochody, marka, model, rok, kolor, silnik, blachy, diesel, benzyna, oc, przeglad} = this.state
        const noweSamochody = {marka, model, rok, kolor, silnik, blachy, diesel, benzyna, oc, przeglad}
        this.setState({
            samochody: [...samochody, noweSamochody],
            marka: '',
            model: '',
            rok: '',
            kolor: '',
            silnik: '',
            blachy: '',
            diesel: false,
            benzyna: false,
            oc: '',
            przeglad: '',
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
                        <InputText
                            type="text"
                            name="oc"
                            value={this.state.oc}
                            placeholder="Do kiedy ważne OC"
                            onChange={this.handleChange}
                        />
                        <InputText
                            type="text"
                            name="przeglad"
                            value={this.state.przeglad}
                            placeholder="Do kiedy ważny przegląd"
                            onChange={this.handleChange}
                        />
                        <div className="checkboxes">
                            <Checkbox
                                inputId="dieselCheckbox"
                                name="diesel"
                                checked={this.state.diesel}
                                onChange={this.handleCheckbox}
                            />
                            <label htmlFor="dieselCheckbox">Diesel</label>
                            <Checkbox
                                inputId="benzynaCheckbox"
                                name="benzyna"
                                checked={this.state.benzyna}
                                onChange={this.handleCheckbox}
                            />
                            <label htmlFor="benzynaCheckbbox">Benzyna</label>
                        </div>

                        <br/>
                        <Button type="submit" label="DODAJ SAMOCHÓD"/>
                        <Button type="button" label="WYCZYŚĆ BAZĘ AUT" onClick={this.clearForm}/>
                    </Card>
                </form>
                <div>
                    <h2>Baza samochodów</h2>
                    {this.state.samochody.map((auto, index) => (
                        <Card className="car-list-card" key={index}>
                            <h3>{auto.marka} {auto.model}</h3>
                            <ul>
                                <li>Rok produkcji: {auto.rok}</li>
                                <li>Kolor: {auto.kolor}</li>
                                <li>Typ silnika: {auto.diesel ? 'Diesel' : auto.benzyna ? 'Benzyna' : 'Nie zaznaczono'}</li>
                                <li>Silnik: {auto.silnik}</li>
                                <li>Tablica rejestracyjna: {auto.blachy}</li>
                            </ul>
                            <Button label="USUŃ SAMOCHÓD" onClick={() => this.handleDelete(index)}/>
                            <Button label="INFORMACJA O OC" onClick={() => alert(`Ubezpieczenie OC wygasa: ${auto.oc}`)}/>
                            <Button label="INFORMACJA O PRZEGLĄDZIE" onClick={() => alert(`Przegląd wygasa: ${auto.przeglad}`)}/>
                        </Card>
                    ))}
                </div>
            </div>
        )
    }

}

export default App;