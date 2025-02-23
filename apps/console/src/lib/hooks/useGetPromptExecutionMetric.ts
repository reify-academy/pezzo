import { useQuery } from "@tanstack/react-query";
import { GET_PROMPT_EXECUTION_METRICS } from "~/graphql/definitions/queries/metrics";
import { gqlClient } from "../graphql";
import { GetPromptMetricsInput } from "~/@generated/graphql/graphql";

export const useGetPromptExecutionMetric = (
  queryKey: string[],
  data: GetPromptMetricsInput
) =>
  useQuery({
    queryKey,
    queryFn: () =>
      gqlClient.request(GET_PROMPT_EXECUTION_METRICS, {
        data,
      }),
  });
