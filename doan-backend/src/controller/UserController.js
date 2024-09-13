const userServices = require('../services/UserServices')

const createUser = async (req ,res )=> {
    try {
        console.log(req.body);
        const res = await userServices.createUser();
        return res.status(200).json(res);
        // const {name, email, password, confirmPassword, phone} = rep.body
        // const reg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        // const isCheckEmail = reg.test(email)
        // if(!name || !email || !password || !confirmPassword|| !phone){
        //     return res.status(202),json({
        //         status: 'ERR',
        //         message:'the input is requried'
        //     })

        // }
        // console.log('isCheckEmail',isCheckEmail);
        // const res = await userServices.createUser();
        // return res.status(200).json(res)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}
module.exports = {createUser} ;