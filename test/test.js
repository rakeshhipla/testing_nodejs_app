const request = require('supertest');
const should = require('should');

const server = request('http://localhost:3000');


describe("Sample unit test", () => {

    it('Should return home page ', (done) => {

        server.get("/")
        .expect('Content-type', /text/)
        .expect(200)
        .end((err, res) =>  {
            console.log("Error : ", res.status);         
            expect(res.status.should.equal(200));
            done();
        });
    });
});