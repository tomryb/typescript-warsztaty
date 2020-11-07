import React from 'react';

type ApplicationProps = {
  title: string,
  subtitle: string
}

export default function Header({title, subtitle}: ApplicationProps) {
  return (
    <div>
      <p>{title} {subtitle}</p>
    </div>
  )
}