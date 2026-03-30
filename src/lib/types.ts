// 單一題目
export interface Question {
  id: string
  text: string
  options: string[]
  correctIndex: number
  explanation: string
}

// 單題作答紀錄
export interface AnswerRecord {
  questionId: string
  selectedIndex: number
  isCorrect: boolean
  timeSpent: number
}

// 一輪遊戲的 session
export interface QuizSession {
  sessionId: string
  userId: string
  questions: Question[]
  answers: AnswerRecord[]
  startedAt: string
  completedAt?: string
}

// 結果頭銜
export interface QuizResult {
  score: number
  title: string
  titleTier: 'bronze' | 'silver' | 'gold' | 'master'
  stickerUnlocked: boolean
}

// API response 型別
export interface StartQuizResponse {
  sessionId: string
  questions: Question[]
}

export interface SubmitAnswerResponse {
  correct: boolean
  correctIndex: number
  explanation: string
}

export interface QuizResultResponse extends QuizResult {
  answers: AnswerRecord[]
}

export interface QuizHistoryResponse {
  hasPlayed: boolean
  lastSession?: {
    sessionId: string
    score: number
    title: string
    titleTier: string
    playedAt: string
    answers: AnswerRecord[]
    questions: Question[]
  }
}
