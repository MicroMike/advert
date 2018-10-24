import { Router } from 'express'
import * as UserController from './controllers/user'
import * as UserInfoController from './controllers/userInfo'
import * as AdvertController from './controllers/advert'
const router = new Router()

// router.route('/login/:email/:password').get(UserController.login)
// router.route('/putUser').post(UserController.putUser)

// router.route('/putUserInfo').post(UserInfoController.putUserInfo)

router.route('/getAdvert').post(AdvertController.getAdvert)

export default router
