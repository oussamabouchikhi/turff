import { Controller, Post, Body, Param } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/request/create-comment.dto';

@Controller('tickets/:id/comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  // @TODO
  @Post()
  create(@Param('id') id: string, @Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(id, createCommentDto);
  }
}
