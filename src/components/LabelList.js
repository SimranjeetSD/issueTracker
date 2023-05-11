import {useLabelsData} from '../helpers/useLablesData';

// export default function LabelList({ selected, toggle }) {
//   const labelQuery = useLabelsData();

//   return (
//     <div className="labels">
//       <h3>Labels</h3>
//       {labelQuery.isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {labelQuery.data.map((label) => (
//             <li key={label.id}>
//               <button
//                 onClick={() => toggle(label.id)}
//                 className={` label ${
//                   selected.includes(label.id) ? "selected" : " "
//                 } ${label.color}`}
//               >
//                 {label.name}
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import axios from 'axios';

export default function LabelList() {
  const LabelList = useLabelsData();
  console.log('🚀 ~ file: LabelList.js:36 ~ LabelList ~ LabelList:', LabelList);

  return (
    <View style={styles.container}>
      {/* <ScrollView style={{flex: 1}} horizontal={true}> */}
      {LabelList?.data?.map(item => {
        return (
          <>
            <TouchableOpacity style={[styles.bugButton, { backgroundColor: item.color}]}>
              <Text style={styles.issueText}>{item?.name}</Text>
            </TouchableOpacity>
          </>
        );
      })}
      {/* </ScrollView> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bugButton: {
    width: 75,
    height: 25,
    // backgroundColor: 'red',
    marginLeft: 8,
    marginTop: 4,
    borderRadius: 12,
    padding: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  issueText:{
    fontSize: 12,
    fontWeight: '900',
    color:'#fff'
  }
});
