import React from 'react'

export const scrollToElement = (
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  id: string
) => {
  event.preventDefault()

  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })

    window.history.pushState(null, '', window.location.pathname)
  }
}
