# bitrex-market

It is small cryptocurrency markets viewer. We use api.bitfinex.com API to fetch all the required information.


# Setup

It is create from very popular create-react-app scaffolding project, so setup is definitely super simple. Just enter two magical commands and you are good to go.

```
  npm install
  npm start
```

# Test
Most of its test coverage is also complete.

```
  npm test
```

# Technology Stack

- create-react-app is used initialise this project.
- reactstrap components is used for all the UI/UX.
- react-cryptocoins is providing all the icons of crytocoins.
- react-router-dom is responsible for managing all the client side routing. 
- axios is responsible for fetching data from api.bitfinex.com.
- Redux is used for state management of application.
- cors-anywhere.herokuapp.com proxy server is used for handling cors error from bitfinex.
- jest is used as test runner and with conjunction of enzyme. Snapshot has made component testing supper simple and fast. 
- lodash is used as a utility library

# Summary 

Application is divided into two parts. 

- Market list
- Currency Detail

Components are structured like 

App
  header
  Main
    Home( Connected to Store )
      Markets (List)
        Symbols(List)
      Currency ( Connected to Store )
        Currnecy detail view
        Currency book view

Application has two reducers both are responsible for fetching data from api.bitfinex.com. 
