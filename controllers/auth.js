const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')
const User = require('../models/User')

module.exports.login = async function (req, res) {
  try {
    const candidate = await User.findOne({email: req.body.email})
    if (candidate) {
      const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
      if (passwordResult) {
        const token = jwt.sign({
          email: candidate.email,
          userId: candidate._id
        }, keys.jwt, {expiresIn: 60 * 60})

        res.status(200).json({
          token: `Bearer ${token}`
        })
      } else {
        res.status(401).json({
          message: 'Пароль не верный, попробуйте снова'
        })
      }
    } else {
      res.status(404).json({
        message: 'Пользователь с таким email не найден'
      })
    }
  } catch (e) {
    console.log('In route login something went wrong', e)
  }
}

module.exports.register = async function (req, res) {
  try {
    const candidate = await User.findOne({email: req.body.email})
    if (candidate) {
      res.status(409).json({
        message: 'Такой email уже существует, попробуйте другой'
      })
    } else {
      const salt = bcrypt.genSaltSync(10)
      const password = req.body.password
      const user = new User({
        email: req.body.email,
        password: bcrypt.hashSync(password, salt),
      })
      await user.save()
      res.status(201).json(user)
    }
  } catch (e) {
    console.log('In route register something went wrong', e)
  }
}