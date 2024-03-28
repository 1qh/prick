'use server'

import { env } from '@/env'
import { api } from '@/trpc/server'
import { Company } from '@/types'

export async function getCompanies(
  prevState: any,
  form: {
    query: string
    setting: string
    user: string
  }
) {
  const url: string =
    env.ENDPOINT +
    '/company?query=' +
    form.query +
    '&' +
    new URLSearchParams(JSON.parse(form.setting)).toString() +
    '&user=' +
    form.user

  console.log('GET |', url)

  return (await api.company.get(await (await fetch(url)).text())) as Company[]
}
