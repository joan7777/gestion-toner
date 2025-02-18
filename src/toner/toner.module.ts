import { Module } from '@nestjs/common';
import { TonerService } from './toner.service';

@Module({
  providers: [TonerService]
})
export class TonerModule {}
