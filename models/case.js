const Sequelize=require('sequelize');
const db=require('../db');

const Case=db.define('Case',{
    id:{
        type:Sequelize.INTEGER,primaryKey:true,allowNull:false,autoIncrement:true
    },
    name:{
        type:Sequelize.STRING(20),allowNull: false
    },
    img:{
        type:Sequelize.STRING,allowNull: false
    },
    desc:{
        type:Sequelize.STRING
    },
    content:{
        type:Sequelize.TEXT
    },
},{
    underscored:true,
    tableName:'case',
});

module.exports=Case;