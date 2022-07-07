import mongoose from "mongoose";
import { Sequelize, DataTypes } from 'sequelize';
import _ from 'lodash';
import casual from 'casual';
// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:admin@localhost:27017?authMechanism=DEFAULT', {
    useUnifiedTopology: true,    
    useNewUrlParser: true,
})
.then(() => console.log('Connection with MongoDB was established successfully'))
.catch((err) => console.log(`Error connecting to Mongodb ${err.message}`));

const widgetSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    soldout: {
        type: String
    },
    inventory: {
        type: String
    },
    stores: {
        type: Array
    }
});

const Widgets = mongoose.model('widgets', widgetSchema);

const sequelize = new Sequelize('sqlite::memory:');

const Categories = sequelize.define('categories', {
    category: DataTypes.STRING,
    description: DataTypes.STRING,
});

Categories.sync({ force: true}).then(() => {
    _.times(5, (i) => {
        Categories.create({
            category: casual.word,
            description: casual.sentence,
        });
    });
});

export { Widgets, Categories };
        