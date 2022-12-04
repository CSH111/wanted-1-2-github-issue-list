export class IssueService {
  // 객체지향 활용 DI
  #client;
  constructor(httpClient) {
    this.#client = httpClient;
  }

  getIssues(page, per_page) {
    return this.#client.get("", { params: { sort: "comments", per_page, page } });
  }
  getIssueDetail(issueNumber) {
    return this.#client.get(`/${issueNumber}`);
  }
  getIssueComments(issueNumber) {
    return this.#client.get(`/${issueNumber}/comments`);
  }
}

export const createIssueService = (httpClient) => {
  // 함수형 DI
  return {
    getIssues(page, sort, per_page) {
      console.log({ page, sort, per_page });
      return httpClient.get("", { params: { sort, per_page, page } });
    },
    getIssueDetail(issueNumber) {
      return httpClient.get(`/${issueNumber}`);
    },
    getIssueComments(issueNumber) {
      return httpClient.get(`/${issueNumber}/comments`);
    },
  };
};
