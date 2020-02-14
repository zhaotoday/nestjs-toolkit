import { Global, Module, Provider } from "@nestjs/common";
import { HelpersProvider } from "./helpers.provider";
import { databaseProviders } from "./database.providers";
import { repositoryProviders } from "./repository.providers";
import { RedisProvider } from "./redis.provider";
import { StorageProvider } from "./storage.provider";
import { SmsProvider } from "./sms.provider";
import { SmsCaptchaProvider } from "./sms-captcha.provider";

const providers: Provider[] = [
  HelpersProvider,
  ...databaseProviders,
  ...repositoryProviders,
  RedisProvider,
  StorageProvider,
  SmsProvider,
  SmsCaptchaProvider
];

@Global()
@Module({
  providers,
  exports: providers
})
export class SharedModule {}
