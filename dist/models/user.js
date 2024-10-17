userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        default:"",
        required:true
    },
    name: {
        type: String,
        default:"",
        required:true
    },
    phone:{
        type: Number,
        default: null,
        required:true
    },
    token:{
        type: String,
        default:""
    },
    // email_verify:{
    //     type:Boolean,
    //     default:false
    // },
    // temp:{
    //     type:Boolean,
    //     default:false
    // },
    created_at: {
        type: Date,
        default: new Date()
    },
    updated_at: {
        type: Date,
        default: new Date()
    },
})

const userModal = mongoose.model('user', userSchema);
module.exports = userModal;