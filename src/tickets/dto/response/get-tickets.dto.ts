import { Comment } from 'src/comments/entities/comment.entity';
import { Expose } from 'class-transformer';

export class GetTicketsDto {
  @Expose()
  title: string;

  @Expose()
  description: string;

  @Expose()
  comments: Comment[];
}
