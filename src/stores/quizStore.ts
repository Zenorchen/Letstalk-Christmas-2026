import { create } from 'zustand'
import type {
  QuizSession,
  QuizResult,
  QuizHistoryResponse,
  SubmitAnswerResponse,
} from '@/lib/types'
import {
  startQuiz as apiStartQuiz,
  submitAnswer as apiSubmitAnswer,
  getQuizResult,
  getQuizHistory,
} from '@/lib/api'

interface QuizStore {
  // Session
  session: QuizSession | null

  // 歷史紀錄（Landing 頁用）
  history: QuizHistoryResponse | null

  // Result overlay 控制
  showResult: boolean
  result: QuizResult | null

  // Actions
  startNewQuiz: () => Promise<void>
  submitAnswer: (
    questionId: string,
    selectedIndex: number,
    timeSpent: number
  ) => Promise<SubmitAnswerResponse>
  completeQuiz: () => Promise<void>
  loadHistory: (userId: string) => Promise<void>
  openResult: () => void
  closeResult: () => void
  reset: () => void
}

const MOCK_USER_ID = 'user_local'

export const useQuizStore = create<QuizStore>((set, get) => ({
  session: null,
  history: null,
  showResult: false,
  result: null,

  startNewQuiz: async () => {
    const response = await apiStartQuiz(MOCK_USER_ID)
    const session: QuizSession = {
      sessionId: response.sessionId,
      userId: MOCK_USER_ID,
      questions: response.questions,
      answers: [],
      startedAt: new Date().toISOString(),
    }
    set({ session, result: null, showResult: false })
  },

  submitAnswer: async (questionId, selectedIndex, timeSpent) => {
    const { session } = get()
    if (!session) throw new Error('No active session')

    const question = session.questions.find((q) => q.id === questionId)
    if (!question) throw new Error('Question not found')

    const response = await apiSubmitAnswer({
      sessionId: session.sessionId,
      questionId,
      selectedIndex,
      timeSpent,
      correctIndex: question.correctIndex,
      explanation: question.explanation,
    })

    const newAnswer = {
      questionId,
      selectedIndex,
      isCorrect: response.correct,
      timeSpent,
    }

    set((state) => ({
      session: state.session
        ? { ...state.session, answers: [...state.session.answers, newAnswer] }
        : null,
    }))

    return response
  },

  completeQuiz: async () => {
    const { session } = get()
    if (!session) return

    const resultResponse = await getQuizResult(session.sessionId)
    const result: QuizResult = {
      score: resultResponse.score,
      title: resultResponse.title,
      titleTier: resultResponse.titleTier,
      stickerUnlocked: resultResponse.stickerUnlocked,
    }

    const updatedHistory: QuizHistoryResponse = {
      hasPlayed: true,
      lastSession: {
        sessionId: session.sessionId,
        score: result.score,
        title: result.title,
        titleTier: result.titleTier,
        playedAt: session.startedAt,
        answers: session.answers,
        questions: session.questions,
      },
    }

    set({
      result,
      history: updatedHistory,
      session: session
        ? { ...session, completedAt: new Date().toISOString() }
        : null,
    })
  },

  loadHistory: async (userId) => {
    const history = await getQuizHistory(userId)
    set({ history })
  },

  openResult: () => set({ showResult: true }),
  closeResult: () => set({ showResult: false }),

  reset: () =>
    set({
      session: null,
      showResult: false,
      result: null,
    }),
}))
