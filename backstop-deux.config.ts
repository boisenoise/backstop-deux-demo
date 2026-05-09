import type { BackstopDeuxConfig } from 'backstop-deux'

export default {
  storybookUrl: 'http://localhost:6006',
  aiModel: 'claude-haiku-4-5',
  aiConcurrency: 5,
  screenshotConcurrency: 3,
  diffThreshold: 0.01,
  // Skip the auto-generated docs stories — we only want the real component stories
  ignorePatterns: ['**/*--docs'],
} satisfies BackstopDeuxConfig
