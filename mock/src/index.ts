import { writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { people } from './people'

const cwd = process.cwd()

async function mock<T extends () => unknown>(fn: T) {
  const data = fn()
  await writeFile(join(cwd, 'json', `${fn.name}.json`), JSON.stringify(data, null, 2))
}

mock(people)
