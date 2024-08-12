/* eslint-disable */
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  post: {
    status: 200;

    /** OK */
    resBody: {
      token: string;
    };

    reqBody: {
      organisationSubdomain: string;
      channelSubdomain: string;
      userId: number;
    };
  };
}>;
