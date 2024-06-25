import Link from 'next/link'

export const ContactLinks = () => {
  return (
    <>
      <div className="flex flex-col">
        <p className="mb-6 text-xl font-bold text-og-text 2xl:text-3xl">
          {'FOR FURTHER ENQUIRIES'}
        </p>
        <p className="mb-4 text-lg text-og-text 2xl:text-xl">
          {'paulius.astrauskas97@gmail.com'}
        </p>
        <p className="text-lg text-og-text 2xl:text-xl">{'+37064378884'}</p>
      </div>
      <div className="flex flex-col">
        <p className="mb-6 text-xl font-bold text-og-text 2xl:text-3xl ">
          {'SOCIAL MEDIA'}
        </p>
        <Link
          href={'https://linkedin.com/in/paulius-astrauskas'}
          rel="noopener norefferer"
          target="_blank"
          className={
            'relative mb-4 w-fit text-lg text-og-text animation-buttonUnderline 2xl:text-xl'
          }
        >
          {'LinkedIn'}
        </Link>
        <Link
          href={'https://github.com/Pauliiuuss'}
          rel="noopener norefferer"
          target="_blank"
          className={
            'relative w-fit text-lg text-og-text animation-buttonUnderline 2xl:text-xl'
          }
        >
          {'Github'}
        </Link>
      </div>
    </>
  )
}
