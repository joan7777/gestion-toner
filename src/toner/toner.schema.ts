import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TonerDocument = Toner & Document;

@Schema()
export class Toner {
  @Prop({ required: true })
  nomToner: string;

  @Prop({ required: true })
  bureau: string;

  @Prop({ required: true })
  nomDemandeur: string;

  @Prop({ required: true })
  compteur: number;
}

export const TonerSchema = SchemaFactory.createForClass(Toner);
