import {CompanyHeading} from '../shared'
import {Axus} from './axus'
import {BlustorGatekeeper} from './blustor-gatekeeper'
import {Csgi} from './csgi'
import {GrouponAaa} from './groupon-aaa'
import {GrouponSalesWorkbench} from './groupon-sales-workbench'
import {GrouponUnifiedTool} from './groupon-unified-tool'
import {GrouponVoucherInventory} from './groupon-voucher-inventory'
import {IdeoOjai} from './ideo-ojai'
import {IdeoProgenitor} from './ideo-progenitor'
import {NcsaClientRms} from './ncsa-client-rms'
import {NcsaRecruitRms} from './ncsa-recruit-rms'
import {Vushaper} from './vushaper'

export function EighthLight() {
  return (
    <section aria-labelledby="8th-light">
      <CompanyHeading
        description="Software Development Consultancy"
        headingId="8th-light"
        name="8th Light"
        url="https://www.8thlight.com"
      />

      <BlustorGatekeeper />
      <IdeoOjai />
      <Vushaper />
      <Axus />
      <NcsaRecruitRms />
      <GrouponUnifiedTool />
      <GrouponSalesWorkbench />
      <GrouponVoucherInventory />
      <IdeoProgenitor />
      <NcsaClientRms />
      <GrouponAaa />
      <Csgi />
    </section>
  )
}
