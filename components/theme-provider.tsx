import * as React from 'react'

export function ThemeProvider({
  children,
  ..._props
}: React.PropsWithChildren) {
  return <>{children}</>
}
