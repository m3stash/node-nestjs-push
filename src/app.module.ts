import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { secrets } from '../keypass';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://admin:${secrets.mongoPwd}@${secrets.mongoUrl}/${secrets.mongoDatabase}?retryWrites=true&w=majority`,
      {
        connectionFactory: (connection) => {
          connection.then(() => {
            console.log('connection OK');
          });
          connection.catch(() => {
            console.log('connection KO');
          });
          return connection;
        },
      },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}