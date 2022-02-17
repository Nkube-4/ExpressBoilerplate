const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("mysql://root:sqldev@localhost:3306/test2");

class Post extends Model {}

Post.init(
    {
        id: {
            autoIncrement:true,
            primaryKey:true,
            type: DataTypes.INTEGER,
            unique: true,
        },
        comment: {
            type: DataTypes.STRING,
            unique:true,
        }
    },
    {
        sequelize,
        modelName:'Post'
    }
);

Post.sync({force:true}).then(() => {
    console.log("post table created");
});

module.exports = Post;