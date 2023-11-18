
import {z} from 'zod';
import {superValidate} from 'sveltekit-superforms/server';

import {db} from '$lib/database';
import { fail, redirect} from '@sveltejs/kit'
import type { Action, Actions, PageServerLoad} from './$types'


const newContactSchema = z.object({
    name: z.string().min(3).max(50),
    age: z.number().max(25),
    dateOfBirth: z.date(),
    schoolName: z.string().max(50),
    phoneNo: z.number().max(10),
    district: z.string().max(50),
    email: z.string().email(),
    province: z.string()
    
})

export const load = async(event) =>{
    const form = await superValidate(event, newContactSchema);
    return {
        form
    }
}

const register: Action = async ({cookies, request }) => {
    const data = await request.formData()
    const name = data.get('name') as string
    const email = data.get('email') as string
    const DOB = data.get('dateOfBirth') 
    const School = data.get('schoolName') as string
    const District = data.get('district') as string
    const Province = data.get('province') as string
    const Phone = data.get('phoneNo') 
    const Age = data.get('age') 
    const userAuthToken = crypto.randomUUID()
    const user = await db.user.findUnique({
        where: { name },
      })

    if (user){
        return fail(400, { user: 'already exists' })
    }
    await db.user.create({
        data: {
            name,
            email,
            DOB,
            School,
            District,
            Province,
            Phone,
            Age,
            userAuthToken
        }
        
    })
    
    
    cookies.set('session', userAuthToken, {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 180, 
    })
    throw redirect(303, '/registered')
}


export const actions = {
    default: async(event)=>  {
        const form = await superValidate(event, newContactSchema);
        console.log(form)
        
    }
}


