'use client'

import { useForm } from 'react-hook-form'

export const ContactForm = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = () => {
    return
  }

  return (
    <form className="flex flex-col gap-12">
      <div className="flex flex-col gap-3">
        <p className="text-sm text-og-text 2xl:text-lg">{'Your Name'}</p>
        <input
          className="h-16 w-full rounded-md border-2 border-og-gray-500 bg-og-blured-black p-4 backdrop-blur-lg"
          type="text"
          placeholder="Paulius Astrauskas"
          required
          {...register('name')}
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm text-og-text 2xl:text-lg">{'Email'}</p>
        <input
          className="h-16 w-full rounded-md border-2 border-og-gray-500 bg-og-blured-black p-4 backdrop-blur-lg"
          type="email"
          placeholder="random@mail.com"
          required
          {...register('email')}
        />
      </div>{' '}
      <div className="flex flex-col gap-2">
        <p className="text-sm text-og-text 2xl:text-lg">{'Message'}</p>
        <textarea
          className="h-32 w-full rounded-md border-2 border-og-gray-500 bg-og-blured-black p-4 backdrop-blur-lg"
          placeholder="Message"
          required
          style={{ resize: 'none' }}
          {...register('message')}
        />
      </div>
      <button
        className="h-12 rounded-md bg-og-green-300 text-og-text hover:bg-og-green-400 2xl:text-lg"
        onClick={handleSubmit(onSubmit)}
      >
        SUBMIT
      </button>
    </form>
  )
}
