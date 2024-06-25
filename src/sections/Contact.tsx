import { Card } from '@/components/Card'
import { ContactForm } from '@/components/ContactForm'
import { ContactLinks } from '@/components/ContactLinks'

export const Contact = ({ id }: { id: string }) => {
  return (
    <Card sx={'flex-col py-24 2xl:py-44 bg-grad bg-cover'} id={id} key={id}>
      <h2 className="text-4xl font-bold text-og-text 2xl:pb-12 2xl:text-8xl">
        {'CONTACT ME'}
      </h2>
      <div className="flex flex-col gap-8 2xl:flex-row 2xl:gap-40">
        <div className="h-full 2xl:w-[50%]">
          <ContactForm />
        </div>
        <div className="mt-9 flex h-full flex-col gap-12">
          <ContactLinks />
        </div>
      </div>
    </Card>
  )
}
