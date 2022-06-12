import { Ticket } from 'src/tickets/entities/ticket.entity';
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

  create(id: string, createCommentDto: CreateCommentDto) {
    const ticket = this.commentsRepository.create(createCommentDto);
    ticket.ticket_id = id as unknown as Ticket;
    return this.commentsRepository.save(ticket);
  }
}
