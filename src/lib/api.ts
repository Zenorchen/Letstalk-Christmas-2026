import type {
  StartQuizResponse,
  SubmitAnswerResponse,
  QuizResultResponse,
  QuizHistoryResponse,
  QuizResult,
  AnswerRecord,
} from './types'
import { getRandomQuestions } from './mock'

// --- In-memory mock storage ---
let _currentSession: {
  sessionId: string
  userId: string
  answers: AnswerRecord[]
  startedAt: string
  questions: import('./types').Question[]
} | null = null

let _lastResult: QuizResultResponse | null = null

function calcTitle(score: number): Pick<QuizResult, 'title' | 'titleTier'> {
  if (score === 10) return { title: '絕頂聰明小精靈', titleTier: 'master' }
  if (score >= 7) return { title: '聖誕百科全書', titleTier: 'gold' }
  if (score >= 4) return { title: '聖誕知識達人', titleTier: 'silver' }
  return { title: '聖誕小麻瓜', titleTier: 'bronze' }
}

// POST /api/quiz/start
export async function startQuiz(userId: string): Promise<StartQuizResponse> {
  await delay(300)
  const questions = getRandomQuestions(10)
  const sessionId = `session_${Date.now()}`
  _currentSession = {
    sessionId,
    userId,
    answers: [],
    startedAt: new Date().toISOString(),
    questions,
  }
  return { sessionId, questions }
}

// POST /api/quiz/answer
export async function submitAnswer(params: {
  sessionId: string
  questionId: string
  selectedIndex: number
  timeSpent: number
  correctIndex: number
  explanation: string
}): Promise<SubmitAnswerResponse> {
  await delay(150)
  const correct = params.selectedIndex === params.correctIndex
  if (_currentSession) {
    _currentSession.answers.push({
      questionId: params.questionId,
      selectedIndex: params.selectedIndex,
      isCorrect: correct,
      timeSpent: params.timeSpent,
    })
  }
  return {
    correct,
    correctIndex: params.correctIndex,
    explanation: params.explanation,
  }
}

// GET /api/quiz/result/:sid
export async function getQuizResult(sessionId: string): Promise<QuizResultResponse> {
  await delay(300)
  if (!_currentSession || _currentSession.sessionId !== sessionId) {
    throw new Error('Session not found')
  }
  const score = _currentSession.answers.filter((a) => a.isCorrect).length
  const { title, titleTier } = calcTitle(score)
  const result: QuizResultResponse = {
    score,
    title,
    titleTier,
    stickerUnlocked: score >= 1,
    answers: _currentSession.answers,
  }
  _lastResult = result
  return result
}

// GET /api/quiz/history/:uid
export async function getQuizHistory(userId: string): Promise<QuizHistoryResponse> {
  await delay(200)
  if (!_lastResult || !_currentSession) {
    return { hasPlayed: false }
  }
  return {
    hasPlayed: true,
    lastSession: {
      sessionId: _currentSession.sessionId,
      score: _lastResult.score,
      title: _lastResult.title,
      titleTier: _lastResult.titleTier,
      playedAt: _currentSession.startedAt,
      answers: _lastResult.answers,
      questions: _currentSession.questions,
    },
  }
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
