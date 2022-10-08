import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());

export function searchForListOfChurches(keyword) {
  const { data, error } = useSWR('/api/search?keyword=' + keyword, fetcher);

  if (error) return [];
  if (!data) return [];

  return data.list_of_churches || [];
}
