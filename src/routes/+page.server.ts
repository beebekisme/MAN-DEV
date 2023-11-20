import { invalid, redirect } from "@sveltejs/kit"
import { db }  from "$lib/database";


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
    const userAuthToken = crypto.randomUUID()

    // Add prisma code here before redirecting
    console.log('dateofbirth')
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