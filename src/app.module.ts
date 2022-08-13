import { DatabaseService } from './core/database/database.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/config';
@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      useClass: DatabaseService,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
