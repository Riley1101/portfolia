export interface Org {
  id: number;
  login: string;
  gravatar_id: string;
  url: string;
  avatar_url: string;
}
export interface Repo {
  id: number;
  name: string;
  url: string;
}
export interface Actor {
  id: number;
  login: string;
  display_login: string;
  gravatar_id: string;
  url: string;
  avatar_url: string;
}

export interface PullRequest {
  url: string;
  id: number;
  node_id: string;
  html_url: string;
  diff_url: string;
  patch_url: string;
  issue_url: string;
  number: number;
  state: string;
  locked: boolean;
  title: string;
  user: Actor;
  body: string;
  created_at: string;
  updated_at: string;
  closed_at: string;
  merged_at: string;
  merge_commit_sha: string;
}
export interface Commit {
  sha: string;
  author: { email: string; name: string };
  message: string;
  url: string;
}

export interface PushEventPayLoad {
  push_id: number;
  size: number;
  distinct_size: number;
  ref: string;
  head: string;
  before: string;
  commits: Commit[];
}

export interface CreateEventPayload {
  ref: string;
  ref_type: string;
  master_branch: string;
  description: string;
  pusher_type: string;
}

export interface WatchEventPayload {
  action: string;
  number: number;
}
export interface PullRequestEventPayload {
  action: string;
  number: number;
  pull_request: PullRequest;
}

export interface PushEvent {
  id: string;
  type: "PushEvent";
  actor: Actor;
  repo: Repo;
  payload: PushEventPayLoad;
  created_at: string;
}

export interface CreateEvent {
  id: string;
  type: "CreateEvent";
  actor: Actor;
  repo: Repo;
  payload: CreateEventPayload;
  created_at: string;
}

export interface WatchEvent {
  id: string;
  type: "WatchEvent";
  actor: Actor;
  repo: Repo;
  created_at: string;
  payload: WatchEventPayload;
}

export interface PushEvent {
  id: string;
  type: "PushEvent";
  actor: Actor;
  payload: PushEventPayLoad;
}

export interface PullRequestEvent {
  id: string;
  type: "PullRequestEvent";
  actor: Actor;
  payload: PullRequestEventPayload;
  repo : Repo;
  created_at: string;
}

export interface Forkee {
    id: number;
    node_id: string;
    name : string;
    git_url: string;
    homepage: string;
}

export interface ForkEventPayload {
    forkee : Forkee;
}

export interface ForkEvent{
    id: string;
    type: "ForkEvent";
    actor: Actor;
    repo: Repo;
    payload: ForkEventPayload;
    created_at:string;
}

type PublicEvent = PushEvent | CreateEvent | WatchEvent | PullRequestEvent | ForkEvent;

export interface PublicEventData {
  status: number;
  data: PublicEvent[];
  url: string;
}
