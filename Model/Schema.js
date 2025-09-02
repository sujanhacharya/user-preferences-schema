const mongoose = requrie('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
})