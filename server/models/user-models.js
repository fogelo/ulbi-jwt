const {Schema, model} = require("mongoose")

const UserSchema = new Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, unique: true, required: true},
    isActivated: {type: Boolean, default: false}, // подтвердил ли пользователь почту
    activationLink: {type: String} //ссылка для активации
})

// User - название модели
module.exports = model("User", UserSchema)
