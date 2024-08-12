/* eslint-disable */
import type { DefineMethods } from 'aspida';
import type * as Types from '../../../@types';

export type Methods = DefineMethods<{
  get: {
    reqHeaders?: Types.AppIdHeader & Types.AppPlatformHeader & Types.AppVersionHeader & Types.AppOrganisationToken | undefined;

    query?: {
      unpublished?: boolean | undefined;
      'read-only'?: boolean | undefined;
    } | undefined;

    status: 200;
    /** OK */
    resBody: {
      id: number;
      name: string;
      role: string;
      created: string;
      subdomain: string;
      url: string;
      ownerEmail: string;
      ownerName: string;
      organisationName?: string | undefined;
      ownerId: number;
      organisationId: number;
      pinnedStoryId?: number | undefined;
      stories: {
        id: number;
        title: number;
        status: string;
        ownerId: number;
        allowAccessToEditorLimited: boolean;
      }[];
    }[];
  };
}>;
