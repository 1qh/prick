import { env } from '@/env'
import { api } from '@/trpc/server'
import { Employee } from '@/types'

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const url: string = env.ENDPOINT + '/employee?id=' + params.id
  console.log('GET |', url)
  return Response.json((await api.employee.get(await (await fetch(url)).text())) as Employee[])
}
