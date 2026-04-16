export type IconProps = {
  name: string
  className?: string
  filled?: boolean
  title?: string
}

export function Icon({ name, className, filled = false, title }: IconProps) {
  return (
    <span
      className={['material-symbols-outlined', className].filter(Boolean).join(' ')}
      style={{
        fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 24`,
      }}
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      title={title}
    >
      {name}
    </span>
  )
}

