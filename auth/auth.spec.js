const request = require('supertest');
const server = require('../api/server.js');
const UsersModel = require('../models/usersModel.js');
const db = require('../config/dbConfig.js');

describe('names router', () => {
    describe('insert()', () => {
        /*beforeEach(async () => {
            await db('users').truncate();
        });*/
        /*it('should return 201 OK', () => {
            return request(server)
                .post('/api/auth/register')
                .send({	username: 'user1', password: 'pass1' })
                .then(res => {
                    expect(res.status).toBe(201);
                });
        });*/



        it('should return 200 OK', async () => {
            const res = await request(server)
                .post('/api/auth/login')
                .send({	username: 'user1', password: 'pass1' })
                .then(res => {
                    expect(res.status).toBe(200);
                });
        });

        it('should return 200 OK', async () => {
            const res = await request(server)
                .post('/api/auth/login')
                .send({	username: 'user1', password: 'pass1' })
                .then(res => {
                    expect(res.body.user).toBe('user1');
                });
        });
    });

    describe('POST /register', () => {
        /*it('should work with db', async () => {
            await UsersModel.add({ username: 'userX', password: 'passX' })
            const users = await db('users');
            expect(users).toHaveLength(1);
        });*/
        /*it('should return id return value', (done) => {
            return request(server)
                .post('/api/auth/register')
                .send({	username: 'user2', password: 'pass2' })
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(201)
                .end((err) => {
                    if (err) return done(err);
                    done();
                });
        });
    });
    describe('POST /login', () => {
        it('should return username as router value', (done) => {
            return request(server)
                .post('/api/auth/login')
                .send({	username: 'user2', password: 'pass2' })
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(201)
                .end((err) => {
                    if (err) return done(err);
                    done();
                });
        });*/
    });
});