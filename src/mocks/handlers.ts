import { http, HttpResponse } from "msw";

const jobs = [
  { id: 1, title: "Senior Frontend Developer", department: "Engineering", applicants: 12, status: "Active" },
  { id: 2, title: "UX/UI Designer",          department: "Design",       applicants: 25, status: "Active" },
  { id: 3, title: "Product Manager",         department: "Product",      applicants: 8,  status: "Paused" },
  { id: 4, title: "DevOps Engineer",         department: "Engineering",  applicants: 15, status: "Closed" }
];

const candidates: Record<number, any[]> = {
  1: [
    { id: 1, name: "Alice Johnson", status: "Reviewed", score: 88 },
    { id: 2, name: "Bob Williams",  status: "Invited",  score: null }
  ],
  2: [
    { id: 3, name: "Charlie Brown", status: "New",   score: null },
    { id: 4, name: "Diana Prince",  status: "Hired", score: 95  }
  ]
};

export const handlers = [
  http.get("/mock/jobs", () => HttpResponse.json(jobs)),
  http.get("/mock/candidates/:jobId", ({ params }) => {
    const list = candidates[Number(params.jobId)] ?? [];
    return HttpResponse.json(list);
  })
];
