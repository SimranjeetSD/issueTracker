// const possibleStatus = [
//   { id: "backlog", label: "Backlog" },
//   { id: "todo", label: "To-do" },
//   { id: "inProgress", label: "In Progress" },
//   { id: "done", label: "Done" },
//   { id: "cancelled", label: "Cancelled" },
// ];
// export const StatusSelect = ({ value, onChange }) => {
//   return (
//     <select value={value} onChange={onChange} className="status-select">
//       <option value={""}>Select a value to filter</option>
//       {possibleStatus.map((status) => (
//         <option value={status.id} key={status.id}>
//           {status.label}
//         </option>
//       ))}
//     </select>
//   );
// };
import {View, Text} from 'react-native';
import React from 'react';

export function StatusSelect({value, onChange}) {
  return (
    <View>
      <Text>StatusSelect</Text>
    </View>
  );
}
