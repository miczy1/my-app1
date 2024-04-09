import React, { Component } from "react";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { RadioButton } from "primereact/radiobutton";
import { Calendar } from "primereact/calendar";
import "./App.scss";

class App extends Component {
  constructor(props) {
    //definicja stanu
    super(props);
    this.state = {
      cars: [],
      brand: "",
      model: "",
      year: "",
      color: "",
      engine: "",
      mileage: "",
      gearboxType: "",
      regNumber: "",
      fuelType: "",
      insurance: null,
      techInspection: null,
      reservationDate: null,
      searchName: "",
    };
  }

  handleChange = (e) => {
    //aktualizowanie stanu poprzez zmienianie wartosci formularza
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  clearForm = () => {
    //funkcja czyszcząca baze samochodów
    this.setState({
      cars: [],
      brand: "",
      model: "",
      year: "",
      color: "",
      engine: "",
      mileage: "",
      gearboxType: "",
      regNumber: "",
      fuelType: "",
      insurance: null,
      techInspection: null,
      reservationDate: null,
    });
  };

  handleRadioButtonChange = (e) => {
    this.setState({
      fuelType: e.value,
    });
  };

  handleRadioChange = (e) => {
    this.setState({
      gearboxType: e.value,
    });
  };

  handleDelete = (index) => {
    //funkcja usuwająca wybrany samochód
    const carUpdate = [...this.state.cars];
    carUpdate.splice(index, 1);
    this.setState({ cars: carUpdate });
  };

  handleSubmit = (e) => {
    //funkcja obsługująca formularz
    e.preventDefault(); //zaprzestanie odświeżania się strony po przesłaniu formularza
    const {
      cars,
      brand,
      model,
      year,
      color,
      engine,
      mileage,
      gearboxType,
      regNumber,
      fuelType,
      diesel,
      gasoline,
      insurance,
      techInspection,
    } = this.state;
    const newCars = {
      brand,
      model,
      year,
      color,
      engine,
      mileage,
      gearboxType,
      regNumber,
      fuelType,
      diesel,
      gasoline,
      insurance,
      techInspection,
    };
    this.setState({
      cars: [...cars, newCars],
      brand: "",
      model: "",
      year: "",
      color: "",
      engine: "",
      mileage: "",
      gearboxType: "",
      regNumber: "",
      fuelType: "",
      insurance: null,
      techInspection: null,
    });
  };

  render() {
    const { searchName } = this.state;
    const filteredCars = this.state.cars.filter(
      (car) =>
        car.brand.toLowerCase().includes(searchName.toLowerCase()) ||
        car.model.toLowerCase().includes(searchName.toLowerCase())
    );
    return (
      <>
        <div className="App">
          <h1>Dodaj samochód do bazy</h1>
          <form onSubmit={this.handleSubmit}>
            <Card className="card">
              <h3 className="header-a">Informacje o aucie</h3>
              <InputText
                type="text"
                name="brand"
                value={this.state.brand}
                placeholder="*Marka"
                onChange={this.handleChange}
              />
              <InputText
                type="text"
                name="model"
                value={this.state.model}
                placeholder="*Model"
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
                <RadioButton
                  className="gearbox-radio-button"
                  inputId="manualRadio"
                  name="gearboxType"
                  value="Manualna"
                  checked={this.state.gearboxType === "Manualna"}
                  onChange={this.handleRadioChange}
                />
                <label className="radio" htmlFor="manualRadio">
                  Manualna
                </label>
                <RadioButton
                  className="gearbox-radio-button"
                  inputId="automaticRadio"
                  name="gearboxType"
                  value="Automatyczna"
                  checked={this.state.gearboxType === "Automatyczna"}
                  onChange={this.handleRadioChange}
                />
                <label className="radio" htmlFor="automaticRadio">
                  Automatyczna
                </label>
              </div>
              <div className="radio-buttons">
                <h4>Typ silnika</h4>
                <RadioButton
                  className="fueltype-radio-button"
                  inputId="dieselRadio"
                  name="fuelType"
                  value="Diesel"
                  checked={this.state.fuelType === "Diesel"}
                  onChange={this.handleRadioButtonChange}
                />
                <label className="radio" htmlFor="dieselRadio">
                  Diesel
                </label>
                <RadioButton
                  className="fueltype-radio-button"
                  inputId="gasolineRadio"
                  name="fuelType"
                  value="Benzyna"
                  checked={this.state.fuelType === "Benzyna"}
                  onChange={this.handleRadioButtonChange}
                />
                <label className="radio" htmlFor="gasolineRadio">
                  Benzyna
                </label>
                <RadioButton
                  className="fueltype-radio-button"
                  inputId="electricRadio"
                  value="Elektryk"
                  name="fuelType"
                  checked={this.state.fuelType === "Elektryk"}
                  onChange={this.handleRadioButtonChange}
                />
                <label className="radio" htmlFor="electricRadio">
                  Elektryk
                </label>
                <RadioButton
                  className="fueltype-radio-button"
                  inputId="hybridRadio"
                  name="fuelType"
                  value="Hybryda"
                  checked={this.state.fuelType === "Hybryda"}
                  onChange={this.handleRadioButtonChange}
                />
                <label className="radio" htmlFor="hybridRadio">
                  Hybryda
                </label>
              </div>
              <h3 className="header-a">Dane administracyjne</h3>
              <InputText
                type="text"
                name="regNumber"
                value={this.state.regNumber}
                placeholder="*Tablica rejestracyjna"
                onChange={this.handleChange}
              />
              <Calendar
                name="insurance"
                value={this.state.insurance}
                dateFormat="dd/mm/yy"
                placeholder="*Do kiedy ważne OC"
                onChange={(e) => this.setState({ insurance: e.value })}
              />
              <Calendar
                name="techInspection"
                value={this.state.techInspection}
                dateFormat="dd/mm/yy"
                placeholder="*Do kiedy ważny przegląd"
                onChange={(e) => this.setState({ techInspection: e.value })}
              />
              <br />
              <Button type="submit" label="DODAJ SAMOCHÓD" />
              <Button
                type="button"
                label="WYCZYŚĆ BAZĘ AUT"
                onClick={this.clearForm}
              />
            </Card>
          </form>
        </div>

        <div className="main">
          <h2>Baza samochodów</h2>
          <InputText
            id="search-input"
            type="text"
            name="searchName"
            value={searchName}
            placeholder="Szukaj po nazwie"
            onChange={this.handleChange}
          />
          {filteredCars.map((car, index) => (
            <Card className="car-list-card" key={index}>
              <h3 className="auto-base">
                {car.brand} {car.model}
              </h3>
              <ul>
                <li>Rok produkcji: {car.year}</li>
                <li>Kolor: {car.color}</li>
                <li>Typ silnika: {car.fuelType}</li>
                <li>Skrzynia biegów: {car.gearboxType}</li>
                <li>Silnik: {car.engine}</li>
                <li>Przebieg: {car.mileage}</li>
                <li>Tablica rejestracyjna: {car.regNumber}</li>
              </ul>
              <Button
                label="INFORMACJA O UBEZPIECZENIU I PRZEGLĄDZIE"
                onClick={() =>
                  alert(
                    `Ubezpieczenie OC wygasa: ${car.insurance.toLocaleString()}\nPrzegląd wygasa: ${car.techInspection.toLocaleString()}`
                  )
                }
              />
              <h4>REZERWACJA POJAZDU</h4>
              <Calendar
                name="reservationDate"
                value={this.state.reservationDate}
                selectionMode="range"
                hideOnRangeSelection
                dateFormat="dd-mm-yy"
                placeholder="OD - DO"
                onChange={(e) => this.setState({ reservationDate: e.value })}
              />
              <Button
                label="REZERWUJ POJAZD"
                onClick={() =>
                  alert(
                    `Zarezerwowano ${car.brand} ${
                      car.model
                    } w terminie: OD ${this.state.reservationDate[0].toLocaleString()} \n\n DO ${this.state.reservationDate[1].toLocaleString()}`
                  )
                }
              />
              <Button
                label="USUŃ SAMOCHÓD"
                onClick={() => this.handleDelete(index)}
              />
            </Card>
          ))}
        </div>
      </>
    );
  }
}

export default App;
