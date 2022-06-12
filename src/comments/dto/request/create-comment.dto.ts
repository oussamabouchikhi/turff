import { User } from './../../../users/entities/user.entity';
export class CreateCommentDto {
  title: string;

  description: string;

  user_id: User;

  text: string;
}
