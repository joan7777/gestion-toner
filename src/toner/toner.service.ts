import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Toner, TonerDocument } from './toner.schema';

@Injectable()
export class TonerService {
  constructor(
    @InjectModel(Toner.name) private tonerModel: Model<TonerDocument>,
  ) {}

  async create(data: any): Promise<Toner> {
    const newToner = new this.tonerModel(data);
    return newToner.save();
  }

  async findAll(): Promise<Toner[]> {
    return this.tonerModel.find().exec();
  }

  async findOne(id: string): Promise<Toner> {
    const toner = await this.tonerModel.findById(id).exec();
    if (!toner) {
      throw new NotFoundException(`Toner avec l'ID ${id} introuvable`);
    }
    return toner;
  }

  async update(id: string, data: any): Promise<Toner> {
    const updatedToner = await this.tonerModel
      .findByIdAndUpdate(id, data, { new: true })
      .exec();
    if (!updatedToner) {
      throw new NotFoundException(
        `Impossible de mettre à jour : Toner avec l'ID ${id} introuvable`,
      );
    }
    return updatedToner;
  }

  async remove(id: string): Promise<Toner> {
    const deletedToner = await this.tonerModel.findByIdAndDelete(id).exec();
    if (!deletedToner) {
      throw new NotFoundException(
        `Impossible de supprimer : Toner avec l'ID ${id} introuvable`,
      );
    }
    return deletedToner;
  }
}
