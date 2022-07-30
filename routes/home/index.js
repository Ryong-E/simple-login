const {Router} = require('express')

const router = Router()


router.get('/',(req,res) => {
    res.render("home/index")
})

router.get('/login',(req,res) =>{
    res.render("home/login")
})
router.get('/fail',(req,res) =>{
    res.send('로그인 실패')
})

module.exports = router