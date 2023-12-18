import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Task {
  @Prop({
    required: true,
    unique: true,
    trim: true,
  })
  Title: string;
  @Prop({
    trim: true,
  })
  Description: string;
  @Prop({
    default: false,
  })
  done: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
