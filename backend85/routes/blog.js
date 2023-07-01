const express = require('express')
const router = express.Router()
const Blogs = require('../models/blogs')
const verifyToken = require('../middlewares/verifyToken')



// user post a 
router.get('/blog', async (req, res) => {
    try {

        const blogs = await Blogs.find({})
        return res.status(200).json(blogs)

    } catch (err) {
        return res.status(500).json({
            err: "something went wrong"
        })

    }
})

router.get('/blog/:Id', async (req, res) => {
    try {
        const blogs = await Blogs.findById(req.params.Id)
        return res.status(200).json(blogs)
    } catch (err) {
        return res.status(500).json({
            err: "something went wrong!"
        })

    }
})

router.post('/post', verifyToken, async (req, res) => {
    try {
        const blog = await Blogs.create({ ...req.body, userId: users.Id })
        return res.status(200).json(blog)
    } catch (err) {
        return res.status(500).json({
            err: "something went wrong!"
        })
    }
})

router.put("/updateblog/:Id", verifyToken, async (req, res) => {
    try {
        const blog = await Blogs.findById(req.params.Id)
        if (blog.user !== req.user.Id) {
            return res.status(500).json({
                error: "you can update only your own posts"
            })
        }
        const updateBlog = await Blogs.findByIdAndUpdate(req.params.Id, { $set: req.body }, { new: true })
        return res.status(200).json(updateBlog)
    } catch (err) {
        return res.status(500).json({
            err: "something went wrong"
        })
    }
})


router.delete('/deleteblog/:Id', verifyToken, async (req, res) => {
    try {
        const blog = await Blogs.findById(req.params.Id)
        if (blog.userId !== req.params.Id) {
            return res.status(403).json({
                error: "you can delete only your own posts"
            })
        }
        await Blogs.findByIdAndDelete(req.params.Id)
        return res.status(200).json({
            msg: "Blog has been deleted successfully"
        })
    } catch (err) {
        return res.status(500).json({
            err: "somethin went worng"
        })
    }
})






module.exports = router