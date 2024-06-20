import { Card } from '@/components/Card'
import { ContactForm } from '@/components/ContactForm'
import { ContactLinks } from '@/components/ContactLinks'

export const Contact = ({ id }: { id: string }) => {
  return (
    <Card sx={'flex-col py-24 lg:py-44 bg-grad bg-cover'} id={id}>
      <h2 className="text-og-text text-4xl font-bold lg:text-9xl">
        {'CONTACT ME'}
      </h2>
      <div className="flex flex-col gap-8 lg:flex-row lg:gap-40">
        <div className="h-full lg:w-[50%]">
          <ContactForm />
        </div>
        <div className="mt-9 flex h-full flex-col gap-12">
          <ContactLinks />
        </div>
      </div>
    </Card>
  )
}
