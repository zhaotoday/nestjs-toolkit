import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { config } from "./config";
import { AppModule } from "./app.module";
import * as helmet from "helmet";
import * as rateLimit from "express-rate-limit";
import { queryMiddleware } from "./middlewares/query.middleware";
import { AllExceptionsFilter } from "./filters/all-exceptions.filter";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle("项目示例")
    .setDescription("项目示例 API")
    .setVersion("1.0")
    .addTag("项目示例")
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup("api", app, document);

  // app.useGlobalFilters(new AllExceptionsFilter());
  app.enableCors();
  app.use(helmet());
  app.use(rateLimit(config.rateLimit));
  app.use(queryMiddleware);

  await app.listen(config.port);
}

bootstrap();
