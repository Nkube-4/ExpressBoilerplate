const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("mysql://root:sqldev@localhost:3306/test2");

class Thread extends Model {}

Thread.init(
    {
        id: {
            autoIncrement:true,
            primaryKey:true,
            type: DataTypes.INTEGER,
            unique: true,
        },
        threadTopic: {
            type: DataTypes.STRING,
            unique:true,
        }
    },
    {
        sequelize,
        modelName:'Thread'
    }
);

Thread.sync({force:true}).then(() => {
    console.log("thread table created");
});

module.exports = Thread;