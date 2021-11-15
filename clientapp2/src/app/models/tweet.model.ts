export class Tweet {
    content: string;
    username: string;
    tweetId?: string;
    userId?: string;

    constructor(content: string, username: string, tweetId?: string, userId?: string){
        this.content = content;
        this.username = username;
        this.tweetId = tweetId;
        this.userId = userId;
    }
}