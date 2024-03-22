import React, {Component} from 'react'
import {InputText} from 'primereact/inputtext'
import {Card} from 'primereact/card'
import {Button} from 'primereact/button'
import {RadioButton} from 'primereact/radiobutton'
import {Calendar} from 'primereact/calendar'
import './App.scss'

class App extends Component {

    constructor(props) {        //definicja stanu
        super(props);
        this.state = {
            cars: [],
            brand: '',
            model: '',
            year: '',
            color: '',
            engine: '',
            mileage: '',
            gearboxType: '',
            regNumber: '',
            fuelType: '',
            insurance: '',
            techInspection: ''
        }
    }

    handleChange = (e) => {     //aktualizowanie stanu poprzez zmienianie wartosci formularza
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    clearForm = () => {     //funkcja czyszcząca baze samochodów
        this.setState({
            cars: [],
            brand: '',
            model: '',
            year: '',
            color: '',
            engine: '',
            mileage: '',
            gearboxType: '',
            regNumber: '',
            fuelType: '',
            insurance: '',
            techInspection: ''
        })
    }

    handleRadioButtonChange = (e) => {
        this.setState({
            fuelType: e.value,
        })
    }

    handleRadioChange = (e) =>{
        this.setState({
            gearboxType: e.value
        })
    }

    handleDelete = (index) => {     //funkcja usuwająca wybrany samochód
        const carUpdate = [...this.state.cars]
        carUpdate.splice(index, 1)
        this.setState({cars: carUpdate}
        )
    }

    handleSubmit = (e) => {     //funkcja obsługująca formularz
        e.preventDefault()  //zaprzestanie odświeżania się strony po przesłaniu formularza
        const {cars, brand, model, year, color, engine, mileage, gearboxType, regNumber, fuelType, diesel, gasoline, insurance, techInspection} = this.state
        const newCars = {brand, model, year, color, engine, mileage, gearboxType, regNumber, fuelType, diesel, gasoline, insurance, techInspection}
        this.setState({
            cars: [...cars, newCars],
            brand: '',
            model: '',
            year: '',
            color: '',
            engine: '',
            mileage: '',
            gearboxType: '',
            regNumber: '',
            fuelType: '',
            insurance: '',
            techInspection: '',
        })
    }

    render() {
        return (
            <>
            <div className="App">
                <header>
                    <h1>Dodaj samochód do bazy</h1>
                </header>
                <form onSubmit={this.handleSubmit}>
                    <Card className="card">
                        <h3 className="header-a">Informacje o aucie</h3>
                        <InputText
                            type="text"
                            name="brand"
                            value={this.state.brand}
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
                        <h3 className="header-a">Dane techniczne</h3>
                        <InputText
                            type="text"
                            name="year"
                            value={this.state.year}
                            placeholder="Rok"
                            onChange={this.handleChange}
                        />
                        <InputText
                            type="text"
                            name="color"
                            value={this.state.color}
                            placeholder="Kolor"
                            onChange={this.handleChange}
                        />
                        <InputText
                            type="text"
                            name="engine"
                            value={this.state.engine}
                            placeholder="Silnik"
                            onChange={this.handleChange}
                        />
                        <InputText
                            type="text"
                            name="mileage"
                            value={this.state.mileage}
                            placeholder="Przebieg"
                            onChange={this.handleChange}
                        />
                        <div className="radio-buttons">
                            <h4>Rodzaj skrzyni biegów</h4>
                            <RadioButton className="gearbox-radio-button"
                                         inputId="manualRadio"
                                         name="gearboxType"
                                         value="Manualna"
                                         checked={this.state.gearboxType === 'Manualna'}
                                         onChange={this.handleRadioChange}
                            />
                            <label htmlFor="manualRadio">Manualna</label>
                            <RadioButton className="gearbox-radio-button"
                                         inputId="automaticRadio"
                                         name="gearboxType"
                                         value="Automatyczna"
                                         checked={this.state.gearboxType === 'Automatyczna'}
                                         onChange={this.handleRadioChange}
                            />
                            <label htmlFor="automaticRadio">Automatyczna</label>
                        </div>
                        <div className="radio-buttons">
                            <h4>Typ silnika</h4>
                            <RadioButton className="fueltype-radio-button"
                                      inputId="dieselRadio"
                                      name="fuelType"
                                      value="Diesel"
                                      checked={this.state.fuelType === 'Diesel'}
                                      onChange={this.handleRadioButtonChange}
                            />
                            <label htmlFor="dieselRadio">Diesel</label>
                            <RadioButton className="fueltype-radio-button"
                                      inputId="gasolineRadio"
                                      name="fuelType"
                                      value="Benzyna"
                                      checked={this.state.fuelType === 'Benzyna'}
                                      onChange={this.handleRadioButtonChange}
                            />
                            <label htmlFor="gasolineRadio">Benzyna</label>
                            <RadioButton className="fueltype-radio-button"
                                      inputId="electricRadio"
                                      value="Elektryk"
                                      name="fuelType"
                                      checked={this.state.fuelType === 'Elektryk'}
                                      onChange={this.handleRadioButtonChange}
                            />
                            <label htmlFor="electricRadio">Elektryk</label>
                            <RadioButton className="fueltype-radio-button"
                                      inputId="hybridRadio"
                                      name="fuelType"
                                      value="Hybryda"
                                      checked={this.state.fuelType === 'Hybryda'}
                                      onChange={this.handleRadioButtonChange}
                            />
                            <label htmlFor="hybridRadio">Hybryda</label>
                        </div>
                        <h3 className="header-a">Dane administracyjne</h3>
                        <InputText
                            type="text"
                            name="regNumber"
                            value={this.state.regNumber}
                            placeholder="Tablica rejestracyjna"
                            onChange={this.handleChange}
                        />
                        <InputText
                            type="text"
                            name="insurance"
                            value={this.state.insurance}
                            placeholder="Do kiedy ważne OC"
                            onChange={this.handleChange}
                        />
                        <InputText
                            type="text"
                            name="techInspection"
                            value={this.state.techInspection}
                            placeholder="Do kiedy ważny przegląd"
                            onChange={this.handleChange}
                        />


                        <br/>
                        <Button type="submit" label="DODAJ SAMOCHÓD"/>
                        <Button type="button" label="WYCZYŚĆ BAZĘ AUT" onClick={this.clearForm}/>
                    </Card>
                </form>
            </div>

        <div className="main">
                    <h2 className="main-header">Baza samochodów</h2>
                    {this.state.cars.map((car, index) => (
                        <Card className="car-list-card" key={index}>
                            <h3 className="auto-base">{car.brand} {car.model}</h3>
                            <ul>
                                <li>Rok produkcji: {car.year}</li>
                                <li>Kolor: {car.color}</li>
                                <li>Typ silnika: {car.fuelType}</li>
                                <li>Skrzynia biegów: {car.gearboxType}</li>
                                <li>Silnik: {car.engine}</li>
                                <li>Przebieg: {car.mileage}</li>
                                <li>Tablica rejestracyjna: {car.regNumber}</li>
                            </ul>
                            <Button label="USUŃ SAMOCHÓD" onClick={() => this.handleDelete(index)}/>
                            <Button label="INFORMACJA O OC"
                                    onClick={() => alert(`Ubezpieczenie OC wygasa: ${car.insurance}`)}/>
                            <Button label="INFORMACJA O PRZEGLĄDZIE"
                                    onClick={() => alert(`Przegląd wygasa: ${car.techInspection}`)}/>
                        </Card>
                    ))}
                </div>
        </>
        )
    }

}

export default App;