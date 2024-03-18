import { QuestionComment } from '../../enterprise/entities/question-comment'

export interface QuestionCommentsRepository {
  create: (questionComment: QuestionComment) => Promise<QuestionComment>
  findById: (questionCommentId: string) => Promise<QuestionComment | null>
  delete: (questionComment: QuestionComment) => Promise<void>
  findManyByQuestionId: (
    questioId: string,
    params: { page: number },
  ) => Promise<QuestionComment[]>
}
