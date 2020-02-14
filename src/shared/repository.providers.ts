import { Provider } from "@nestjs/common";
import { File } from "../entities/file.entity";
import { WxUser } from "../entities/wx-user.entity";
import { Manager } from "../entities/manager.entity";
import { RbacResource } from "../entities/rbac-resource.entity";
import { RbacRole } from "../entities/rbac-roles.entity";

export const repositoryProviders: Provider[] = [
  {
    provide: "fileRepository",
    useValue: File
  },
  {
    provide: "managerRepository",
    useValue: Manager
  },
  {
    provide: "rbacResourceRepository",
    useValue: RbacResource
  },
  {
    provide: "rbacRoleRepository",
    useValue: RbacRole
  },
  {
    provide: "wxUserRepository",
    useValue: WxUser
  }
];
