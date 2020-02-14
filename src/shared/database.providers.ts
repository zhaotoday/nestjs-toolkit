import { Sequelize } from "sequelize-typescript";
import { config } from "../config";
import { WxUser } from "../entities/wx-user.entity";
import { File } from "../entities/file.entity";
import { RbacResource } from "../entities/rbac-resource.entity";
import { RbacRole } from "../entities/rbac-roles.entity";
import { Manager } from "../entities/manager.entity";

export const databaseProviders = [
  {
    provide: "Sequelize",
    useFactory: async (): Promise<Sequelize> => {
      const sequelize = new Sequelize(config.database);
      sequelize.addModels([File, Manager, RbacResource, RbacRole, WxUser]);
      await sequelize.sync();
      return sequelize;
    }
  }
];
