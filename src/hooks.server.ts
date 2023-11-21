import type { Handle } from '@sveltejs/kit'
import { db } from '$lib/database'
import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals }) => {
  // redirect user if logged in
  if (locals.user) {
    throw redirect(302, '/registered')
  }
}
export const handle: Handle = async ({ event, resolve }) => {
  // get cookies from browser
  const session = event.cookies.get('session')

  if (!session) {
    // if there is no session load page as normal
    return await resolve(event)
  }

  // find the user based on the session
  const user = await db.user.findUnique({
    where: { userAuthToken: session },
    select: { name: true, 
            email: true,
            address: true,
            age: true,
            dateofbirth: true,
            school: true,
            phone: true,
            createdAt: true,
        },
  })

  // if `user` exists set `events.local`
  if (user) {
    event.locals.user = {
      name: user.name,
        email: user.email,
        address: user.address,
        age: user.age,
        dateofbirth: user.dateofbirth,
        school: user.school,
        phone: user.phone,
        createdAt: user.createdAt,
    }
  }

  // load page as normal
  return await resolve(event)
}
