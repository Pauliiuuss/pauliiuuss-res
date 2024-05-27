import classNames from 'classnames'
import Link from 'next/link'

import { Card } from '@/components/Card'
import { ContactForm } from '@/components/ContactForm'

import { buttonUnderlineAnimation } from '@/misc/constants'

export const Contact = ({ id }: { id: string }) => {
  return (
    <Card sx={'gap-24 bg-curves bg-cover flex-col'} id={id}>
      <h2 className="text-9xl font-bold text-og-black">CONTACT ME</h2>
      <div className="flex flex-row gap-40">
        <div className="h-full w-[50%]">
          <ContactForm />
        </div>
        <div className="mt-9 flex h-full flex-col gap-12">
          <div className="flex flex-col">
            <p className="mb-6 text-3xl font-bold text-og-black">
              {'FOR FURTHER ENQUIRIES'}
            </p>
            <p className="mb-4 text-xl text-og-gray-600">
              {'paulius.astrauskas97@gmail.com'}
            </p>
            <p className="text-xl text-og-gray-600">{'+37064378884'}</p>
          </div>
          <div className="flex flex-col">
            <p className="mb-6 text-3xl font-bold text-og-black">
              {'SOCIAL MEDIA'}
            </p>
            <Link
              href={'https://linkedin.com/in/paulius-astrauskas'}
              rel="noopener norefferer"
              target="_blank"
              className={classNames(
                buttonUnderlineAnimation,
                'relative mb-4 w-fit text-xl text-og-gray-500 hover:text-og-gray-600'
              )}
            >
              {'LinkedIn'}
            </Link>
            <Link
              href={'https://github.com/Pauliiuuss'}
              rel="noopener norefferer"
              target="_blank"
              className={classNames(
                buttonUnderlineAnimation,
                'relative w-fit text-xl text-og-gray-500 hover:text-og-gray-600'
              )}
            >
              {'Github'}
            </Link>
          </div>
        </div>
      </div>
    </Card>
  )
}
