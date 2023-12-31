const CategorySchema = (sequelize, DataTypes) => {
  const CategoryTable = sequelize.define(
    "Category",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
      underscored: true,
    }
  );


  return CategoryTable;
};

module.exports = CategorySchema;
