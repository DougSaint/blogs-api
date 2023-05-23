const BlogPostSchema = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    "BlogPost",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
      published: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},
      updated: {type: DataTypes.DATE, defaultValue: DataTypes.NOW}
    },
    {
      timestamps: false,
      underscored: true,
    }
  );

  BlogPost.associate = function (models) {
    BlogPost.belongsTo(models.User, {
      foreignKey: "userId",
      as: "user",
    });
  };

  return BlogPost;
};

module.exports = BlogPostSchema;
