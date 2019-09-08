Feature: Api testing
  Scenario: Fail with 404 error invalid api key
    When I send GET request "https://swapi.co/ap"
    Then I see status 404

  Scenario: Check endpoints to make requests
    When I send Get request "https://swapi.co/api/"
    Then I see endpoints
    | people    | https://swapi.co/api/people/    |
    | planets   | https://swapi.co/api/planets/   |
    | films     | https://swapi.co/api/films/     |
    | species   | https://swapi.co/api/species/   |
    | vehicles  | https://swapi.co/api/vehicles/  |
    | starships | https://swapi.co/api/starships/ |

  Scenario: Check episodes count
    When I send Get request "https://swapi.co/api/films/"
    Then I see 7 numbers of episodes

  Scenario: Check POST method availability
    When I send POST request "https://swapi.co/api/people/?New Hero=John Wick"
    Then I see status 405

  Scenario: Check DELETE method availability
    When I send DELETE request "https://swapi.co/api/people/1/"
    Then I see status 405

  Scenario: Check character presence
    When I send Get request "https://swapi.co/api/people/?search=Darth Maul"
    Then I see "Darth Maul" character
