const { User } = require('../models.User');


let auth = (req, res, next) => {
    //인증처리를 하는곳

    //client 쿠키에서 토큰을 가져온다.
    let token = req.cookies.x_auth;

    //토큰을 복호화 한 후 유져를 찾는다.
    User.findByToken(toekn, (err, user) => {
        if (err) throw err;
        if (!user) return res.json({ isAuth: false, err: true })

        req.toekn = token;
        req.user = user;
        next();
    } )
    //유져가 있으면 인증 오케이
    //유저가 없음녀 인증 노
}

module.exports = { auth };