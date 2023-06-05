import {
  queryDb,
  add_user,
  user_exists,
  unsubscribe,
} from "@/utils/newsletter";

jest.mock("@verce/postgres", () => {});

describe("Newsletter API ", () => {
  test("queryDb", async () => {});
});
