const router = require('express').Router();
const tweetController = require('../controllers/tweet.controller');
const auth = require('../middleware/auth.middleware');
let User = require('../models/user.model');

router.get('/', (req, res, next) => {
    User.findOne({}, (err, doc)=>{
        if(err){
            return res.send('Error!');
        }
        //../views/node.hbs
        res.render('node', {xdoc: doc});
    });
});

router.post('/', (req, res, next) => {
    let email = req.body.email;
    let user = new User({
        firstName: 'Mohammed',
        lastName: 'Abdelkawy',
        password: '123456',
        email: email
    });
    user.save();
    res.redirect('/tweet');
});

router.post('/add', auth, tweetController.addTweet);
router.get('/getMyTweets', auth, tweetController.getMyTweets);
router.delete('/deleteTweet/:id', auth, tweetController.deleteTweet);
router.patch('/editTweet/:id', auth, tweetController.editTweet);


module.exports = router;