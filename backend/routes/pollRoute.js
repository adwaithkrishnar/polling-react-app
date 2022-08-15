const express = require("express");
const router = express.Router();
const Poll = require("../models/pollmodel");
const ObjectId = require("mongodb").ObjectId;



router.route("/").post((req,res)=>{
    const poll = req.body.poll

    const newPoll = new Poll({
        poll,
    })

    newPoll.save();
})

router.route("/").get((req,res)=>{
    Poll.find()
    .then(found => res.json(found))
})

router.put("/" ,async(req,res)=>{
    const update = await Poll.updateOne({_id : ObjectId(req.params.pollId)},{$set :{poll:req.body.poll}})
    res.json(update);
})

module.exports = router;