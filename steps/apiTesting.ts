const { When, Then } = require('cucumber');
const axios = require('axios');
const expect = require('chai').expect;
let response, responseStatus;

When('I send GET request {string}', async (string: string) => {
     response = await axios.get(string).catch(response => response.response.status);
     return responseStatus = response;
});
Then('I see status {int}', async (status: number) => expect (responseStatus).to.equal(status));

When('I send Get request {string}', async (string: string) => {
    response = await axios.get(string).catch(response => response.response);
    return responseStatus = response;
});
Then('I see endpoints', async (points) => expect(responseStatus.data).to.deep.equal(points.rowsHash()));

Then('I see {int} numbers of episodes', async (numbers) => expect(responseStatus.data.count).to.equal(numbers));

When('I send POST request {string}', async (string: string) => {
    response = await axios.post(string).catch(response => response.response.status);
    return responseStatus = response;
});

When('I send DELETE request {string}', async (string: string) => {
    response = await axios.delete(string).catch(response => response.response.status);
    return responseStatus = response;
});

Then('I see {string} character', async (string: string) => expect(response.data.results[0].name).to.equal(string));
