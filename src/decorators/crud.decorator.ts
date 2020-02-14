import { PARAMTYPES_METADATA } from "@nestjs/common/constants";
import { get } from "lodash";
import { PlaceholderDto } from "../dtos/placeholder.dto";
import { CrudController } from "../core/crud.controller";
import { ControllerMethods } from "../enums/controller-methods";

function cloneDecorators(from, to): void {
  Reflect.getMetadataKeys(from).forEach(key => {
    const value = Reflect.getMetadata(key, from);
    Reflect.defineMetadata(key, value, to);
  });
}

function clonePropDecorators(from, to, name): void {
  Reflect.getMetadataKeys(from, name).forEach(key => {
    const value = Reflect.getMetadata(key, from, name);
    Reflect.defineMetadata(key, value, to, name);
  });
}

export function Crud({
  Dto,
  methods = [
    ControllerMethods.FIND_ALL,
    ControllerMethods.FIND_BY_PK,
    ControllerMethods.CREATE,
    ControllerMethods.UPDATE,
    ControllerMethods.DESTROY
  ]
}): Function {
  return function(target): void {
    const crudController = new CrudController(target.repository);
    const Controller = target;
    const controller = target.prototype;

    cloneDecorators(crudController, controller);

    for (const method of [ControllerMethods.ALL, ...methods]) {
      controller[method] = function(...args): Function {
        return crudController[method].apply(this, args);
      };

      Object.defineProperty(controller[method], "name", {
        value: method
      });

      cloneDecorators(crudController[method], controller[method]);
      clonePropDecorators(crudController, controller, method);
      clonePropDecorators(CrudController, Controller, method);

      const types: [] = Reflect.getMetadata(
        PARAMTYPES_METADATA,
        controller,
        method
      );

      Reflect.decorate(
        [
          Reflect.metadata(
            PARAMTYPES_METADATA,
            types.map((v: any) => {
              if (get(v, "name") === PlaceholderDto.name) {
                return Dto;
              }
              return v;
            })
          )
        ],
        controller,
        method,
        Object.getOwnPropertyDescriptor(controller, method)
      );
    }
  };
}
