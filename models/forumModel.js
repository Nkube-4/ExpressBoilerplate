const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("mysql://root:sqldev@localhost:3306/test2");

class Forum extends Model {}

Forum.init(
    {
        // Model attributes are defined here
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
            unique: true,
        },
        forumName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: "Forum", // We need to choose the model name
    }
);

Forum.sync({force:true}).then(() => {
    console.log("forum table synced");
});
// does not work because it know uses a foreign key
// has to be synced in user model

module.exports = Forum;