/**
 * 自定义 push 脚本（兼容所有包管理工具）
 * @description `nr push` => `pnpm run push` => `git add . && git commit -m "chore: auto commit" && git push`
 * @description `nr push {msg}` => `pnpm run push {msg}` => `git add . && git commit -m {msg} && git push`
 */
import { argv } from 'node:process'
import { execSync } from 'node:child_process'

const msg = argv[2] || 'chore: auto commit'
const script = `git add . && git commit -m "${msg}" && git push`

execSync(script)
