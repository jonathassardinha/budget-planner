import { fail } from "@sveltejs/kit";
import { object, string } from "zod";
import type { Actions, PageServerLoad } from "./$types";

export const load = (async () => {
  return {};
}) satisfies PageServerLoad;

const addBillSchema = object({
  name: string().trim().min(1, "Name is required"),
});

export const actions: Actions = {
  default: async (event) => {
    const data = Object.fromEntries(await event.request.formData());
    const parsedData = addBillSchema.safeParse(data);

    if (!parsedData.success) {
      const errors = parsedData.error.errors.reduce((acc, error) => {
        return {
          ...acc,
          [error.path[0]]: error.message,
        };
      }, {});

      return fail(400, { errors });
    }
  },
};
