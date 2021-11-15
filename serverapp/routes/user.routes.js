const userController = require('../controllers/user.controller');
const auth = require('../middleware/auth.middleware');

const router = require('express').Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', auth, userController.logout);

router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.patch('/users/editProfile', auth, userController.editProfile);

router.post('/follow/:id', auth, userController.follow)
router.post('/unfollow/:id', auth, userController.unfollow)

router.get('/followers', auth, userController.getFollowers);
router.get('/following', auth, userController.getFollowing);

router.get('/following/tweets', auth, userController.getFollowingTweets);

module.exports = router;