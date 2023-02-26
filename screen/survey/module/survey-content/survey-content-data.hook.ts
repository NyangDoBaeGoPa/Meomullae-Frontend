import { useQuery } from '@tanstack/react-query';

import { instance } from '@/components';

export const useSurveyContentDataQuery = (Key: string) => {
  const {
    data: { contents },
  } = useQuery({
    queryKey: ['survey'],
    queryFn: async () => {
      const res = await instance(`/survey?type=${Key}`);

      return res.data;
    },
    suspense: true,
  });

  return { contents };
};
