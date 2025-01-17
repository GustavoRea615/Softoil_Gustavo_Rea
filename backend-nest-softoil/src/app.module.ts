import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma.module';
import { AuthModule } from './auth/auth.module';
import { LogModule } from './log/log.module';

@Module({
  imports: [UsersModule, PrismaModule, AuthModule, LogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
