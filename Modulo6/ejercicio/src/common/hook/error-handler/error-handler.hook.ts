import { ErrorHandlerResponse, ErrorStrategies } from './error-handler.model';
import { AxiosError } from 'axios';

export const useErrorHandler = (
  commonHttpStatusCodeStrategies?: ErrorStrategies
): ErrorHandlerResponse => {

  const basicHttpStatusCodeStrategies: ErrorStrategies = {
    400: (_: AxiosError) => console.log('badRequest'),
    401: (_: AxiosError) => console.log('unauthorized'),
    403: (_: AxiosError) => console.log('forbidden'),
    404: (_: AxiosError) => console.log('notFound'),
    500: (_: AxiosError) => console.log('internalServerError'),
    unknown: (_: AxiosError) => console.log('unknown'),
    ...commonHttpStatusCodeStrategies
  };

  const handleError =
    <T, D>(customHttpStatusCodeStrategies?: ErrorStrategies<T, D>, finallyExecution?: () => void) =>
    (error: AxiosError<T, D>) => {
      const code = error?.response?.status || 'unknown';

      const strategies: ErrorStrategies<T, D> = {
        ...basicHttpStatusCodeStrategies,
        ...customHttpStatusCodeStrategies
      };

      strategies[code]!(error);

      if (finallyExecution) {
        finallyExecution();
      }
    };

  return { handleError };
};
