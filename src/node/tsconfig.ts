import fs from 'node:fs'
import path from 'node:path'

const __dirname = path.dirname(new URL(import.meta.url).pathname)

export function nodeTsConfig() {
  const tsConfigContents = fs.readFileSync(path.join(__dirname, 'tsconfig.json'), 'utf8')
  const tsConfigWithoutComments = tsConfigContents.replace(/\/\/.*$/gm, '')
  return JSON.parse(tsConfigWithoutComments)
}
