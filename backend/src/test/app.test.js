// @ts-nocheck
const request = require("supertest");
const { cleanDB } = require("../config/dbseed");
const { app, server } = require('../index');

const api = request(app);


beforeEach(() => {
    cleanDB();
});

describe('Connection', () => {

    it('Verify  ', async () => {
        await api
            .get('/v1/images')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    });
})

afterAll(() => {
    server.close()
})