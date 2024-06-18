'use client'

import { useForm } from 'react-hook-form'

export const ContactForm = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = () => {
    return
  }

  return (
    <form className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <p className="text-xl text-og-background lg:text-2xl">{'YOUR NAME'}</p>
        <input
          className="h-16 w-full rounded-md border-2 border-og-gray-100 p-4"
          type="text"
          placeholder="Paulius Astrauskas"
          required
          {...register('name')}
        />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-xl text-og-background lg:text-2xl">{'EMAIL'}</p>
        <input
          className="h-16 w-full rounded-md border-2 border-og-gray-100 p-4"
          type="text"
          placeholder="random@mail.com"
          required
          {...register('email')}
        />
      </div>{' '}
      <div className="flex flex-col gap-4">
        <p className="text-xl text-og-background lg:text-2xl">{'MESSAGE'}</p>
        <textarea
          className="h-32 w-full rounded-md border-2 border-og-gray-100 p-4"
          placeholder="Message"
          required
          {...register('message')}
        />
      </div>
      <button
        className="bg-og-green-goda h-12 rounded-md text-lg text-og-background lg:text-xl"
        onClick={handleSubmit(onSubmit)}
      >
        SUBMIT
      </button>
    </form>
  )
}
