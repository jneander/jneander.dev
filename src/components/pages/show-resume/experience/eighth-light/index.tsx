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

import styles from '../../styles.module.scss'

export function EighthLight() {
  return (
    <section>
      <header className={styles.PositionHeader}>
        <h2>
          <a href="https://www.8thlight.com">8th Light</a> ~ Software Development Consultancy
        </h2>
      </header>

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
