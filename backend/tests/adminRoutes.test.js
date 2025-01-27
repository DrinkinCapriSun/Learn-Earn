const request = require("supertest");
const app = require("../index");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

describe("Admin Routes", () => {
  let adminToken;

  beforeAll(async () => {
    // Create a test admin user
    await prisma.user.create({
      data: {
        username: "admin",
        password: "adminpass",
        role: "admin",
      },
    });

    // Login as admin to get token
    const res = await request(app)
      .post("/api/auth/login")
      .send({ username: "admin", password: "adminpass" });
    adminToken = res.body.token;
  });

  afterAll(async () => {
    // Clean up test data
    await prisma.user.deleteMany();
    await prisma.$disconnect();
  });

  it("should allow admin to upload course", async () => {
    const res = await request(app)
      .post("/api/admin/upload_course")
      .set("Authorization", `Bearer ${adminToken}`);
    expect(res.statusCode).toBe(201);
    expect(res.body.message).toBe("Course uploaded successfully");
  });

  it("should deny non-admin users", async () => {
    // Create a test user
    await prisma.user.create({
      data: {
        username: "user",
        password: "userpass",
        role: "user",
      },
    });

    // Login as user to get token
    const userRes = await request(app)
      .post("/api/auth/login")
      .send({ username: "user", password: "userpass" });
    const userToken = userRes.body.token;

    // Attempt to access admin endpoint
    const res = await request(app)
      .post("/api/admin/upload_course")
      .set("Authorization", `Bearer ${userToken}`);
    expect(res.statusCode).toBe(403);
  });
});