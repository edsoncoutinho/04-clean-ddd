import { AnswerComment } from '../../enterprise/entities/answer-comment'

export interface AnswerCommentsRepository {
  create: (answerComment: AnswerComment) => Promise<AnswerComment>
  findById: (answerCommentId: string) => Promise<AnswerComment | null>
  delete: (answerComment: AnswerComment) => Promise<void>
  findManyByAnswerId: (
    answerId: string,
    params: { page: number },
  ) => Promise<AnswerComment[]>
}
