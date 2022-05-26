import React from 'react'

import { ICol } from '../../../../interfaces/common'

export default function Col({ className, children, base, sm, md, lg, xl }: ICol) {
  const mediaClasses =
    (base ? ` ${['base-' + base]}` : '') +
    (sm ? ` ${['sm-' + sm]}` : '') +
    (md ? ` ${['md-' + md]}` : '') +
    (lg ? ` ${['lg-' + md]}` : '') +
    (xl ? ` ${['xl-' + lg]}` : '')
  return <div className={`col ${mediaClasses} ${className ? className : ''}`}>{children}</div>
}
