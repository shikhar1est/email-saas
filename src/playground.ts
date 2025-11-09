import { db } from "./server/db.ts";


await db.user.create({
  data: {
    emailAddress: "john.doe@example.com",
    firstName: "John",
    lastName: "Doe",
  }
});