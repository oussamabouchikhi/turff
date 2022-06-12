import { Comment } from 'src/comments/entities/comment.entity';
import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Comment, (comment) => comment.user_id)
  comments: Comment[];
}
