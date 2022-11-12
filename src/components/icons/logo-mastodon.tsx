import {SvgIcon, SvgProps} from './svg-icon'

import Svg from './svgs/logo-mastodon.svg'

export function LogoMastodon(props: SvgProps) {
  return <SvgIcon Component={Svg} {...props} />
}
