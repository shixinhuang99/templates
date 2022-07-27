import { faker } from '@faker-js/faker'
import dayjs from 'dayjs'
import { loop } from './utils'

interface People {
  name: string
  age: number
  birthday: string
  married: boolean
}

export function people(): People[] {
  return loop<People>(() => {
    const birthdate = faker.date.birthdate({ min: 1, max: 100, mode: 'age' })
    const age = new Date().getFullYear() - birthdate.getFullYear()
    return {
      name: faker.name.findName(),
      age,
      birthday: dayjs(birthdate).format('YYYY-MM-DD'),
      married: age > 18 ? faker.helpers.arrayElement([true, false]) : false,
    }
  }, 30)
}
