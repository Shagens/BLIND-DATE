const{Schema, model} = require("mongoose");
const quizSchema = new Schema({ 
    hobbies: [{
        type: String, 
    }],
    name: {
        type: String,
    }, 
    favorite_music: [{
        type: String,
    }],
    smoker: {
        type: Boolean,
    },
    drinker: {
        type: Boolean,
    },
    favorite_foods: [{
        type: String,
    }],
    books: [{
        type: String,
    }],
    sports: {
        type: Boolean,
    },
    gym: {
        type: Boolean,
    },
    pets: {
        type: Boolean,
    },
})

const Quiz = model("Quiz", quizSchema)

module.exports= Quiz;