const PostCategorySchema = (sequelize, DataTypes) => {
  const PostCategoryTable = sequelize.define(
    "PostCategory",
    {
      postId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      tableName: "posts_categories",
      timestamps: false,
      underscored: true,
    }
  );
  PostCategoryTable.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: "blogPosts",
      through: "PostCategory",
      foreignKey: "postId",
      otherKey: "categoryId",
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: "categories",
      through: "PostCategory",
      foreignKey: "categoryId",
      otherKey: "postId",
    });
  };

  return PostCategoryTable;
};

module.exports = PostCategorySchema;
