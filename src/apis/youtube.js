import axios from 'axios';

const KEY = 'AIzaSyCKKYtktaaN1H7ti_ITIQlQTJyJsT7ynyI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});