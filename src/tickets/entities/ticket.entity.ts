import { IsNumber, IsString } from 'class-validator';
import { Comment } from 'src/comments/entities/comment.entity';
import { PrimaryGeneratedColumn, Column, OneToMany, Entity } from 'typeorm';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

  @Column()
  @IsString()
  title: string;

  @Column()
  @IsString()
  description: string;

  @OneToMany(() => Comment, (comment) => comment.ticket_id)
  comments: Comment[];
}
