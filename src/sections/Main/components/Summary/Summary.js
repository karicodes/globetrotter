import React, { useContext } from 'react';
import { Container, Title, Message, Body } from './Summary.styles';
import { List } from 'semantic-ui-react';
import { MapContext } from '../../Contexts/MapContext';
import { CountryContext } from '../../Contexts/CountryContext';
import Co2Message from './Co2Message';

function removeDupes(arr) {
  return arr.filter((val, idx) => arr.indexOf(val) === idx);
}

export default function Summary() {
  const mapContext = useContext(MapContext);
  const [countries] = useContext(CountryContext);

  const [visitedCountries] = mapContext.visited;

  const regions = visitedCountries.map(country => country.country.region);

  const languagesUsed = visitedCountries.reduce((acc, cv) => {
    const languages = cv.country.languages.map(lang => lang.name)
    return acc.concat(languages)
  }, []);

  const currenciesUsed = visitedCountries.reduce((acc, cv) => {
    const currencies = cv.country.currencies.map(currency => currency.name)
    return acc.concat(currencies)
  }, []);

  const timezonesUsed = visitedCountries.reduce((acc, cv) => {
    const timezones = cv.country.timezones;
    return acc.concat(timezones)
  }, [])

  return (
    <Container>
      <h1>Summary</h1>
      {/* <Body> */}
        <List divided relaxed>
          <List.Item>
            <List.Icon name='map signs' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Description as='p'>You have been to <span>{visitedCountries.length}</span> countries out of <span>{countries.length}</span> </List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='globe' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Description as='p'>You have been to <span>{removeDupes(regions).length}</span> continents out of 5</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='language' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Description as='p'>You have been exposed to {removeDupes(languagesUsed).length} languages out of 6500</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='gbp' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Description as='p'>You have used {removeDupes(currenciesUsed).length} currencies out of 180</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Icon name='clock' size='large' verticalAlign='middle' />
            <List.Content>
              <List.Description as='p'>You have been in {removeDupes(timezonesUsed).length} time zones out of 24</List.Description>
            </List.Content>
          </List.Item>
          <Co2Message />

        </List>
      {/* </Body> */}
      {/* <Message>
      </Message> */}
    </Container>
  )
}