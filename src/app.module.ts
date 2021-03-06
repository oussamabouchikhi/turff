import { User } from 'src/users/entities/user.entity';
import { Ticket } from 'src/tickets/entities/ticket.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module, ValidationPipe } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketsModule } from './tickets/tickets.module';
import { APP_PIPE } from '@nestjs/core';
import { CommentsModule } from './comments/comments.module';
import { UsersModule } from './users/users.module';
import { Comment } from 'src/comments/entities/comment.entity';

@Module({
  imports: [
    TicketsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.development`,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'mysql',
          host: config.get<string>('DB_HOST'),
          port: +config.get<string>('DB_PORT'),
          database: config.get<string>('DB_NAME'),
          username: config.get<string>('DB_USERNAME'),
          password: config.get<string>('DB_PASSWORD'),
          entities: [Ticket, Comment, User],
          autoLoadEntities: true,
          synchronize: true,
        };
      },
    }),
    CommentsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
      }),
    },
  ],
})
export class AppModule {}
