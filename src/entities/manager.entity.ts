import {
  BeforeBulkCreate,
  BeforeBulkUpdate,
  BeforeCreate,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { Is } from "../enums/is.enum";
import { HelpersProvider } from "../shared/helpers.provider";

const { getPasswordHash } = new HelpersProvider();

@Table({
  tableName: "managers",
  comment: "管理员",
})
export class Manager extends Model {
  @Column({
    type: DataType.STRING(50),
    comment: "用户名",
  })
  username: string;

  @Column({
    type: DataType.STRING(100),
    comment: "密码",
  })
  hashedPassword: string;

  @Column({
    type: DataType.JSON,
    comment: "角色",
  })
  roles: object;

  @Column({
    type: DataType.TINYINT({ length: 1 }),
    comment: "状态",
    defaultValue: Is.True,
  })
  status: Is;

  @BeforeCreate
  static onBeforeCreate(instance) {
    if (instance.hashedPassword) {
      instance.hashedPassword = getPasswordHash(instance.hashedPassword);
    }
  }

  @BeforeBulkUpdate
  static onBeforeBulkUpdate({ attributes }) {
    if (attributes.hashedPassword) {
      attributes.hashedPassword = getPasswordHash(attributes.hashedPassword);
    }
  }

  @BeforeBulkCreate
  static onBeforeBulkCreate(instances) {
    instances.forEach((instance) => {
      if (instance.hashedPassword) {
        instance.hashedPassword = getPasswordHash(instance.hashedPassword);
      }
    });
  }
}
