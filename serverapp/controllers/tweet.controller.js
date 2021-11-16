const Tweet = require('../models/tweet.model');

class tweetController {
    static addTweet = async (req, res, next) => {
        try {
            const tweet = new Tweet({
                userId: req.user._id,
                userName:  req.user.firstName + " " +req.user.lastName,
                ...req.body
            });
            await tweet.save();
            res.status(201).send({
                apiStatus: true,
                data: tweet,
                message: 'tweet added successfully!'
            });
        } catch (error) {
            res.status(500).send({
                apaiStatus: false,
                data: error.message,
                message: 'error adding job!'
            })
        }
    }

    static getMyTweets = async (req, res) => {
        try {
            await req.user.populate('myTweets');
            res.status(200).send({
                apiStatus: true,
                data: req.user.myTweets,
                message: 'tweet added successfully!'
            });
        } catch (error) {
            res.status(500).send({
                apaiStatus: false,
                data: error.message,
                message: 'error loading tweets!'
            })
        }
    }

    static deleteTweet = async (req, res) => {
        try {
            //let id = mongoose.Types.ObjectId(req.params['id']);
            //const users = await User.findById({ _id: id });

            let tweet = await Tweet.findById(req.params['id']);
            if (!tweet) {
                throw new Error('tweet does not exist');
            }
            console.log(req.user._id);
            console.log(tweet);
            if (req.user._id.to != tweet.userId.toString()) throw new Error('unauthorized');
            await Tweet.deleteOne(tweet);
            res.status(200).send({
                apiStatus: true,
                data: tweet,
                message: 'tweet deleted successfully!'
            });
        } catch (error) {
            res.status(500).send({
                apaiStatus: true,
                data: error.message,
                message: 'error deleting tweets!'
            })
        }
    }

    static editTweet = async (req, res) => {
        try {
            let userId = req.user._id;
            let tweetId = req.params['id'];

            const tweet = await Tweet.findOneAndUpdate({_id: tweetId}, {$set: req.body});
            await tweet.save();

            res.status(200).send({
                apiStatus: true,
                data: tweet,
                message: 'tweet updated successfully!'
            });
        } catch (error) {
            res.status(500).send({
                apaiStatus: false,
                data: error.message,
                message: 'error editing tweet!'
            })
        }
    }
}

module.exports = tweetController;