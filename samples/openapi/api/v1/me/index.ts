/* eslint-disable */
import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    status: 200;

    /** OK */
    resBody: {
      userId: number;
      screenName: string;
      email: string;
      isStaff: boolean;
      channelName?: string | undefined;
      channelId?: number | undefined;
      url?: string | undefined;
    };
  };
}>;
