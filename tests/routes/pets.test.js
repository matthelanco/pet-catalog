process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const server = require('../../server.js');
const knex = require('../../db/knex');

describe ('routes: pets', () => {
    beforeEach ((done) => {
        knex.migrate.rollback()
        .then(() => knex.migrate.latest())
        .then(() => knex.seed.run())
        .then(() => done());
    });
    afterEach((done) => {
        knex.migrate.rollback()
        .then(() => done());
    });

    describe('GET /api/pets', () => {
        it('should respond with all pets', (done) => {
            chai.request(server)
            .get('/api/pets')
            .end((err,res) => {
                console.log(res.body);
                should.not.exist(err);
                res.status.should.equal(200);
                res.type.should.equal('application/json');
                res.body.message.should.eql('success');
                res.body.data.length.should.eql(4);
                res.body.data[0].should.include.keys(
                    'id', 'name'
                );
                done();
            })
        })
    });

    describe('POST /api/pets', () => {
        it('should respond with a success message, with a new pet added', (done) => {
            chai.request(server)
            .post('/api/pets')
            .send({
                name: 'Katie Grieve'
            })
            .end((err,res) => {
                should.not.exist(err);
                res.status.should.equal(201);
                res.type.should.equal('application/json');
                res.body.message.should.eql('success');
                res.body.data[0].should.include.keys(
                    'id', 'name'
                );
                done();
            });
        });
    });
});
