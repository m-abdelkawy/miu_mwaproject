const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const e = require('express');

class userController {
    static register = async (req, res) => {
        try {
            let user = new User(req.body);
            await user.save();
            res.status(200).send({
                apiStatus: true,
                message: 'registered',
                data: user
            })
        } catch (error) {
            res.status(500).send({
                apiStatus: false,
                message: 'error adding user',
                data: error.message
            })
        }
    }
    static login = async (req, res) => {
        try {
            const user = await User.loginUser(req.body.email, req.body.password);
            const token = await user.generateToken();
            res.status(200).send({
                apiStatus: true,
                message: 'registered',
                data: { user, token }
            })
        } catch (error) {
            res.status(500).send({
                apiStatus: false,
                message: 'invalid password',
                data: error.message
            })
        }
    }
    static getAllUsers = async (req, res) => {
        console.log('show all called');
        try {
            const users = await User.find()
            res.send({ apiStatus: true, data: users, message: "users loaded successfully" })
        }
        catch (e) {
            res.status(500).send({ apiStatus: false, data: e.message, message: "error loading users" })
        }
    }
    static getUserById = async (req, res) => {
        try {
            var id = mongoose.Types.ObjectId(req.params['id']);
            const users = await User.findById({ _id: id });
            res.send({ apiStatus: true, data: users, message: "users loaded successfully" })
        }
        catch (e) {
            res.status(500).send({ apiStatus: false, data: e.message, message: "error loading users" })
        }
    }

    static follow = async (req, res) => {
        try {
            let id = mongoose.Types.ObjectId(req.params['id']);
            //let id  = req.params['id'];
            req.user.following.push(id);

            await req.user.save();
            res.send({ apiStatus: true, data: req.user, message: "added following successfully!" })
        } catch (error) {
            res.status(500).send({ apiStatus: false, data: e.message, message: "error following user" })
        }
    }

    static unfollow = async (req, res) => {
        try {
            let id = req.params['id'];
            req.user.following = req.user.following.filter(followingId => followingId.toString() != id);
            await req.user.save();
            res.status(200).send({ apiStatus: true, data: req.user, message: "unfollowed successfully!" })

        } catch (error) {
            res.status(500).send({ apiStatus: false, data: e.message, message: "error unfollowing user" })

        }
    }


    static getFollowers = async (req, res) => {
        try {
            const followerIds = req.user.followers;
            const followers = await User.find({ _id: { $in: followerIds } });
            res.status(200).send({ apiStatus: true, data: followers, message: "followers loaded successfully!" })
        } catch (error) {
            res.status(500).send({ apiStatus: false, data: e.message, message: "error loading followers!" })
        }
    }

    static getFollowing = async (req, res) => {
        try {
            const followingIds = req.user.following;
            const followings = await User.find({ _id: { $in: followingIds } });
            res.status(200).send({ apiStatus: true, data: followings, message: "followings loaded successfully!" })
        } catch (error) {
            res.status(500).send({ apiStatus: false, data: e.message, message: "error loading followings!" })
        }
    }

    static getFollowingTweets = async (req, res) => {
        try {
            const followingIds = req.user.following;
            const followings = await User.find({ _id: { $in: followingIds } });

            let tweets = [];
            for (let user of followings) {
                await user.populate('myTweets');
                tweets.push(...user.myTweets);
            }
            // followings.forEach(async (user) => {
            //     await user.populate('myTweets');
            //     res.send(user.myTweets)
            //     tweets.push(user.myTweets);
            // });
            //await followings[0].populate('myTweets')
            res.status(200).send({ apiStatus: true, data: tweets, message: "followings loaded successfully!" })
        } catch (error) {
            res.status(500).send({ apiStatus: false, data: e.message, message: "error loading followings!" })
        }
    }

    static logout = async (req, res) => {
        try {
            req.user.tokens = req.user.tokens.filter(user => user.token != req.token);
            await req.user.save();
            res.status(200).send({
                apiStatus: true,
                message: 'logged out'
            });
        } catch (error) {
            res.status(500).send({
                apiStatus: false,
                message: 'error logging out',
                data: e.message
            });
        }
    }

    static editProfile = async (req, res) => {
        try {
            await User.updateOne({_id: req.user.id}, {$set: req.body});
            await req.user.save();

            res.status(200).send({
                apiStatus: true,
                data: req.user,
                message: 'user updated successfully!'
            });
        } catch (error) {
            res.status(500).send({
                apaiStatus: false,
                data: error.message,
                message: 'error editing user profile!'
            })
        }
    }

    //edit profile
    //edit tweet
    //delete tweet

}

module.exports = userController;