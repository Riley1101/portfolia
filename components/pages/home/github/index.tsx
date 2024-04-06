import React from "react";
import Image from "next/image";
import { getGithubFeed } from "@/utils/github-feed";
import { Github } from "@/components/common/icons";

import type {
  PushEvent,
  ForkEvent,
  PullRequestEvent,
  WatchEvent,
  CreateEvent,
} from "@/types/github";

import dateFormat from "dateformat";

function WatchEventCard(data: WatchEvent) {
  const { created_at, payload, repo } = data;
  return (
    <div className="flex flex-col gap-2 p-2 border rounded-md hover:bg-gradient-to-r hover:from-theme-accent-opaque border-theme-accent-opaque md:p-4 bg-theme-accent-opaque">
      <span className="text-sm text-theme-accent">
        {dateFormat(created_at, "mmm dd yyyy HH:MM")}
      </span>
      <div>
        <span className="text-sm">
          <span>
            Event : {payload.action === "started" ? "Starred" : payload.action}
          </span>
        </span>
        <p className="text-sm cursor-pointer">
          Repo :{" "}
          <a
            href={"https://github.com/" + repo.name}
            target="_blank"
            className="hover:text-theme-accent"
          >
            {repo.name}
          </a>
        </p>
      </div>
    </div>
  );
}

function CreateEventCard(data: CreateEvent) {
  const { created_at, payload, repo } = data;
  return (
    <div className="flex flex-col gap-2 p-2 border rounded-md cursor-pointer cusor-pointer hover:bg-gradient-to-r hover:from-theme-accent-opaque md:p-4 border-theme-primary-opaque bg-theme-accent-opaque">
      <span className="text-sm text-theme-accent">
        {dateFormat(created_at, "mmm dd yyyy HH:MM")}
      </span>
      <div>
        {payload.ref === null ? (
          <p className="text-sm cursor-pointer leading-[1.5]">
            Created new repository{" "}
            <a
              href={"https://github.com/" + repo.name}
              target="_blank"
              className="text-theme-accent inline"
            >
              {repo.name.replace("Riley1101/", " ")}
            </a>{" "}
            with {payload.master_branch} branch.
          </p>
        ) : (
          <>
            <p className="text-sm cursor-pointer leading-[1.5]">
              Created new branch{" "}
              <span className="text-theme-accent">{payload.ref}</span> at{" "}
              <a
                href={"https://github.com/" + repo.name}
                target="_blank"
                className="text-theme-accent inline"
              >
                {repo.name.replace("Riley1101/", " ")}
              </a>{" "}
            </p>{" "}
          </>
        )}
      </div>
    </div>
  );
}

function ForkEventCard(data: ForkEvent) {
  const { created_at, repo } = data;
  return (
    <div className="flex flex-col gap-2 p-2 border rounded-md hover:bg-gradient-to-r hover:from-theme-accent-opaque md:p-4 border-theme-primary-opaque bg-theme-accent-opaque">
      <span className="text-sm text-theme-accent">
        {dateFormat(created_at, "mmm dd yyyy HH:MM")}
      </span>
      <div>
        <p className="text-sm cursor-pointer">
          Forked{" "}
          <a
            href={"https://github.com/" + repo.name}
            target="_blank"
            className="text-theme-accent"
          >
            {repo.name}{" "}
          </a>
          from main
        </p>
      </div>
    </div>
  );
}

function PullRequestCard(data: PullRequestEvent) {
  const { created_at, repo, type } = data;
  return (
    <div className="flex flex-col gap-2 p-2 border rounded-md hover:bg-gradient-to-r hover:from-theme-accent-opaque md:p-4 border-theme-primary-opaque bg-theme-accent-opaque">
      <span className="text-sm text-theme-accent">
        {dateFormat(created_at, "mmm dd yyyy HH:MM")}
      </span>
      <div className="flex flex-col">
        <p className="mb-1 text-sm cursor-pointer">Event : {type}</p>
        <p className="text-sm cursor-pointer">
          Repo :{" "}
          <a
            href={"https://github.com/" + repo.name}
            target="_blank"
            className="hover:text-theme-accent"
          >
            {repo.name}
          </a>
        </p>
      </div>
    </div>
  );
}
function PushEventCard(data: PushEvent) {
  const { created_at, repo, payload } = data;
  return (
    <div className="flex flex-col gap-2 p-2 border rounded-md hover:bg-gradient-to-r hover:from-theme-accent-opaque md:p-4 border-theme-primary-opaque bg-theme-accent-opaque">
      <span className="text-sm text-theme-accent">
        {dateFormat(created_at, "mmm dd yyyy HH:MM")}
      </span>
      <div>
        <p className="text-sm cursor-pointer">
          New commit at{" "}
          <a
            href={"https://github.com/" + repo.name}
            target="_blank"
            className="hover:text-theme-accent"
          >
            {repo.name}
          </a>
        </p>
        <p className="text-[12px] text-gray-500 mt-2 italic">
          {payload.commits[0].message}
        </p>
      </div>
    </div>
  );
}

export const GithubFeed = async () => {
  const data = await getGithubFeed();
    console.log(data)
  return (
    <div className="lg:w-[90%]  p-4 bg-theme-accent-opaque w-full border border-theme-primary-opaque rounded-md">
      <div className="flex items-center gap-4 ">
        <Image
          className="border-2 rounded-full w-[45px] h-[45px] cursor-pointer aspect-video border-theme-primary-opaque hover:border-theme-primary"
          width={45}
          height={45}
          src="/images/mastro.png"
          alt="profile"
        ></Image>
        <div className="flex flex-col overflow-auto">
          <a
            href="https://github.com/Riley1101"
            target={"_blank"}
            rel="noreferrer"
            className="block object-contain cursor-pointer text-body hover:text-theme-accent"
          >
            Riley1101
          </a>
          <span className="text-sm text-gray-500">@Github</span>
        </div>
      </div>
      <div className="flex items-center gap-2 my-4 mt-6 text-sm font-bold">
        <Github className="w-[20px] aspect-square text-theme-primary"></Github>
        Recent Events
      </div>

      <div className="flex flex-col gap-4 max-h-[300px] overflow-auto pr-1">
        {data.map((item) => {
          switch (item.type) {
            case "PushEvent":
              return <PushEventCard key={item.id} {...item}></PushEventCard>;
            case "CreateEvent":
              return (
                <CreateEventCard key={item.id} {...item}></CreateEventCard>
              );
            case "ForkEvent":
              return <ForkEventCard key={item.id} {...item}></ForkEventCard>;
            case "WatchEvent":
              return <WatchEventCard key={item.id} {...item}></WatchEventCard>;
            case "PullRequestEvent":
              return (
                <PullRequestCard key={item.id} {...item}></PullRequestCard>
              );
            default:
              return <></>;
          }
        })}
      </div>
    </div>
  );
};
