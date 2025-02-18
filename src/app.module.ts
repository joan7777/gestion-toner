import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TonerModule } from './toner/toner.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/gestion-toner'),
    TonerModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
