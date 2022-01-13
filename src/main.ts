import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: `${
      process.env.APP_ENV === 'production'
        ? process.env.FE_URL
        : 'http://localhost:3000'
    }`,
  });

  await app.listen(process.env.PORT || 5000);
}
bootstrap();
