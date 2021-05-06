import { commonHelpers } from '@nx-serverless-test/common-helpers';

export const handler = async () => {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: commonHelpers() }),
  };
};
