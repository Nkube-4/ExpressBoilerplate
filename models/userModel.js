const Forum = require("./forumModel");
const Thread = require("./threadModel");
const Post = require("./postModel");
const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("mysql://root:sqldev@localhost:3306/test2");

class User extends Model {}

User.init(
    {
        // Model attributes are defined here
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
            unique: true,
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            // allowNull defaults to true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isMod: {
            type: DataTypes.BOOLEAN,
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
        }
    },
    {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: "User", // We need to choose the model name
    }
);

User.hasMany(Forum);
Forum.belongsTo(User);
User.hasMany(Thread);
Thread.belongsTo(User);
User.hasMany(Post);
Post.belongsTo(User);

User.sync({force:true}).then(() => {
    console.log("user table synced");
    Forum.sync({force:true}).then(() => {
        console.log("added foreign key to forum");
    });
    Thread.sync({force:true}).then(() => {
        console.log("added foreign key to thread");
    });
    Post.sync({force:true}).then(() => {
        console.log("added foreign key to post");
    });
});

// Forum.sync().then(() => {
//     console.log("adding foreign key and field to forum");
// });

module.exports = User;
