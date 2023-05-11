import {useQuery} from 'react-query';
import {BASE_URL} from './constants';
export function useLabelsData() {
  const labelsQuery = useQuery(
    ['labels'],
    () => fetch(`https://645c9425e01ac610588d3ce3.mockapi.io/issues`).then(res => res.json()),
    // {
    //   staleTime: 1000 * 60 * 60,
    // },
  );

  return labelsQuery;
}
