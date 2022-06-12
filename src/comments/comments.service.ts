import { Comment } from 'src/comments/entities/comment.entity';
import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/request/create-comment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private commentsRepository: Repository<Comment>,
  ) {}

  create(createCommentDto: CreateCommentDto) {
    const ticket = this.commentsRepository.create(createCommentDto);
    return this.commentsRepository.save(ticket);
  }
}
