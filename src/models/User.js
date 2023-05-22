const UserSchema = (sequelize, DataTypes) => {
  console.log('User')
  const UserTable = sequelize.define("User", {
    id: { 
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
    {
      timestamps: false,
      underscored: true,
    },
  );
  
  UserTable.associate = function(models) {
    UserTable.hasMany(models.BlogPost, {
      foreignKey: 'userId',
      as: 'blogPosts'
    });
  };

  return UserTable;
}

module.exports = UserSchema;
