const userController = require('../controllers/user.controller');
const auth = require('../middleware/auth.middleware');

const router = require('express').Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', auth, userController.logout);

router.get('/profile', auth ,userController.getLoggedInUser);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', auth ,userController.getUserById);
router.patch('/users/editProfile', auth, userController.editProfile);

router.post('/follow/:id', auth, userController.follow)
router.post('/unfollow/:id', auth, userController.unfollow)

router.get('/followers', auth, userController.getFollowers);
router.get('/followings', auth, userController.getFollowings);

router.get('/following/tweets', auth, userController.getFollowingTweets);
router.get('/homeTweets', auth, userController.getHomeTweets);

module.exports = router;