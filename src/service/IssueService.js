export class IssueService {
  // 객체지향 활용 DI
  #client;
  constructor(httpClient) {
    this.#client = httpClient;
  }

  getIssues(pageToRender = 1) {
    return this.#client.get("", { params: { sort: "comments", per_page: 8, page: pageToRender } });
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
    getIssues(pageToRender = 1) {
      return httpClient.get("", { params: { sort: "comments", per_page: 8, page: pageToRender } });
    },
    getIssueDetail(issueNumber) {
      return httpClient.get(`/${issueNumber}`);
    },
    getIssueComments(issueNumber) {
      return httpClient.get(`/${issueNumber}/comments`);
    },
  };
};
