import {useQuery} from 'react-query';
import {IssueItem} from './IssueItem';
import {useState} from 'react';
// export default function IssuesList({ labels, status }) {
//   const issuesQuery = useQuery(["issues", { labels, status }], () => {
//     const statusString = status ? `&status=${status}` : "";
//     const labelString = labels.map((label) => `labels[]=${label}`).join("&");
//     return fetch(`api/issues?${labelString}${statusString}`).then((res) =>
//       res.json()
//     );
//   });
//   const [searchValue, setsearchValue] = useState("");

//   const searchQuery = useQuery(["issues", "search", searchValue], () =>
//     fetch(`/api/search/issues?q=${searchValue}`).then((res) => res.json()), {
//       enabled: !!searchValue,
//     });
//   console.log("SEARCH QUERY>>>>>", searchQuery);
//   return (
//     <div>
//       <form
//         onSubmit={(event) => {
//           event.preventDefault();
//           setsearchValue(event.target.elements.search.value);
//         }}
//       >
//         <label htmlFor="search">Search Issues</label>
//         <input
//           type="search"
//           placeholder="Search"
//           name="search"
//           id="search"
//           onChange={(event) => {
//             if (event.target.value.length === 0) {
//               setsearchValue("");
//             }
//           }}
//         />
//       </form>
//       <h1>Issues List</h1>
//       {issuesQuery?.isLoading ? (
//         <p> Loading...</p>
//       ) : searchQuery.fetchStatus === "idle" &&
//         searchQuery.isLoading === true ? (
//         <ul className="issues-list">
//           {issuesQuery?.data?.map((issue) => (
//             <IssueItem
//               id={issue.id}
//               title={issue.title}
//               number={issue.number}
//               assignee={issue.assignee}
//               commentCount={issue.comments.length}
//               createdBy={issue.createdBy}
//               createdDate={issue.createdDate}
//               labels={issue.labels}
//               status={issue.status}
//             />
//           ))}
//         </ul>
//       ) : (
//         <>
//           <h2>Search Results</h2>
//           {searchQuery.isLoading ? (
//             <p>Loading...</p>
//           ) : (
//             <>
//               <p>{searchQuery?.data?.count} Results</p>
//               <ul className="issues-list">
//                 {searchQuery?.data?.items?.map((issue) => (
//                   <IssueItem
//                     id={issue.id}
//                     title={issue.title}
//                     number={issue.number}
//                     assignee={issue.assignee}
//                     commentCount={issue.comments.length}
//                     createdBy={issue.createdBy}
//                     createdDate={issue.createdDate}
//                     labels={issue.labels}
//                     status={issue.status}
//                   />
//                 ))}
//               </ul>
//             </>
//           )}
//         </>
//       )}
//     </div>
//   );
// }
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {isQueryKey} from 'react-query/types/core/utils';

export default function IssuesList({labels, status}) {
  const issuesQuery = useQuery(['issues'], () => {
    // const statusString = status ? `&status=${status}` : '';
    // const labelString = labels.map(label => `labels[]=${label}`).join('&');
    return fetch(`https://645c9425e01ac610588d3ce3.mockapi.io/issuesList`).then(
      res => res.json(),
    );
  });
  console.log(
    '🚀 ~ file: IssuesList.jsx:101 ~ issuesQuery ~ issuesQuery:',
    issuesQuery.data,
  );
  const [searchValue, setsearchValue] = useState('react');

  const searchQuery = useQuery(
    ['issues', 'search', searchValue],
    () =>
      fetch(`http://192.168.0.58:3000/api/search/issues?q=${searchValue}`).then(
        res => res.json(),
      ),
    {
      enabled: !!searchValue,
    },
  );

  console.log('SEARCH QUERY>>>>>', searchQuery);
  return (
    <View style={{flex: 1}}>
      {issuesQuery?.data?.map(item => {
        return (
          <View style={styles.issueContainer}>
            <View style={styles.commentLabel}><Text>{item?.labels[0]}</Text></View>
            <View style={styles.commentInfoSec}><Text>{item?.title}</Text></View>
            <View style={styles.commentSec}><Text>{item?.number}</Text></View>
          </View>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  issueContainer: {
    height: 75,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 3,
    display: 'flex',
    flexDirection:'row'
   
  },
  commentLabel: {
    width: '20%',
    backgroundColor: 'pink',
    height: '100%',
  },

  commentInfoSec: {
    width: '60%',
    backgroundColor: 'yellow',
    height: '100%',
  },
  commentSec:{
    width: '20%',
    backgroundColor:'red'
  }
});
