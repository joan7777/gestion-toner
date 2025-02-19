import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { TonerService } from './toner.service';

@Controller('toners')
export class TonerController {
  constructor(private readonly tonerService: TonerService) {}

  @Post()
  create(@Body() data: any) {
    return this.tonerService.create(data);
  }

  @Get()
  findAll() {
    return this.tonerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tonerService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.tonerService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tonerService.remove(id);
  }
}
