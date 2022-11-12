import {SvgIcon, SvgProps} from './svg-icon'

import Svg from './svgs/logo-linkedin.svg'

export function LogoLinkedin(props: SvgProps) {
  return <SvgIcon Component={Svg} {...props} />
}
