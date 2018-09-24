# Mod 4 Zoo Challenge
Welcome to ZooMatch, where animals are matched to zoos.

## Setup

### Server
We are mocking a backend API using the json-server package. To use it follow the below steps.

1. `npm install -g json-server` to install the node package globally.
2. Run the server with `json-server db.json`.
3. You can view the results at `http://localhost:3000/animals`


### Client

#### Components
- Animal Catalogue shows animals available for selection
- Zoo shows animals selected for your zoo
- Animal Card shows information for a single Animal

#### Deliverables
1. You should initially fetch a list of animals from `http://localhost:3000/animals` and load it into state.
2. Animals should be in Animal Catalogue initially. Your Animal Catalogue should render each animal as an individual Animal Card.
3. Selected animals should appear in your Zoo. Your Zoo should render each animal as an individual Animal Card.
4. Clicking on an animal in Animal Catalogue should 'select it' for your Zoo. It should then appear in your Zoo and disappear from Animal Catalogue.
5. Clicking on an animal in your Zoo should 'unselect it'. It should then appear in Animal Catalogue and disappear from your Zoo.


### Bonus!
If and only if you have time, you may work on the following:

1. Add a validation so you can only add one male and one female animal of each kind to your zoo.
2. Create a Searchbar component to filter results in Animal Catalogue by name.
3. Create a radio button which makes Animal Catalogue return only male or female results.
