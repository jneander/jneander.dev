import type {FC, ComponentPropsWithoutRef} from 'react'

export type SvgProps = ComponentPropsWithoutRef<'svg'>

export interface SvgIconProps extends SvgProps {
  Component: FC
}

export function SvgIcon(props: SvgIconProps) {
  const {Component, ...svgProps} = props

  return <Component {...svgProps} />
}
