// tslint:disable: max-line-length
import { ErrorCode } from '../codes/errorCode';

export class ErrorCodes
{
    public static readonly OK: ErrorCode = { code: '00', description: 'Success'};
    public static readonly Unknown: ErrorCode = { code: '01', description: 'Failed' };

    // Related to Signin
    public static readonly InvalidAuthCode: ErrorCode = { code: 'S01', description: 'Invalid auth code'};
    public static readonly FailedAuthorization: ErrorCode = { code: 'S02', description: 'Authorization failed'};
    public static readonly FailedToSaveUser: ErrorCode = { code: 'S03', description: 'Failed to save the user'};

    // Related to Remote calls
    public static readonly InvalidResponse: ErrorCode = { code: 'R01', description: 'Invalid response from an external API'};

    // Related to shortening
    public static readonly EnterUrl: ErrorCode = { code: 'U01', description: 'Please enter a url!'};
    public static readonly InvalidUrl: ErrorCode = { code: 'U02', description: 'Enter a valid URL!'};
    public static readonly FailedToCreateUrl: ErrorCode = { code: 'U03', description: 'Failed to generate short URL'};
    public static readonly FailedToNavigate: ErrorCode = { code: 'U04', description: 'Failed to navigate'};
    public static readonly FailedToFetchUrlUniqueId: ErrorCode = { code: 'U05', description: 'Failed to get url unique ID'};

};