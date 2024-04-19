import type { RequestHandler } from './$types'
import { redirect } from '@sveltejs/kit'

export const GET: RequestHandler = ({ params }) => redirect(303, `/${params.lang}/blue`)
