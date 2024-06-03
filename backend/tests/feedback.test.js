/* const request = require('supertest');
const app = require('../src/app');
const mongoose = require('mongoose');
const FeedbackModel = require('../src/infrastructure/models/FeedbackModel');

beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
});

afterAll(async () => {
    await mongoose.connection.close();
});

beforeEach(async () => {
    await FeedbackModel.deleteMany({});
});

describe('POST /api/feedback', () => {
    it('should create a new feedback', async () => {
        const res = await request(app)
            .post('/api/feedback')
            .send({
                userId: 'user1',
                message: 'Great service!',
                rating: 5
            });

        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('_id');
    });
});
d33ee2f047856e338062fe794fddb4f7-64b50915-21d3-42bb-97f7-d3dae2cfc5e6

describe('GET /api/feedback/:id', () => {
    it('should get a feedback by ID', async () => {
        const feedback = new FeedbackModel({
            userId: 'user1',
            message: 'Great service!',
            rating: 5
        });
        await feedback.save();

        const res = await request(app).get(`/api/feedback/${feedback._id}`);

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('_id', feedback._id.toString());
    });
});

describe('GET /api/feedback', () => {
    it('should get all feedbacks', async () => {
        const feedback1 = new FeedbackModel({
            userId: 'user1',
            message: 'Great service!',
            rating: 5
        });
        const feedback2 = new FeedbackModel({
            userId: 'user2',
            message: 'Good support',
            rating: 4
        });
        await feedback1.save();
        await feedback2.save();

        const res = await request(app).get('/api/feedback');

        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toBe(2);
    });
});
 */
