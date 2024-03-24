export class AppUser {
  email = "";
  userName = "";
  photoUrl = "";
  providerId = "";
  developerData?: Developer;
  status = "";
}

export class Product {
  name: string = "";
  url: string = "";
  version: string = "";
  status: string = "";
  lockedAt: string = "";
  lockedBy: string = "";
}

export class Developer {
  email: string = "";
  firstName: string = "";
  lastName: string = "";
  userName: string = "";
  developerId?: string;
  organizationName?: string;
  createdAt?: string;
  lastModifiedAt?: string;
  status?: string;
  apps?: string[];
  error?: Error;
  attributes?: KeyValue[];
}

export class ApiApp {
  appId: string = "";
  name: string = "";
  description?: string = "";
  createdAt: string = "";
  createdAtDate?: string = "";
  callbackUrl?: string;
  apiProducts?: string[];
  status?: string;
  credentials?: ApiAppCredential[];
  attributes?: KeyValue[];
  error?: Error;
}

export class ApiAppCredential {
  consumerKey: string = "";
  consumerSecret: string = "";
  issuedAt: string = "";
  expiresAt: string = "";
  scopes?: string[];
  apiProducts?: ApiAppCredentialProduct[];
  status?: string;
  error?: Error;
}

export class ApiAppCredentialProduct {
  apiproduct: string = "";
  status?: string = "";
}

export class ApiApps {
  app: ApiApp[] = [];
}

export interface KeyValue {
  name: string;
  value: string;
}

export interface Error {
  code: string;
  message: string;
  status: string;
}

export class AHSubscription {
  product: string = "";
  listingId: string = "";
  marketplaceId: string = "";
  project: string = "";
  dataset: string = "";
  createdAt: string = "";
  status?: string = "Inactive";
}

export class BucketSubscription {
  product: string = "";
  url: string = "";
  createdAt: string = "";
  status: string = "";
}

export class UsageData {
  environments: UsageDataEnvironment[] = [];
}

export class UsageDataEnvironment {
  name: string = "";
  dimensions: UsageDataDimension[] = [];
}

export class UsageDataDimension {
  name: string = "";
  metrics: {name: string, values: {value: string, timesteamp: number}[]}[] = [];
}
