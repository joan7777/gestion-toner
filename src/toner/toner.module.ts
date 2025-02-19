import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TonerService } from './toner.service';
import { TonerController } from './toner.controller';
import { Toner, TonerSchema } from './toner.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Toner.name, schema: TonerSchema }]),
  ],
  controllers: [TonerController],
  providers: [TonerService],
})
export class TonerModule {}
