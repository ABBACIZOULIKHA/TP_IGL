
import { useState } from 'react';
import { useEffect } from 'react';


import { createContext } from 'react';
// import data
import { housesData } from '../data';

// create context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [Periode, setPeriode] = useState('Periode range (any)');
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    // return all countries
    const allCountries = houses.map((house) => {
      return house.country;
    });

    // remove duplicates
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];

    // set countries state
    setCountries(uniqueCountries);
  }, []);

  useEffect(() => {
    // return only countries
    const allProperties = houses.map((house) => {
      return house.type;
    });

    // remove duplicates
    const uniqueProperties = ['Property type (any)', ...new Set(allProperties)];

    // set countries state
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    setLoading(true);
    // check the string if includes '(any)'
    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    };

    // get first string (Periode) and parse it to number
    const minPeriode = parseInt(Periode.split(' ')[0]);
    // get last string (Periode) and parse it to number
    const maxPeriode = parseInt(Periode.split(' ')[2]);

    const newHouses = housesData.filter((house) => {
      const housePeriode = parseInt(house.Periode);
      // all values are selected
      if (
        house.country === country &&
        house.type === property &&
        housePeriode >= minPeriode &&
        housePeriode <= maxPeriode
      ) {
        return house;
      }
      // all values are default
      if (isDefault(country) && isDefault(property) && isDefault(Periode)) {
        return house;
      }
      // country is not default
      if (!isDefault(country) && isDefault(property) && isDefault(Periode)) {
        return house.country === country;
      }
      // property is not default
      if (!isDefault(property) && isDefault(country) && isDefault(Periode)) {
        return house.type === property;
      }
      // Periode is not default
      if (!isDefault(Periode) && isDefault(country) && isDefault(property)) {
        if (housePeriode >= minPeriode && housePeriode <= maxPeriode) {
          return house;
        }
      }
      // country and property is not default
      if (!isDefault(country) && !isDefault(property) && isDefault(Periode)) {
        return house.country === country && house.type === property;
      }
      // country and Periode is not default
      if (!isDefault(country) && isDefault(property) && !isDefault(Periode)) {
        if (housePeriode >= minPeriode && housePeriode <= maxPeriode) {
          return house.country === country;
        }
      }
      // property and Periode is not default
      if (isDefault(country) && !isDefault(property) && !isDefault(Periode)) {
        if (housePeriode >= minPeriode && housePeriode <= maxPeriode) {
          return house.type === property;
        }
      }
    });

    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      );
    }, 1000);
  };
  return <HouseContext.Provider
    value={
      {
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        Periode,
        setPeriode,
        handleClick,
        houses,
        loading,
      }
    }
  >
    {children}
  </HouseContext.Provider>;
};
export default HouseContextProvider;
