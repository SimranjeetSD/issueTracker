// import { useState } from "react";
// import IssuesList from "../components/IssuesList";
// import LabelList from "../components/LabelList";
// import { StatusSelect } from "./StatusSelect";
// export default function Issues() {
//   const [labels, setlabels] = useState([]);
//   const [status, setstatus] = useState("");
//   return (
//     <div>
//       <main>
//         <section>
//           <h1>Issues</h1>
//           <IssuesList labels={labels} status={status} />
//         </section>
//         <aside>
//           <LabelList
//             selected={labels}
//             toggle={(label) =>
//               setlabels((currentLabels) =>
//                 currentLabels.includes(label)
//                   ? currentLabels.filter(
//                       (currentLabel) => currentLabel !== label
//                     )
//                   : currentLabels.concat(label)
//               )
//             }
//           />
//           <h3>Status</h3>
//           <StatusSelect
//             value={status}
//             onChange={(event) => setstatus(event.target.value)}
//           />
//         </aside>
//       </main>
//     </div>
//   );
// }

import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import LabelList from '../components/LabelList';
import {StatusSelect} from './StatusSelect';
import IssuesList from '../components/IssuesList';

export default function Issues() {
  const [labels, setlabels] = useState([]);
  const [status, setstatus] = useState('');
  return (
    <View style={styles.container}>
      <Text>Github Issues Tracker</Text>
      <View style={styles.labelsSection}>
        <LabelList />
      </View>
      <View style={styles.filtersSec}>
        <StatusSelect
          value={status}
          onChange={event => setstatus(event.target.value)}
        />
      </View>
      <View style={styles.issuesListSec}>
        <IssuesList/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelsSection: {
    flex: 0.1,
    width: '100%',
  },

  filtersSec: {
    flex: 0.15,
    backgroundColor: 'pink',
    width: '100%',
  },
  issuesListSec: {
    flex: 0.8,
    width: '100%',
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal: 10,
   
  },
});
