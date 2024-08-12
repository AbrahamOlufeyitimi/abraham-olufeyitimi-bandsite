// const apiKey = "5439f5c3-13e7-435c-a3a0-d754908eb97b";

// const bandSiteApi = new BandSiteApi('5439f5c3-13e7-435c-a3a0-d754908eb97b');

export class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
    }

    async postComment(comment) {
        const url = `${this.baseUrl}comments?api_key=${this.apiKey}`;
        try {
            const response = await axios.post(url, comment);
            return response.data;
        } catch (error) {
            console.error("Error posting comment:", error);
        }
    }

    async getComments() {
        const url =`${this.baseUrl}comments?api_key=${this.apiKey}`;
        try {
            const response = await axios.get(url);
            const comments = response.data;
            comments.sort((a, b) => b.timestamp - a.timestamp);
            return comments;

        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    }

    async getShows() {
        const url = `${this.baseUrl}showdates?api_key=${this.apiKey}`;
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error("Error fetching shows:", error);
        }
    }
}
