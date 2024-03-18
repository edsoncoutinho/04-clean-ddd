import { PaginationParams } from '@/core/repositories/pagination-params'
import { AnswerCommentsRepository } from '@/domain/forum/application/repositories/answer-comments-repository'
import { AnswerComment } from '@/domain/forum/enterprise/entities/answer-comment'

export class InMemoryAnswerCommentsRepository
  implements AnswerCommentsRepository
{
  public items: AnswerComment[] = []

  async create(answerComment: AnswerComment) {
    this.items.push(answerComment)
    return answerComment
  }

  async findById(answerCommentId: string) {
    return (
      this.items.find(
        (answerComment) => answerComment.id.toString() === answerCommentId,
      ) || null
    )
  }

  async delete(answerComment: AnswerComment) {
    const itemIndex = this.items.findIndex(
      (item) => item.id === answerComment.id,
    )

    this.items.splice(itemIndex, 1)
  }

  async findManyByAnswerId(answerId: string, { page }: PaginationParams) {
    return this.items
      .filter((answer) => answer.answerId.toString() === answerId)
      .slice((page - 1) * 20, page * 20)
  }
}
