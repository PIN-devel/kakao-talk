import { Sequelize } from "sequelize";

const sequelize = new Sequelize("sqlite::memoty:");
export default sequelize;
