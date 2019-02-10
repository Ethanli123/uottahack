import axios from 'axios';

function userLoad(id) {
    let config = {
        params: {
            'id': id
        }
    };

    return axios.get('/api/v1/users', config);
} // userLoad

function getChallenges() {
    let config = {
        params: {}
    };

    return axios.get('/api/v1/challenges', config);
} // userLoad

function createChallenge(challenge) {
    return axios.post('/api/v1/challenges', {}, {
        params: {
            activity: challenge.activity,
            city: challenge.city,
            difficulty: challenge.difficulty,
            location: challenge.location,
            votes: 0
        }
    });
} // createChallenge

const dal = {
    userLoad,
    getChallenges,
    createChallenge
};

export default dal;