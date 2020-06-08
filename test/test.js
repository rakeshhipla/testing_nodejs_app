const request = require('supertest');
const should = require('should');

const server = request('http://localhost:3000');


describe("Sample unit test", () => {

    it('Should return home page ', () => {
        server.get("/")
        .expect('Content-type', /text/)
        .expect(200)
        .end((err, res) =>  {

            console.log("Error : ", err);         
            res.status.should.equal(200);
        });
   
    });
});