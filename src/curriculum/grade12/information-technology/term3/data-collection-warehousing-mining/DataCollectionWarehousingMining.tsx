import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import { bank, learnSteps } from './DataCollectionWarehousingMiningContent';

const DataCollectionWarehousingMining = () => (
  <CapsSubjectTopic
    title="Data Collection, Data Warehousing and Data Mining"
    subtitle="RFID, online and invisible collection, warehouses, the steps of mining, and location-based data"
    learnSteps={learnSteps}
    task="gr12-data-collection-warehousing-mining-t3"
    bank={bank}
    apiPath="/api/caps/it"
    grade={12}
  />
);

export default DataCollectionWarehousingMining;
