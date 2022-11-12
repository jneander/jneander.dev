import {SvgIcon, SvgProps} from './svg-icon'

import Svg from './svgs/logo-github.svg'

export function LogoGithub(props: SvgProps) {
  return <SvgIcon Component={Svg} {...props} />
}
