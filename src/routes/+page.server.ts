import { invalid, redirect } from "@sveltejs/kit"
import { db }  from "$lib/database";
import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'




export const load: PageServerLoad = async ({ locals }) => {
  // redirect user if logged in
  if (locals.user) {
    throw redirect(302, '/registered')
  }
}

export const actions = {
  create: async ({cookies, request }) => {
    const formData = await request.formData()
    
    
      const name = formData.get('name')
      const email = formData.get('email')
      const address = formData.get('address')
      const dateofbirth = new Date(formData.get('dateofbirth')).toISOString();
      const age = formData.get('age')
      const school = formData.get('schoolname')
      const province = formData.get('province')
      const phone = formData.get('phone')
      const createdAt = new Date().toISOString()

      const combinedstring = `${name}${email}${address}${dateofbirth}${age}${school}${province}${phone}${createdAt}`
      const userAuthToken = crypto.randomUUID()

    // Add prisma code here before redirecting
    // write a function to generate unique data from the information provided in the form
    

    const user = await db.user.findUnique({
      where: { combinedstring },
    })

    if (user) {
      return invalid(400, { user: true })
      }

    await db.user.create({
      data: {
        name,
        email,
        address,
        age,
        dateofbirth,
        school,
        phone,
        province,
        createdAt,
        userAuthToken,
        combinedstring
      },
    })

    cookies.set('session', userAuthToken, {
      // send cookie for every page
      path: '/',
      // server side only cookie so you can't use `document.cookie`
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
      // set cookie to expire after a month
      maxAge: 60 * 60 * 24 * 180,
    })

    throw redirect(303, '/registered')

    return {
      success: true,
    }
  }


 
}